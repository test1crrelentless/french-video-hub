import express from 'express';
import cors from 'cors';
import path from 'path';
import https from 'https';
import http from 'http';
import { dbPromise, initDb } from './db';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Initialize DB
initDb().catch(console.error);

// Image proxy: fetch external images so they load despite CORS/referrer blocking (e.g. CDN hotlink protection)
app.get('/api/proxy', (req, res) => {
    const url = req.query.url as string;
    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'Missing url query' });
    }
    let parsed: URL;
    try {
        parsed = new URL(url);
    } catch {
        return res.status(400).json({ error: 'Invalid URL' });
    }
    if (!['http:', 'https:'].includes(parsed.protocol)) {
        return res.status(400).json({ error: 'Only http/https allowed' });
    }
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)', 'Accept': 'image/*' } }, (proxyRes) => {
        const ctype = (proxyRes.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
        const isImage = ctype.startsWith('image/') || ctype === 'application/octet-stream';
        if (!isImage) {
            res.status(415).json({ error: 'Not an image' });
            return;
        }
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'image/jpeg');
        proxyRes.pipe(res);
    }).on('error', (err) => {
        console.error('Proxy error:', err.message);
        res.status(502).json({ error: 'Failed to fetch image' });
    });
});

// API Routes
app.get('/api/videos', async (req, res) => {
    try {
        const db = await dbPromise;
        const { category, search, limit, sort, author } = req.query;

        let query = 'SELECT * FROM videos';
        const params: any[] = [];
        const conditions: string[] = [];

        if (category) {
            conditions.push('category = ?');
            params.push(category);
        }

        if (search) {
            conditions.push('(title LIKE ? OR author LIKE ?)');
            params.push(`%${search}%`, `%${search}%`);
        }

        if (author) {
            conditions.push('author = ?');
            params.push(author);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        if (sort === 'popular') {
            query += ' ORDER BY views DESC';
        } else if (sort === 'recent') {
            query += ' ORDER BY uploadedAt DESC';
        } else {
            // Default to recent as requested
            query += ' ORDER BY uploadedAt DESC';
        }

        if (limit) {
            query += ' LIMIT ?';
            params.push(parseInt(limit as string));
        }

        const videos = await db.all(query, params);

        // Attach tags
        for (const video of videos) {
            const tags = await db.all('SELECT tag FROM tags WHERE video_id = ?', video.id);
            video.tags = tags.map(t => t.tag);
        }

        res.json(videos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/videos/:id', async (req, res) => {
    try {
        const db = await dbPromise;
        const video = await db.get('SELECT * FROM videos WHERE id = ?', req.params.id);

        if (!video) {
            return res.status(404).json({ error: 'Video not found' });
        }

        const tags = await db.all('SELECT tag FROM tags WHERE video_id = ?', video.id);
        video.tags = tags.map(t => t.tag);

        res.json(video);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/videos/slug/:slug', async (req, res) => {
    try {
        const db = await dbPromise;
        const video = await db.get('SELECT * FROM videos WHERE slug = ?', req.params.slug);

        if (!video) {
            return res.status(404).json({ error: 'Video not found' });
        }

        const tags = await db.all('SELECT tag FROM tags WHERE video_id = ?', video.id);
        video.tags = tags.map(t => t.tag);

        res.json(video);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Bulk import videos
app.post('/api/videos/bulk', async (req, res) => {
    try {
        const db = await dbPromise;
        const { videos } = req.body;

        if (!videos || !Array.isArray(videos)) {
            return res.status(400).json({ error: 'Invalid videos array' });
        }

        let inserted = 0;
        for (const video of videos) {
            // Insert video
            await db.run(
                `INSERT INTO videos (id, slug, title, description, thumbnail, author, duration, views, uploadedAt, category, hlsUrl)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                video.id,
                video.slug,
                video.title,
                video.description,
                video.thumbnail,
                video.author,
                video.duration,
                video.views,
                video.uploadedAt,
                video.category,
                video.hlsUrl
            );

            // Insert tags
            if (video.tags && Array.isArray(video.tags)) {
                for (const tag of video.tags) {
                    await db.run(
                        'INSERT INTO tags (video_id, tag) VALUES (?, ?)',
                        video.id,
                        tag
                    );
                }
            }
            inserted++;
        }

        res.json({ success: true, inserted });
    } catch (error) {
        console.error('Bulk import error:', error);
        res.status(500).json({ error: 'Failed to import videos' });
    }
});

// External script import endpoint (matches Python sync script)
app.post('/api/admin/import/creator', async (req, res) => {
    try {
        const db = await dbPromise;
        const { creator, videos } = req.body;

        // Basic token auth check
        const authHeader = req.headers.authorization;
        const token = process.env.IMPORT_TOKEN || 'dev-token-12345';
        if (authHeader !== `Bearer ${token}`) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        if (!videos || !Array.isArray(videos)) {
            return res.status(400).json({ error: 'Invalid videos array' });
        }

        const creatorName = creator?.name || 'Unknown';
        const category = 'Amateur'; // Default category for imports

        let inserted = 0;
        for (const v of videos) {
            const id = `vid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const slug = v.title
                .toLowerCase()
                .replace(/[^a-z0-9\\s-]/g, '')
                .replace(/\\s+/g, '-')
                .substring(0, 60);

            await db.run(
                `INSERT INTO videos (id, slug, title, description, thumbnail, author, duration, views, uploadedAt, category, hlsUrl)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                id,
                slug,
                v.title,
                `${category} video featuring ${creatorName}`,
                v.thumbnailLocalPath || '', // Will need to be hosted URL
                creatorName,
                '00:00', // Duration not provided by script
                Math.floor(Math.random() * 50000) + 1000,
                new Date().toISOString().split('T')[0],
                category,
                v.sourceUrl // The video source URL
            );

            // Insert tags
            await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, category);
            await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, creatorName);

            inserted++;
        }

        console.log(`Imported ${inserted} videos from creator: ${creatorName}`);
        res.json({
            status: 'ok',
            imported: inserted,
            creator: creatorName
        });
    } catch (error) {
        console.error('Creator import error:', error);
        res.status(500).json({ error: 'Failed to import creator videos' });
    }
});

// Quick add videos from simplified JSON admin
app.post('/api/admin/quick-add', async (req, res) => {
    try {
        const db = await dbPromise;
        const { videos } = req.body;

        if (!videos || !Array.isArray(videos)) {
            return res.status(400).json({ error: 'Invalid videos array' });
        }

        // Check if videos table has preview column (support old DBs)
        const tableInfo = await db.all('PRAGMA table_info(videos)') as { name?: string }[];
        const hasPreviewCol = tableInfo.some((c) => c.name && c.name.toLowerCase() === 'preview');

        let inserted = 0;
        for (const video of videos) {
            const id = String(video.id ?? '').trim() || `vid-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
            const slug = String(video.slug ?? '').trim() || id;
            const title = String(video.title ?? '').trim() || 'Untitled';
            const description = String(video.description ?? `Exclusive ${video.author ?? 'Unknown'} content`).trim();
            const thumbnail = String(video.thumbnail ?? '').trim();
            const preview = String(video.preview ?? '').trim();
            const author = String(video.author ?? 'Unknown').trim() || 'Unknown';
            const duration = String(video.duration ?? '0:00').trim();
            const views = Number(video.views) || 0;
            const uploadedAt = String(video.uploadedAt ?? new Date().toISOString().split('T')[0]).trim();
            const category = String(video.category ?? 'Amateur').trim() || 'Amateur';
            const hlsUrl = String(video.video ?? video.hlsUrl ?? '').trim();

            try {
                if (hasPreviewCol) {
                    await db.run(
                        `INSERT INTO videos (id, slug, title, description, thumbnail, preview, author, duration, views, uploadedAt, category, hlsUrl)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        id, slug, title, description, thumbnail, preview, author, duration, views, uploadedAt, category, hlsUrl
                    );
                } else {
                    await db.run(
                        `INSERT INTO videos (id, slug, title, description, thumbnail, author, duration, views, uploadedAt, category, hlsUrl)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        id, slug, title, description, thumbnail, author, duration, views, uploadedAt, category, hlsUrl
                    );
                }
                await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, author);
                await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', id, category);
                inserted++;
            } catch (rowErr: unknown) {
                const msg = rowErr instanceof Error ? rowErr.message : String(rowErr);
                console.error('Quick add row error:', msg, { id, title });
                throw rowErr;
            }
        }

        res.json({ success: true, imported: inserted });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const stack = error instanceof Error ? error.stack : undefined;
        console.error('Quick add error:', message);
        if (stack) console.error(stack);
        res.status(500).json({ error: 'Failed to add videos', detail: message });
    }
});

// Update mock data to real Bunny.net placeholders
app.get('/functions/v1/mock-vast', (req, res) => {
    // Return Clickadu VAST Tag URL (Placeholder)
    // In production, this would be your actual VAST URL
    const vastUrl = "https://xml.clickadu.com/vast?zoneid=YOUR_ZONE_ID";
    res.redirect(vastUrl);
});

// Serve frontend in production (optional for dev)
// app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

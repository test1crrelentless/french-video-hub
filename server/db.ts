import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { mockVideos } from '../src/data/mockVideos.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database setup
export const dbPromise = open({
  filename: path.join(__dirname, 'database.sqlite'),
  driver: sqlite3.Database
});

export const initDb = async () => {
  const db = await dbPromise;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      slug TEXT,
      title TEXT NOT NULL,
      description TEXT,
      thumbnail TEXT,
      preview TEXT,
      author TEXT,
      duration TEXT,
      views INTEGER DEFAULT 0,
      uploadedAt TEXT,
      category TEXT,
      hlsUrl TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      video_id TEXT,
      tag TEXT,
      FOREIGN KEY(video_id) REFERENCES videos(id)
    );
  `);

  // Migration: add preview column if it doesn't exist (for DBs created before preview was added)
  try {
    const tableInfo = await db.all('PRAGMA table_info(videos)') as { name?: string }[];
    const hasPreview = tableInfo.some((col) => (col.name && col.name.toLowerCase()) === 'preview');
    if (!hasPreview) {
      await db.exec('ALTER TABLE videos ADD COLUMN preview TEXT');
      console.log('Added preview column to videos table');
    }
  } catch (migErr) {
    console.warn('Preview column migration skipped:', migErr);
  }

  // Seed data if empty
  const count = await db.get('SELECT count(*) as count FROM videos');
  if (count.count === 0) {
    console.log('Seeding database with mock data...');
    for (const video of mockVideos) {
      await db.run(
        `INSERT INTO videos (id, slug, title, description, thumbnail, author, duration, views, uploadedAt, category, hlsUrl)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [video.id, video.slug, video.title, video.description, video.thumbnail, video.author, video.duration, video.views, video.uploadedAt, video.category, video.hlsUrl]
      );

      for (const tag of video.tags) {
        await db.run('INSERT INTO tags (video_id, tag) VALUES (?, ?)', [video.id, tag]);
      }
    }
  }
};

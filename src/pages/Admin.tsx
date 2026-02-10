import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, X, Upload, Trash2, FileText, List, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface VideoEntry {
    title: string;
    thumbnail: string;
    preview: string;
    video: string | null;
}

interface ParsedVideo {
    id: string;
    slug: string;
    title: string;
    thumbnail: string;
    preview: string;
    video: string | null;
    author: string;
    category: string;
    duration: string;
    views: number;
    uploadedAt: string;
}

const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 60);
};

const generateId = (): string => {
    return `vid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Random date between 2024-02-08 and 2026-02-08
const randomDate = (): string => {
    const start = new Date('2024-02-08').getTime();
    const end = new Date('2026-02-08').getTime();
    const date = new Date(start + Math.random() * (end - start));
    return date.toISOString().split('T')[0];
};

// Realistic view count (power law distribution)
const randomViews = (): number => {
    const base = Math.random();
    if (base < 0.6) return Math.floor(Math.random() * 50000) + 5000;
    if (base < 0.85) return Math.floor(Math.random() * 150000) + 50000;
    if (base < 0.95) return Math.floor(Math.random() * 500000) + 200000;
    return Math.floor(Math.random() * 2000000) + 500000;
};

// Random duration (5-30 minutes)
const randomDuration = (): string => {
    const mins = Math.floor(Math.random() * 25) + 5;
    const secs = Math.floor(Math.random() * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const categories = [
    'Webcam', 'Solo', 'Amateur', 'POV', 'Blowjob',
    'Anal', 'MILF', 'Asian', 'Ebony', 'Lesbian',
    'Big Tits', 'Blonde', 'Brunette', 'French'
];

const cleanTitle = (title: string) => {
    return title
        .replace(/ Borntobefuck/gi, '')
        .replace(/ Porn Video Leaks/gi, '')
        .replace(/ Video Leaked/gi, '')
        .replace(/ Leaked/gi, '')
        .trim();
};

/** Parse bulk line: "Title" or "Title | thumb | preview | video" or tab-separated */
function parseBulkLines(text: string): VideoEntry[] {
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const entries: VideoEntry[] = [];
    for (const line of lines) {
        const parts = line.includes('|') ? line.split('|').map((p) => p.trim()) : line.split(/\t/).map((p) => p.trim());
        const title = parts[0] || '';
        const thumbnail = parts[1] || '';
        const preview = parts[2] || '';
        const video = parts[3] || null;
        if (title) entries.push({ title, thumbnail, preview, video: video || null });
    }
    return entries;
}

const Admin = () => {
    const [inputMode, setInputMode] = useState<'json' | 'bulk'>('json');
    const [jsonInput, setJsonInput] = useState('');
    const [modelName, setModelName] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [parsedVideos, setParsedVideos] = useState<ParsedVideo[]>([]);
    const [parseError, setParseError] = useState('');
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [savedCount, setSavedCount] = useState(0);
    const [showContentTips, setShowContentTips] = useState(false);

    useEffect(() => {
        document.title = "LEAKPORNOFR - Quick Add";
    }, []);

    const entriesToParsedVideos = (entries: VideoEntry[]): ParsedVideo[] =>
        entries.map((entry) => ({
            id: generateId(),
            slug: generateSlug(entry.title),
            title: cleanTitle(entry.title),
            thumbnail: entry.thumbnail || '',
            preview: entry.preview || '',
            video: entry.video || null,
            author: modelName || 'Unknown',
            category: category,
            duration: randomDuration(),
            views: randomViews(),
            uploadedAt: randomDate(),
        }));

    // Auto-parse JSON or bulk lines as user types
    const handleInputChange = (value: string) => {
        setJsonInput(value);
        setParseError('');

        if (!value.trim()) {
            setParsedVideos([]);
            return;
        }

        if (inputMode === 'bulk') {
            const entries = parseBulkLines(value);
            setParsedVideos(entriesToParsedVideos(entries));
            return;
        }

        try {
            let data = value.trim();
            if (data.startsWith('{') && !data.startsWith('[')) {
                data = `[${data}]`;
            }
            data = data.replace(/,\s*]/g, ']').replace(/,\s*}/g, '}');
            const entries: VideoEntry[] = JSON.parse(data);
            if (!Array.isArray(entries)) {
                setParseError('Input must be a JSON array or object');
                setParsedVideos([]);
                return;
            }
            setParsedVideos(entriesToParsedVideos(entries));
        } catch (e) {
            setParseError('Invalid JSON format. Check your syntax.');
            setParsedVideos([]);
        }
    };

    useEffect(() => {
        if (parsedVideos.length > 0) {
            setParsedVideos(prev => prev.map(v => ({ ...v, author: modelName || 'Unknown', category })));
        }
    }, [modelName, category]);

    const removeVideo = (index: number) => {
        setParsedVideos(prev => prev.filter((_, i) => i !== index));
    };

    const saveVideos = async () => {
        if (parsedVideos.length === 0) return;

        setSaveStatus('saving');
        try {
            const response = await fetch('/api/admin/quick-add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ videos: parsedVideos }),
            });

            if (response.ok) {
                const result = await response.json();
                setSaveStatus('success');
                setSavedCount(result.imported || parsedVideos.length);
                setJsonInput('');
                setParsedVideos([]);
                setTimeout(() => {
                    setSaveStatus('idle');
                    setSavedCount(0);
                }, 4000);
            } else {
                setSaveStatus('error');
            }
        } catch (error) {
            console.error('Save error:', error);
            setSaveStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center gap-3">
                    <Upload className="h-8 w-8 text-primary" />
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                        Quick Add Videos
                    </h1>
                </div>

                {/* Status Messages */}
                {saveStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 flex items-center gap-3 rounded-lg bg-green-500/20 p-4 text-green-400"
                    >
                        <Check className="h-5 w-5" />
                        {savedCount} videos saved successfully! Refresh homepage to see them.
                    </motion.div>
                )}
                {saveStatus === 'error' && (
                    <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/20 p-4 text-red-400">
                        <X className="h-5 w-5" />
                        Error saving videos. Check server console.
                    </div>
                )}

                {/* Quick Settings */}
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-bold uppercase text-zinc-400">
                            Model / Author Name
                        </label>
                        <input
                            type="text"
                            value={modelName}
                            onChange={(e) => setModelName(e.target.value)}
                            placeholder="e.g., Amouranth, Belle Delphine..."
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-bold uppercase text-zinc-400">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-primary focus:outline-none"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Input mode toggle */}
                <div className="mb-3 flex gap-2">
                    <button
                        type="button"
                        onClick={() => { setInputMode('json'); setParseError(''); setParsedVideos([]); }}
                        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${inputMode === 'json' ? 'bg-primary text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
                    >
                        <FileText className="h-4 w-4" /> JSON
                    </button>
                    <button
                        type="button"
                        onClick={() => { setInputMode('bulk'); setParseError(''); handleInputChange(jsonInput); }}
                        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${inputMode === 'bulk' ? 'bg-primary text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
                    >
                        <List className="h-4 w-4" /> Bulk lines
                    </button>
                </div>

                {/* Paste Area */}
                <div className="mb-6">
                    <label className="mb-2 flex items-center justify-between text-sm font-bold uppercase text-zinc-400">
                        <span>{inputMode === 'json' ? 'Paste JSON (single or array)' : 'One video per line: Title | thumbnail_url | preview_url | video_url'}</span>
                        {parsedVideos.length > 0 && (
                            <span className="rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                                {parsedVideos.length} videos ready
                            </span>
                        )}
                    </label>
                    <textarea
                        value={jsonInput}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder={inputMode === 'json' ? `Paste JSON like:
{ "title": "Video Title", "thumbnail": "https://...", "preview": "https://...", "video": null }
Or array: [ { "title": "...", ... }, ... ]` : `One video per line. Pipe or tab separated:
Video Title One | https://thumb1.jpg | https://preview1.webp | https://video1.mp4
Video Title Two	https://thumb2.jpg	https://preview2.webp	https://video2.mp4
Or just titles (thumb/preview/video optional):
My Video 1
My Video 2`}
                        className="h-64 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-primary focus:outline-none"
                    />
                    {parseError && (
                        <p className="mt-2 text-sm text-red-400">{parseError}</p>
                    )}
                </div>

                {/* Save Button */}
                {parsedVideos.length > 0 && (
                    <div className="mb-8">
                        <button
                            onClick={saveVideos}
                            disabled={saveStatus === 'saving' || !modelName}
                            className={`flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-bold uppercase transition-all ${saveStatus === 'saving' || !modelName
                                    ? 'cursor-not-allowed bg-zinc-700 text-zinc-400'
                                    : 'bg-green-600 text-white hover:bg-green-500'
                                }`}
                        >
                            <Plus className="h-6 w-6" />
                            {saveStatus === 'saving' ? 'Saving...' : `Add ${parsedVideos.length} Videos`}
                        </button>
                        {!modelName && (
                            <p className="mt-2 text-sm text-yellow-400">↑ Enter a model name first</p>
                        )}
                    </div>
                )}

                {/* Preview Grid */}
                {parsedVideos.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
                    >
                        <h2 className="mb-4 text-lg font-bold text-white">
                            Preview ({parsedVideos.length} videos)
                        </h2>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {parsedVideos.map((video, index) => (
                                <div
                                    key={video.id}
                                    className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900"
                                >
                                    <div className="relative aspect-video bg-zinc-800">
                                        {video.thumbnail ? (
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="h-full w-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect fill="%23333" width="320" height="180"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23666">No Thumb</text></svg>';
                                                }}
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                                                No Thumbnail
                                            </div>
                                        )}
                                        <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                            {video.duration}
                                        </div>
                                        <div className="absolute left-1 top-1 rounded bg-primary/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                            #{index + 1}
                                        </div>

                                        {/* Remove button */}
                                        <button
                                            onClick={() => removeVideo(index)}
                                            className="absolute right-1 top-1 hidden rounded bg-red-500 p-1 text-white group-hover:block"
                                        >
                                            <Trash2 className="h-3 w-3" />
                                        </button>
                                    </div>
                                    <div className="p-2">
                                        <h3 className="line-clamp-2 text-[11px] font-medium leading-tight text-white">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Help Text */}
                <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-500">
                    <h3 className="mb-2 font-bold text-zinc-400">How to use:</h3>
                    <ol className="list-inside list-decimal space-y-1">
                        <li>Enter the model/author name (required)</li>
                        <li>Select a category</li>
                        <li>Paste data: <strong>JSON</strong> (object/array) or <strong>Bulk lines</strong> (one video per line, pipe or tab separated)</li>
                        <li>Review the preview grid</li>
                        <li>Click &quot;Add Videos&quot; to save</li>
                    </ol>
                    <p className="mt-3 text-zinc-600">
                        Views, durations, and dates are auto-generated. Thumbnails and previews load via our proxy so external CDN URLs work.
                    </p>

                    <button
                        type="button"
                        onClick={() => setShowContentTips(!showContentTips)}
                        className="mt-4 flex items-center gap-2 text-left font-bold text-zinc-400 hover:text-white"
                    >
                        {showContentTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        How do other sites have so many videos?
                    </button>
                    {showContentTips && (
                        <div className="mt-2 rounded bg-zinc-800/50 p-3 text-zinc-400">
                            <p className="mb-2">Sites usually combine several sources (only use content you have rights or licenses for):</p>
                            <ul className="list-inside list-disc space-y-1">
                                <li><strong>RSS / feeds</strong> — Many platforms expose RSS or API feeds; you can import metadata and links in bulk.</li>
                                <li><strong>Partner / affiliate APIs</strong> — Some networks provide product feeds or partner APIs for approved publishers.</li>
                                <li><strong>User uploads</strong> — Let users submit links or uploads (with moderation and DMCA process).</li>
                                <li><strong>Licensed content</strong> — Direct deals with studios or aggregators for bulk catalogs.</li>
                                <li><strong>Bulk paste</strong> — Use the &quot;Bulk lines&quot; tab above: paste titles and URLs from spreadsheets or export files you already have.</li>
                            </ul>
                            <p className="mt-2 text-zinc-500 text-xs">Automated scraping of other sites is often against their ToS and can have legal issues; prefer official feeds, APIs, or your own data.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Admin;

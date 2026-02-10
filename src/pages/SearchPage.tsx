import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import { mockVideos } from '@/data/mockVideos';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState(mockVideos);

    useEffect(() => {
        document.title = `LEAKPORNOFR - Search: ${query}`;

        if (query) {
            const lowerQuery = query.toLowerCase();
            const filtered = mockVideos.filter(video =>
                video.title.toLowerCase().includes(lowerQuery) ||
                video.category.toLowerCase().includes(lowerQuery) ||
                video.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            );
            setResults(filtered);
        } else {
            setResults(mockVideos);
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="mb-8 text-2xl font-black uppercase tracking-tight text-white">
                    Results for: <span className="text-primary">"{query}"</span>
                </h1>

                {results.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {results.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="flex h-64 flex-col items-center justify-center text-center">
                        <p className="text-lg text-muted-foreground">No videos found matching your search.</p>
                        <p className="text-sm text-zinc-600">Try different keywords or browse our categories.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default SearchPage;

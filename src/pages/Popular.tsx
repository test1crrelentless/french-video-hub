import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/data/mockVideos';

const Popular = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "POPULAIRE - FRENCH HUB";

        fetch('/api/videos?sort=popular')
            .then(res => res.json())
            .then(data => {
                setVideos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch popular videos:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-10 flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Populaire</h1>
                    <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-24">
                        <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {videos.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Popular;


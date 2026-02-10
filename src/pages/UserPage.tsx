import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, formatViews } from '@/data/mockVideos';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserPage = () => {
    const { username } = useParams<{ username: string }>();
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (username) {
            document.title = `${username} - FRENCH HUB`;

            setLoading(true);
            fetch(`/api/videos?search=${encodeURIComponent(username)}`)
                .then(res => res.json())
                .then(data => {
                    // Filter strictly by author as search might be fuzzy
                    const userVideos = data.filter((v: Video) => v.author === username);
                    setVideos(userVideos);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to fetch user videos:', err);
                    setLoading(false);
                });
        }
    }, [username]);

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8 relative">
                <div className="mb-12 flex flex-col items-center md:flex-row md:items-end gap-6 border-b border-white/10 pb-10">
                    <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
                        <Avatar className="h-full w-full rounded-[1.4rem] border-4 border-background">
                            <AvatarFallback className="text-4xl font-bold text-cyan-400 bg-background">
                                {username?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{username}</h1>
                        <p className="text-cyan-400/80 font-medium">{videos.length} Vidéos</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-24">
                        <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-500"></div>
                    </div>
                ) : (
                    <>
                        {videos.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {videos.map((video, index) => (
                                    <VideoCard key={video.id} video={video} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <p className="font-display text-lg text-white/60">Cet utilisateur n'a pas encore de vidéos.</p>
                                <Link to="/" className="mt-4 inline-block text-cyan-400 hover:underline">Retour à l'accueil</Link>
                            </div>
                        )}
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default UserPage;

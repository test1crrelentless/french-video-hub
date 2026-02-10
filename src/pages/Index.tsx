import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import Footer from '@/components/Footer';
import { Video } from '@/data/mockVideos';

/**
 * Index - Home page with video grid
 * Fetches videos from API
 */
const Index = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    document.title = "LEAKPORNOFR - Homepage";

    // Fetch videos from API - Recent first
    fetch('/api/videos?sort=recent')
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch videos:', err);
        setLoading(false);
      });
  }, []);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'Tous') {
      return videos;
    }
    return videos.filter(video => video.category === selectedCategory);
  }, [selectedCategory, videos]);

  return (
    <div className="min-h-screen bg-textured">
      <Header />

      <main className="container mx-auto px-4 py-8 relative">
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-500"></div>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        )}

        {!loading && filteredVideos.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-display text-lg text-white/60">Aucune vidéo trouvée dans cette catégorie.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;


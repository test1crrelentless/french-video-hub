import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar, Tag, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';
import VideoCard from '@/components/VideoCard';
import AdSlot from '@/components/AdSlot';
import { Video, formatViews } from '@/data/mockVideos';

/**
 * VideoPage - Individual video viewing page
 * Fetches data from API
 */
const VideoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(false);

    fetch(`/api/videos/slug/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Video not found');
        return res.json();
      })
      .then(data => {
        setVideo(data);
        setLoading(false);
        document.title = `LEAKPORNOFR - ${data.title}`;
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-textured">
        <Header />
        <div className="container mx-auto px-4 py-20 flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="min-h-screen bg-textured">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Vidéo non trouvée</h1>
          <Link to="/" className="text-primary hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-textured">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Back button */}
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux vidéos
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main content - 2/3 width */}
          <div className="lg:col-span-2">
            <AdSlot slot="header" />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <VideoPlayer
                hlsUrl={video.hlsUrl}
                poster={video.thumbnail}
                title={video.title}
              />
            </motion.div>

            {/* Video information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <h1 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                {video.title}
              </h1>

              {/* Metadata row */}
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="view-count flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-secondary-foreground">
                  <Eye className="h-4 w-4" />
                  {formatViews(video.views)}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-secondary-foreground">
                  <Calendar className="h-4 w-4" />
                  {video.uploadedAt}
                </span>
                <span className="category-tag flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/20">
                  {video.category}
                </span>
              </div>
            </motion.div>

            <AdSlot slot="in-content" />
          </div>

          {/* Sidebar - Related videos (Placeholder for now) */}
          <div className="lg:col-span-1">
            <AdSlot slot="sidebar" />
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Vidéos similaires
            </h2>
            <p className="text-muted-foreground text-sm italic">
              En cours de chargement...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideoPage;

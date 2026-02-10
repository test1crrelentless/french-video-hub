import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Video, formatViews } from '@/data/mockVideos';
import { proxyImageUrl } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

const PLACEHOLDER_SVG = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect fill="%230d0d0d" width="320" height="180"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23403f3f" font-size="12">No image</text></svg>');

interface VideoCardProps {
  video: Video;
  index?: number;
}

/** Try direct image URL first; on error try proxy, then placeholder so thumbnails never stay black. */
const VideoCard = ({ video, index = 0 }: VideoCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string>(() => video.thumbnail || PLACEHOLDER_SVG);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const thumbTriedProxy = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const rawThumb = video.thumbnail || undefined;
  const rawPreview = video.preview || video.thumbnail || undefined;

  useEffect(() => {
    setThumbSrc(rawThumb || PLACEHOLDER_SVG);
    thumbTriedProxy.current = false;
  }, [rawThumb]);

  useEffect(() => {
    if (!rawPreview || !isInView) return;
    setPreviewSrc(rawPreview);
  }, [rawPreview, isInView]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { rootMargin: '100px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleThumbError = () => {
    const proxy = rawThumb ? proxyImageUrl(rawThumb) : null;
    if (!thumbTriedProxy.current && proxy) {
      thumbTriedProxy.current = true;
      setThumbSrc(proxy);
    } else {
      setThumbSrc(PLACEHOLDER_SVG);
    }
  };

  const shouldPreload = Boolean(previewSrc) && isInView;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
    >
      <div
        className="group block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative overflow-hidden glass-card rounded-2xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.4)]">

          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbSrc}
              alt={video.title}
              referrerPolicy="no-referrer"
              decoding="async"
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
              onError={handleThumbError}
            />

            {shouldPreload && previewSrc && (
              <img
                src={previewSrc}
                alt=""
                role="presentation"
                referrerPolicy="no-referrer"
                decoding="async"
                className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-200 pointer-events-none ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  const proxy = rawPreview ? proxyImageUrl(rawPreview) : null;
                  if (proxy && el.src !== proxy) el.src = proxy;
                  else el.style.opacity = '0';
                }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-2 right-2 rounded-md bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[11px] font-bold text-white/95">
              {video.duration}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Link to={`/video/${video.slug}`} className="rounded-full bg-cyan-500/95 text-white p-4 shadow-lg shadow-cyan-500/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="p-4">
            <Link to={`/video/${video.slug}`}>
              <h3 className="mb-3 line-clamp-2 text-sm font-bold tracking-tight text-white/95 group-hover:text-cyan-300 transition-colors">
                {video.title}
              </h3>
            </Link>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  to={`/user/${encodeURIComponent(video.author || "ADMIN")}`}
                  className="rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300/90 transition-colors"
                >
                  {video.author || "ADMIN"}
                </Link>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                  {video.category}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-white/60 shrink-0">
                <span>{formatViews(video.views)}</span>
                <Eye className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;


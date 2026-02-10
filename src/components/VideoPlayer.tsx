import { useEffect, useRef, useState } from 'react';
import fluidPlayer from 'fluid-player';
import 'fluid-player/src/css/fluidplayer.css';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  hlsUrl: string;
  poster?: string;
  title: string;
}

const VideoPlayer = ({ hlsUrl, poster, title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  const [adClicks, setAdClicks] = useState(0);
  const MAX_AD_CLICKS = 4;

  const handleFakePlayClick = () => {
    if (adClicks < MAX_AD_CLICKS) {
      // Open ad in new window
      // Using a typical ad network style redirect placeholder
      window.open('https://xml.clickadu.com/vast?zoneid=YOUR_ZONE_ID', '_blank');
      setAdClicks(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (!videoRef.current || adClicks < MAX_AD_CLICKS) return;

    // Fluid Player Configuration
    const playerOptions = {
      layoutControls: {
        controlBar: {
          autoHideTimeout: 3,
          animated: true,
          autoHide: true
        },
        htmlOnPauseBlock: {
          html: null,
          height: null,
          width: null
        },
        autoPlay: true, // Auto-play after the 4th ad click
        mute: false,
        allowTheatre: true,
        playPauseAnimation: true,
        playbackRateEnabled: true,
        allowDownload: false,
        playButtonShowing: true,
        fillToContainer: true,
        posterImage: poster || ''
      },
      vastOptions: {
        adList: [], // We already handled manual ad clicks
        adCTAText: false,
      }
    };

    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = fluidPlayer(videoRef.current, playerOptions);

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [hlsUrl, poster, adClicks]);

  return (
    <div className="video-player-container relative aspect-video w-full overflow-hidden rounded-xl bg-black group shadow-2xl">
      {/* Fake Play Overlay */}
      {adClicks < MAX_AD_CLICKS && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer group/overlay"
          onClick={handleFakePlayClick}
        >
          {/* Poster Background */}
          {poster && (
            <img
              src={poster}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover/overlay:scale-105"
            />
          )}

          {/* Darkening layer */}
          <div className="absolute inset-0 bg-black/40 group-hover/overlay:bg-black/30 transition-colors" />

          {/* Premium Play Button */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/90 text-white shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 group-hover/overlay:scale-110 group-hover/overlay:bg-cyan-400 group-hover/overlay:shadow-[0_0_50px_rgba(34,211,238,0.7)]">
            <Play className="ml-1 h-10 w-10 fill-current" />
          </div>

          {/* Ad Counter (Optional visual feedback for user, or keep it stealthy) */}
          <div className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white/80 backdrop-blur-md">
            Unlock Video: {adClicks}/{MAX_AD_CLICKS}
          </div>
        </div>
      )}

      <video ref={videoRef} className="h-full w-full">
        <source src={hlsUrl} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

export default VideoPlayer;

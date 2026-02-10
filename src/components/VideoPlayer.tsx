import { useEffect, useRef } from 'react';
import fluidPlayer from 'fluid-player';
import 'fluid-player/src/css/fluidplayer.css';

interface VideoPlayerProps {
  hlsUrl: string;
  poster?: string;
  title: string;
}

const VideoPlayer = ({ hlsUrl, poster, title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

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
        autoPlay: false,
        mute: true,
        allowTheatre: true,
        playPauseAnimation: false,
        playbackRateEnabled: false,
        allowDownload: false,
        playButtonShowing: false,
        fillToContainer: true,
        posterImage: poster || '' // Use prop
      },
      vastOptions: {
        adList: [
          // Restoring the Clickadu tag we implemented earlier, 
          // as the user's snippet had empty adList but likely wants existing ads to work.
          {
            roll: 'preRoll' as 'preRoll',
            vastTag: 'https://xml.clickadu.com/vast?zoneid=YOUR_ZONE_ID'
          }
        ],
        adCTAText: false,
        adCTATextPosition: "bottom right" as "bottom right"
      }
    };

    // Initialize Player
    // Ensure previous instance is destroyed if re-rendering
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    // Use the imported fluidPlayer (npm) which is compatible with the config
    playerRef.current = fluidPlayer(videoRef.current, playerOptions);

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [hlsUrl, poster]);

  return (
    <div className="video-player-container aspect-video w-full overflow-hidden rounded-xl bg-black">
      <video ref={videoRef} className="h-full w-full">
        <source src={hlsUrl} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

export default VideoPlayer;

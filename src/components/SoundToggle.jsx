import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa';

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/music/akuma-no-ko.mp3');
    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;

    const handleCanPlay = () => {
      setError(null);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      }).catch((err) => {
        console.log('Autoplay bị chặn:', err);
        setAutoplayBlocked(true);
      });
    };

    const handleError = (e) => {
      console.error('Audio error:', e);
      setError('Không thể phát nhạc');
      setIsPlaying(false);
    };

    audioRef.current.addEventListener('canplay', handleCanPlay);
    audioRef.current.addEventListener('error', handleError);

    const handleFirstInteraction = () => {
      if (autoplayBlocked && !isPlaying) {
        toggleSound();
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    if (autoplayBlocked) {
      document.addEventListener('click', handleFirstInteraction);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplay', handleCanPlay);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [autoplayBlocked]);

  const toggleSound = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
      setIsPlaying(!isPlaying);
      setAutoplayBlocked(false);
    } catch (err) {
      console.error('Playback error:', err);
      setError('Không thể phát nhạc');
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative flex items-center mr-8">
      <div className="relative">
        <button
          onClick={toggleSound}
          className="p-2 rounded-lg text-secondary transition-all duration-300 relative"
          aria-label="Toggle sound"
          title={error || (autoplayBlocked ? 'Click để phát nhạc' : 'Bật/tắt nhạc')}
        >
          {isPlaying ? (
            <FaVolumeUp className="w-6 h-6" />
          ) : (
            <FaVolumeMute className="w-6 h-6" />
          )}
          {autoplayBlocked && (
            <>
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <FaMusic className="w-full h-full text-secondary animate-bounce" />
              </div>
              <div className="absolute -inset-1 rounded-lg bg-secondary/30 animate-pulse blur-sm" />
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-secondary/20 to-transparent animate-spin-slow blur" />
            </>
          )}
        </button>
        {isPlaying && !autoplayBlocked && (
          <div className="absolute -right-7 top-1/2 -translate-y-1/2">
            <div className="flex items-end gap-0.5 h-4">
              <div className="w-1 bg-secondary animate-sound1"></div>
              <div className="w-1 bg-secondary animate-sound2"></div>
              <div className="w-1 bg-secondary animate-sound3"></div>
              <div className="w-1 bg-secondary animate-sound4"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoundToggle; 
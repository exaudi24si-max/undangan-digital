import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = ({ isOpened }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const attemptPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          audio.muted = false;
        })
        .catch((error) => {
          console.log("Autoplay failed, waiting for interaction:", error);
          // Try muted play as last resort (some browsers allow this)
          audio.muted = true;
          audio.play().catch(() => {});
        });
    };

    // Load and try to play
    audio.load();
    attemptPlay();

    // Force play on ANY interaction
    const forcePlay = () => {
      audio.muted = false;
      attemptPlay();
      // Don't remove listeners yet if it fails, but for now we try once
      if (audio.paused === false) {
        window.removeEventListener("click", forcePlay);
        window.removeEventListener("touchstart", forcePlay);
      }
    };

    window.addEventListener("click", forcePlay);
    window.addEventListener("touchstart", forcePlay);

    return () => {
      window.removeEventListener("click", forcePlay);
      window.removeEventListener("touchstart", forcePlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.muted = false;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[300]">
      <audio
        ref={audioRef}
        src="/audio/wedding-song.mp3"
        loop
        preload="auto"
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-12 h-12 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-gold-400 shadow-2xl relative"
      >
        {isPlaying && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border border-gold-500 rounded-full"
          />
        )}

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;

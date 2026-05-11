import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ guestName, onOpen }) => {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTextVisible(true), 600);
    const t2 = setTimeout(() => setBtnVisible(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleOpen = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      onOpen();
    }, 900);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-black`}
      >
        {/* --- BACKGROUND VIDEO --- */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source src="/video/background.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-stone-900" />
        </video>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-[1]" />
        
        {/* Animated Particles/Ornaments */}
        <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${15 * i + 10}%`,
                top: `${80 + (i % 3) * 5}%`,
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-8 max-w-lg mx-auto flex flex-col items-center">
          {/* Top Elegant Ornament */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#d4a843" strokeWidth="0.5" opacity="0.3" />
              <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="#d4a843" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={textVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-500 text-[10px] tracking-[0.6em] uppercase font-bold mb-4"
          >
            Special Invitation
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={textVisible ? { width: "40px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gold-500/50 mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={textVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-base md:text-lg font-playfair italic mb-4 tracking-widest"
          >
            Dear {guestName || "Tamu Undangan"},
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={textVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <p className="text-4xl md:text-6xl font-great text-white leading-tight">
               <span style={{ 
                 background: "linear-gradient(135deg, #fff 0%, #d4a843 100%)",
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent"
               }}>Randy & Yona</span>
            </p>
          </motion.div>

          {/* Open Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={btnVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={handleOpen}
              className="group relative px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#946531] via-[#d4a843] to-[#946531] transition-all duration-500 group-hover:hue-rotate-15" />
              <span className="relative z-10 text-white text-[11px] tracking-[0.4em] uppercase font-bold">
                Buka Undangan
              </span>
            </button>
            <p className="text-[9px] text-gold-500/50 uppercase tracking-[0.3em] mt-6 font-bold">
               Music will play automatically
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

const HeroSection = () => {
  const { groom, bride, events } = weddingData;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const target = weddingData.weddingDate.getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,168,67,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 z-10">
        <div className="max-w-xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-500 mb-12 font-medium"
          >
            The Wedding of
          </motion.p>

          {/* Names */}
          <div className="relative mb-12">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 -left-4 md:-left-12 h-[1px] bg-gold-500/50 -translate-y-1/2 hidden md:block" 
            />
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl signature-font leading-tight text-white relative z-10"
            >
              {groom.nickname} <span className="text-3xl md:text-4xl text-gold-400">&</span><br/>
              <span className="md:pl-16">{bride.nickname}</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm md:text-base tracking-[0.2em] text-gray-300 font-light leading-loose serif-font italic">
              {events.akad.date} — {events.akad.venue}
            </p>
          </motion.div>

          {/* Countdown Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl inline-block"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-6 font-semibold">Counting Down to Forever</p>
            <div className="flex gap-6 md:gap-10">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-white mb-2">{String(item.value).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Photo Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: "url('/images/foto.jpg')" }}
        />
        {/* Overlay for better text blending if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden block" />
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 flex flex-col items-center gap-4">
           <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-50" />
           <span className="text-[10px] uppercase tracking-[0.4em] text-gold-400 vertical-text">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

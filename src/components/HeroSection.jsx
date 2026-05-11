import { useState, useEffect } from "react";
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
    <section className="relative min-h-screen flex flex-col md:flex-row bg-dark">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-20 z-10">
        <div className="max-w-md">
          <p className="text-xs tracking-widest text-gray-400 mb-16">
            We invite you to celebrate our wedding
          </p>

          <p className="text-xs tracking-widest text-gray-400 mb-6 italic serif-font">
            The Wedding of
          </p>

          {/* Names with strike-through line effect */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-white -translate-x-12 -translate-y-1/2 opacity-70"></div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl signature-font leading-tight text-white pl-8 relative z-10">
              {groom.nickname} <span className="text-4xl">&</span><br/>
              <span className="pl-12">{bride.nickname}</span>
            </h1>
          </div>

          <div className="mb-16">
            <p className="text-xs tracking-widest text-gray-300 leading-loose">
              {events.akad.date}<br/>
              di {events.akad.venue}
            </p>
          </div>

          <div>
            <p className="text-sm tracking-widest text-white mb-6">Save the Date</p>
            <div className="flex gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
               ].map((item, idx) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-xl serif-font mb-2">{String(item.value).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Photo Placeholder */}
      <div 
        className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-dark-light bg-cover bg-center"
        style={{ backgroundImage: "url('/images/foto.jpg')" }}
      >
        {/* Placeholder text hidden if image loads, just a fallback */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white tracking-widest text-sm uppercase">Ganti dengan foto Anda di /public/images/hero.png</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

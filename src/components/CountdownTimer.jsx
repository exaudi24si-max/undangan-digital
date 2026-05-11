import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = weddingData.weddingDate.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setIsOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  if (isOver) {
    return (
      <div className="text-center py-6">
        <p className="text-gold-600 font-dancing text-4xl animate-pulse">
          💍 Hari Bahagia Telah Tiba! 💍
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-6">
          <div className="flex flex-col items-center">
            <div
              className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2"
              style={{
                background: "linear-gradient(135deg, rgba(212,168,67,0.15), rgba(228,201,74,0.1))",
                border: "1px solid rgba(212,168,67,0.4)",
                boxShadow: "0 4px 20px rgba(212,168,67,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              {/* Flip card style number */}
              <span
                className="text-2xl md:text-4xl font-playfair font-bold tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #946531, #e4c94a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              {/* Shine effect */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-white opacity-10 rounded-t-2xl" />
            </div>
            <span className="text-xs md:text-sm font-nunito font-semibold tracking-widest uppercase text-gold-600">
              {unit.label}
            </span>
          </div>

          {i < units.length - 1 && (
            <span
              className="text-2xl md:text-4xl font-playfair font-bold mb-6 animate-pulse"
              style={{
                background: "linear-gradient(135deg, #946531, #e4c94a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

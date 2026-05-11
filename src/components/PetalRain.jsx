import { useEffect, useState } from "react";

const PetalRain = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalData = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 14 + 8}px`,
      height: `${Math.random() * 14 + 8}px`,
      animationDuration: `${Math.random() * 8 + 6}s`,
      animationDelay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.5 + 0.3,
      color: ["#f9a8d4", "#fbbf24", "#fde68a", "#f0abfc", "#fb923c", "#f9a8d4", "#fbcfe8"][
        Math.floor(Math.random() * 7)
      ],
    }));
    setPetals(petalData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute"
          style={{
            left: petal.left,
            top: `-${Math.random() * 20 + 10}px`,
            width: petal.width,
            height: petal.height,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            borderRadius: "150% 0 150% 0",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default PetalRain;

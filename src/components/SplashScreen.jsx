import { useState, useEffect } from "react";

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
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-900 ${
        animateOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundImage:
          "url('/images/foto17.jpg'), linear-gradient(135deg, rgba(26, 10, 0, 0.4), rgba(45, 20, 16, 0.4))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {/* Background ornament pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="splashPattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#d4a843" opacity="0.5" />
              <path
                d="M10 20 Q15 10 20 20 Q25 10 30 20"
                stroke="#d4a843"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M10 20 Q15 30 20 20 Q25 30 30 20"
                stroke="#d4a843"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#splashPattern)" />
        </svg>
      </div>

      {/* Gold decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold-700 opacity-20 animate-pulse-slow" />
      <div
        className="absolute top-16 left-16 w-28 h-28 rounded-full border border-gold-500 opacity-15 animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-gold-700 opacity-20 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-16 right-16 w-28 h-28 rounded-full border border-gold-500 opacity-15 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating petals */}
      {["🌸", "🌺", "✿", "❀", "🌹"].map((petal, i) => (
        <span
          key={i}
          className="absolute text-2xl animate-float opacity-30"
          style={{
            top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? `${5 + i * 5}%` : `${85 - i * 5}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i}s`,
          }}
        >
          {petal}
        </span>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-lg mx-auto">
        {/* Top ornament */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <path
              d="M60 5 L65 20 L80 20 L68 29 L73 45 L60 36 L47 45 L52 29 L40 20 L55 20 Z"
              fill="#d4a843"
              opacity="0.8"
            />
            <path
              d="M10 30 Q35 15 55 30"
              stroke="#d4a843"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M65 30 Q85 15 110 30"
              stroke="#d4a843"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <circle cx="10" cy="30" r="3" fill="#d4a843" opacity="0.6" />
            <circle cx="110" cy="30" r="3" fill="#d4a843" opacity="0.6" />
          </svg>
        </div>

        {/* Dear Guest */}
        <p
          className={`text-gold-300 text-xs tracking-[0.4em] uppercase mb-3 font-nunito transition-all duration-700 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          SPECIAL INVITATION TO
        </p>

        <div
          className={`w-24 h-px mx-auto mb-6 transition-all duration-700 ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to right, transparent, #d4a843, transparent)",
            transitionDelay: "0.5s",
          }}
        />

        {/* Invitation text - Simple */}
        <p
          className={`text-white text-sm md:text-base font-nunito mb-4 transition-all duration-700 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          {guestName || "Tamu Undangan"}
        </p>

        {/* Couple Names */}
        <div
          className={`my-6 transition-all duration-700 ${
            textVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <p
            className="text-4xl md:text-5xl font-great"
            style={{
              background:
                "linear-gradient(135deg, #946531, #e4c94a, #d4a843, #e4c94a, #946531)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Randy & Yona
          </p>
        </div>

        {/* Bottom ornament SVG */}
        <div
          className={`flex justify-center my-4 transition-all duration-700 ${textVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.2s" }}
        >
          <svg width="200" height="20" viewBox="0 0 200 20">
            <line
              x1="0"
              y1="10"
              x2="80"
              y2="10"
              stroke="#d4a843"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <path
              d="M85 10 Q90 2 95 10 Q100 18 105 10 Q110 2 115 10"
              stroke="#d4a843"
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
            <line
              x1="120"
              y1="10"
              x2="200"
              y2="10"
              stroke="#d4a843"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle cx="100" cy="10" r="2" fill="#d4a843" />
          </svg>
        </div>

        {/* Open button */}
        <div
          className={`transition-all duration-700 ${
            btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <button
            onClick={handleOpen}
            className="relative group mt-4 px-10 py-4 rounded-full font-nunito font-semibold text-sm tracking-widest uppercase text-amber-900 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #d4a843, #e4c94a, #f5e298, #e4c94a, #d4a843)",
              boxShadow:
                "0 4px 20px rgba(212, 168, 67, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4 animate-bounce-gentle"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7V7a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" />
              </svg>
              Buka Undangan
            </span>
          </button>
        </div>

        {/* Music note hint */}
        <p
          className={`text-gold-600 text-xs mt-6 font-nunito transition-all duration-700 ${
            btnVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.4s" }}
        ></p>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 Q180 80 360 40 Q540 0 720 40 Q900 80 1080 40 Q1260 0 1440 40 L1440 80 L0 80 Z"
            fill="#d4a843"
            opacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;

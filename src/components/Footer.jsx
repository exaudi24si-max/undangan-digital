import { weddingData } from "../data/weddingData";

const Footer = () => {
  const { groom, bride, events } = weddingData;

  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a0a00 0%, #0d0500 100%)",
      }}
    >
      {/* Background ornament */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#d4a843"/>
              <path d="M40 20 Q50 30 40 40 Q30 30 40 20 Z" fill="#d4a843" opacity="0.5"/>
              <path d="M20 40 Q30 30 40 40 Q30 50 20 40 Z" fill="#d4a843" opacity="0.5"/>
              <path d="M60 40 Q50 30 40 40 Q50 50 60 40 Z" fill="#d4a843" opacity="0.5"/>
              <path d="M40 60 Q50 50 40 40 Q30 50 40 60 Z" fill="#d4a843" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      {/* Radial glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(212,168,67,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Top ornament */}
        <div className="flex justify-center mb-8">
          <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
            <line x1="0" y1="20" x2="70" y2="20" stroke="#d4a843" strokeWidth="0.7" opacity="0.5"/>
            <path d="M75 20 Q85 10 95 20 Q100 25 105 20 Q115 10 125 20" stroke="#d4a843" strokeWidth="1" fill="none" opacity="0.8"/>
            <line x1="130" y1="20" x2="200" y2="20" stroke="#d4a843" strokeWidth="0.7" opacity="0.5"/>
            <circle cx="100" cy="20" r="3" fill="#d4a843"/>
            <circle cx="0" cy="20" r="2" fill="#d4a843" opacity="0.4"/>
            <circle cx="200" cy="20" r="2" fill="#d4a843" opacity="0.4"/>
          </svg>
        </div>

        {/* Couple names */}
        <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-nunito mb-2 opacity-80">
          ✦ Our Love Story ✦
        </p>
        <h2
          className="text-5xl md:text-6xl font-great mb-3"
          style={{
            background: "linear-gradient(135deg, #946531, #e4c94a, #f5e298, #e4c94a, #946531)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 2px 8px rgba(212,168,67,0.3))",
          }}
        >
          {groom.nickname} & {bride.nickname}
        </h2>

        <p className="text-cream-200 font-lora italic text-base mb-6 opacity-80">
          {events.akad.date}
        </p>

        {/* Doa */}
        <div
          className="max-w-xl mx-auto p-5 rounded-2xl mb-8"
          style={{
            background: "rgba(212,168,67,0.06)",
            border: "1px solid rgba(212,168,67,0.15)",
          }}
        >
          <p className="text-cream-100 font-lora italic text-sm leading-relaxed opacity-80">
            &ldquo;Semoga Allah SWT senantiasa melimpahkan rahmat, berkah, dan cinta-Nya untuk perjalanan hidup kami bersama. Aamiin Ya Rabbal Alamin.&rdquo;
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-32 h-px mx-auto mb-8"
          style={{ background: "linear-gradient(to right, transparent, #d4a843, transparent)" }}
        />

        {/* Made with love */}
        <p className="text-gold-600 text-xs font-nunito opacity-60">
          Made with ❤️ for our special day
        </p>
        <p className="text-gold-700 text-xs font-nunito mt-1 opacity-40">
          © 2025 {groom.nickname} & {bride.nickname} Wedding
        </p>

        {/* Bottom ornament */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 opacity-30">
            {["❀", "✿", "❋", "✿", "❀"].map((f, i) => (
              <span key={i} className="text-gold-500" style={{ fontSize: i === 2 ? "1.2rem" : "0.8rem" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

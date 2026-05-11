import { weddingData } from "../data/weddingData";

const LoveQuoteSection = () => {
  const { quote } = weddingData;

  return (
    <section
      id="quote"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f5f0e8 50%, #faf8f3 100%)" }}
    >
      {/* Background floral decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-8">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 20 Q130 60 100 100 Q70 60 100 20 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M20 100 Q60 70 100 100 Q60 130 20 100 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M180 100 Q140 70 100 100 Q140 130 180 100 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M100 180 Q130 140 100 100 Q70 140 100 180 Z" fill="#d4a843" opacity="0.12"/>
          <circle cx="100" cy="100" r="15" fill="#d4a843" opacity="0.15"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-8 rotate-180">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 20 Q130 60 100 100 Q70 60 100 20 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M20 100 Q60 70 100 100 Q60 130 20 100 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M180 100 Q140 70 100 100 Q140 130 180 100 Z" fill="#d4a843" opacity="0.12"/>
          <path d="M100 180 Q130 140 100 100 Q70 140 100 180 Z" fill="#d4a843" opacity="0.12"/>
          <circle cx="100" cy="100" r="15" fill="#d4a843" opacity="0.15"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Section badge */}
        <div className="flex justify-center mb-8">
          <div
            className="px-6 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-nunito font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(212,168,67,0.15), rgba(228,201,74,0.1))",
              border: "1px solid rgba(212,168,67,0.3)",
              color: "#946531",
            }}
          >
            True Love Story
          </div>
        </div>

        {/* Big decorative quote mark */}
        <div className="flex justify-center mb-6">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
            <path
              d="M5 35 Q5 15 20 15 Q15 25 18 35 Q10 35 5 35 Z M30 35 Q30 15 45 15 Q40 25 43 35 Q35 35 30 35 Z"
              fill="#d4a843"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Translation / Quote text */}
        <p
          className="text-xl md:text-3xl font-lora italic leading-relaxed mb-6"
          style={{ color: "#6b4c20" }}
        >
          {quote.text}
        </p>

        {/* Source */}
        <div
          className="inline-block px-5 py-2 rounded-full text-sm font-nunito font-semibold"
          style={{
            background: "linear-gradient(135deg, #946531, #d4a843)",
            color: "white",
            boxShadow: "0 4px 15px rgba(212,168,67,0.3)",
          }}
        >
          {quote.source}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3">
            {["❀", "✿", "❋", "✿", "❀"].map((flower, i) => (
              <span
                key={i}
                className="text-gold-400 animate-float"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + i * 0.5}s`,
                  fontSize: i === 2 ? "1.5rem" : "1rem",
                  opacity: i === 2 ? 1 : 0.6,
                }}
              >
                {flower}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveQuoteSection;

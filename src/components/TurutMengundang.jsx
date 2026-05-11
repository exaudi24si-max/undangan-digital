import { weddingData } from "../data/weddingData";

const TurutMengundang = () => {
  const { turut_mengundang } = weddingData;

  return (
    <section
      id="turut-mengundang"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a0a00 0%, #2d1410 50%, #1a0a00 100%)",
      }}
    >
      {/* Background ornament */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="turut-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 10 Q40 20 30 30 Q20 20 30 10 Z" fill="#d4a843" opacity="0.5"/>
              <path d="M10 30 Q20 20 30 30 Q20 40 10 30 Z" fill="#d4a843" opacity="0.5"/>
              <path d="M50 30 Q40 20 30 30 Q40 40 50 30 Z" fill="#d4a843" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#turut-pattern)"/>
        </svg>
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(212,168,67,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-nunito mb-3 opacity-80">
            ✦ Keluarga Besar ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-great mb-4"
            style={{
              background: "linear-gradient(135deg, #946531, #e4c94a, #f5e298)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}
          >
            Turut Mengundang
          </h2>
          <div className="flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20">
              <line x1="0" y1="10" x2="75" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.5"/>
              <path d="M80 10 Q90 3 100 10 Q110 17 120 10" stroke="#d4a843" strokeWidth="1.2" fill="none"/>
              <line x1="125" y1="10" x2="200" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.5"/>
              <circle cx="100" cy="10" r="2.5" fill="#d4a843"/>
            </svg>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pihak Pria */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(212,168,67,0.08)",
              border: "1px solid rgba(212,168,67,0.2)",
            }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(212,168,67,0.5))" }} />
                <span className="text-2xl">👰‍♂️</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(212,168,67,0.5))" }} />
              </div>
              <h3
                className="text-lg font-playfair font-bold"
                style={{ color: "#e4c94a" }}
              >
                Dari Pihak Mempelai Pria
              </h3>
              <p className="text-gold-400 text-sm font-nunito opacity-70 mt-1">
                {weddingData.groom.nickname}
              </p>
            </div>

            <ul className="space-y-3">
              {turut_mengundang.pria.map((name, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-gold-900/20"
                  style={{ borderBottom: "1px solid rgba(212,168,67,0.1)" }}
                >
                  <span className="text-gold-400 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-cream-100 text-sm font-nunito">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pihak Wanita */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(240,65,111,0.06)",
              border: "1px solid rgba(240,65,111,0.15)",
            }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(240,65,111,0.4))" }} />
                <span className="text-2xl">👰</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(240,65,111,0.4))" }} />
              </div>
              <h3
                className="text-lg font-playfair font-bold"
                style={{ color: "#ff9ab3" }}
              >
                Dari Pihak Mempelai Wanita
              </h3>
              <p className="text-rose-300 text-sm font-nunito opacity-70 mt-1">
                {weddingData.bride.nickname}
              </p>
            </div>

            <ul className="space-y-3">
              {turut_mengundang.wanita.map((name, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-rose-900/10"
                  style={{ borderBottom: "1px solid rgba(240,65,111,0.1)" }}
                >
                  <span className="text-rose-400 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-cream-100 text-sm font-nunito">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurutMengundang;

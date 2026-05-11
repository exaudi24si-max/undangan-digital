import { weddingData } from "../data/weddingData";

const Footer = () => {
  const { groom, bride, events } = weddingData;

  return (
    <footer
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a0a00 0%, #0d0500 100%)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Top Ornament */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-500">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
        </div>

        <p className="text-gold-400 text-[10px] tracking-[0.5em] uppercase font-bold mb-4 opacity-70">
          Our Love Story
        </p>
        
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-great mb-6 text-white"
          style={{
            background: "linear-gradient(135deg, #fff 0%, #d4a843 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {groom.nickname} & {bride.nickname}
        </h2>

        <div className="flex flex-col items-center gap-2 mb-12">
          <p className="text-cream-100 font-playfair italic text-lg opacity-80">
            {events.akad.date}
          </p>
          <div className="w-10 h-[1px] bg-gold-500/30" />
        </div>

        {/* Closing Quote */}
        <div className="max-w-xl mx-auto mb-16 px-4">
          <p className="text-cream-200 font-lora italic text-sm leading-loose opacity-60">
            &ldquo;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.&rdquo;
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gold-500 mt-4 opacity-50 font-bold">
            (Matius 19:6)
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] mx-auto mb-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30" />

        <div className="space-y-2">
          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">
            Created with ❤️ by Antigravity
          </p>
          <p className="text-gray-600 text-[9px] tracking-widest uppercase opacity-40">
            © 2025 {groom.nickname} & {bride.nickname} Wedding • All Rights Reserved
          </p>
        </div>

        {/* Floating Petal Icons */}
        <div className="flex justify-center mt-12 gap-3 opacity-20">
          {["❀", "✿", "❋"].map((f, i) => (
            <span key={i} className="text-gold-400 text-xl animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>{f}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

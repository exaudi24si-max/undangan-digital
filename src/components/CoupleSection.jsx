import { weddingData } from "../data/weddingData";

const SocialIcon = ({ type, username }) => {
  const icons = {
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  };

  const urls = {
    instagram: `https://instagram.com/${username}`,
    facebook: `https://facebook.com/${username}`,
    twitter: `https://twitter.com/${username}`,
  };

  return (
    <a
      href={urls[type]}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, rgba(212,168,67,0.15), rgba(228,201,74,0.1))",
        border: "1px solid rgba(212,168,67,0.4)",
        color: "#946531",
      }}
      title={`@${username}`}
    >
      {icons[type]}
    </a>
  );
};

const CoupleCard = ({ person, isGroom }) => {
  const gradient = isGroom
    ? "linear-gradient(135deg, #1a0a00 0%, #2d1410 100%)"
    : "linear-gradient(135deg, #0a0010 0%, #1a0a1a 100%)";

  const accentColor = isGroom ? "#d4a843" : "#f0416f";

  return (
    <div
      className="relative rounded-3xl overflow-hidden p-8 md:p-10 text-center flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        background: gradient,
        boxShadow: `0 8px 40px ${isGroom ? "rgba(212,168,67,0.2)" : "rgba(240,65,111,0.2)"}`,
      }}
    >
      {/* Corner ornaments */}
      {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 opacity-40`}>
          <svg viewBox="0 0 30 30" fill="none">
            <path
              d={i === 0 ? "M0 25 L0 5 Q0 0 5 0 L25 0" :
                 i === 1 ? "M30 25 L30 5 Q30 0 25 0 L5 0" :
                 i === 2 ? "M0 5 L0 25 Q0 30 5 30 L25 30" :
                           "M30 5 L30 25 Q30 30 25 30 L5 30"}
              stroke={accentColor} strokeWidth="1.5" fill="none"
            />
          </svg>
        </div>
      ))}

      {/* Photo placeholder */}
      <div
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 flex items-center justify-center text-5xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accentColor}30, ${accentColor}15)`,
          border: `2px solid ${accentColor}60`,
          boxShadow: `0 0 30px ${accentColor}30`,
        }}
      >
        <span>{isGroom ? "👨" : "👩"}</span>
        {/* Photo ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${accentColor}50, transparent, ${accentColor}50, transparent, ${accentColor}50)`,
            animation: "spin 20s linear infinite",
            padding: "2px",
          }}
        />
      </div>

      {/* Tag */}
      <span
        className="text-xs font-nunito font-bold tracking-[0.3em] uppercase px-4 py-1 rounded-full mb-3"
        style={{
          background: `${accentColor}20`,
          color: accentColor,
          border: `1px solid ${accentColor}40`,
        }}
      >
        {isGroom ? "Mempelai Pria" : "Mempelai Wanita"}
      </span>

      {/* Full Name */}
      <h3
        className="text-xl md:text-2xl font-playfair font-bold mb-1"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, #fff8e0)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {person.fullName}
      </h3>

      {/* Child order */}
      <p className="text-cream-300 text-sm font-nunito mb-4 opacity-80">
        {person.childOrder}
      </p>

      {/* Divider */}
      <div className="w-16 h-px mb-4" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />

      {/* Parents */}
      <div className="text-sm font-nunito text-cream-100 opacity-80 space-y-1 mb-2">
        <p>Putra/Putri dari</p>
        <p className="font-semibold opacity-90">{person.father}</p>
        <p className="text-xs opacity-60">&amp;</p>
        <p className="font-semibold opacity-90">{person.mother}</p>
      </div>

      {/* City */}
      <div className="flex items-center gap-1 mt-3 mb-5">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span className="text-xs font-nunito" style={{ color: `${accentColor}cc` }}>{person.city}</span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        <SocialIcon type="instagram" username={person.instagram} />
        <SocialIcon type="facebook" username={person.facebook} />
        <SocialIcon type="twitter" username={person.twitter} />
      </div>
    </div>
  );
};

const CoupleSection = () => {
  const { groom, bride } = weddingData;

  return (
    <section
      id="couple"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f5f0e8 100%)" }}
    >
      {/* Section header */}
      <div className="text-center mb-16 px-6">
        <p className="text-gold-600 text-xs tracking-[0.4em] uppercase font-nunito mb-3">
          ✦ The Happy Couple ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-great mb-4" style={{
          background: "linear-gradient(135deg, #946531, #d4a843, #e4c94a)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>
          Kedua Mempelai
        </h2>
        <div className="flex justify-center">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <line x1="0" y1="10" x2="75" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
            <path d="M80 10 Q90 3 100 10 Q110 17 120 10" stroke="#d4a843" strokeWidth="1.2" fill="none"/>
            <line x1="125" y1="10" x2="200" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="100" cy="10" r="2.5" fill="#d4a843"/>
          </svg>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <CoupleCard person={groom} isGroom={true} />
        {/* Connector between cards */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center font-dancing text-2xl font-bold"
            style={{
              background: "linear-gradient(135deg, #946531, #d4a843)",
              color: "white",
              boxShadow: "0 4px 20px rgba(212,168,67,0.4)",
            }}
          >
            &
          </div>
        </div>
        <CoupleCard person={bride} isGroom={false} />
      </div>

      {/* Mobile & connector */}
      <div className="md:hidden flex justify-center my-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-dancing text-2xl font-bold"
          style={{
            background: "linear-gradient(135deg, #946531, #d4a843)",
            color: "white",
          }}
        >
          &
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;

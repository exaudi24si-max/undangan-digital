import { useState, useEffect } from "react";

// Simple local storage-based wish box (no backend needed for prototype)
const STORAGE_KEY = "wedding_wishes";

const defaultWishes = [
  {
    id: 1,
    name: "Keluarga Budi Santoso",
    attendance: "hadir",
    message: "Selamat menempuh hidup baru! Semoga kasih Kristus senantiasa memberkati perjalanan rumah tangga kalian. Langgeng sampai kakek nenek. 💍",
    time: "2025-06-01T08:30:00",
  },
  {
    id: 2,
    name: "Anita Wijaya & Keluarga",
    attendance: "hadir",
    message: "Happy Wedding Randy & Yona! Tuhan Yesus memberkati setiap langkah kalian ke depan. Selamat berbahagia! 💕",
    time: "2025-06-02T14:15:00",
  },
  {
    id: 3,
    name: "Rini Wulandari",
    attendance: "tidak_hadir",
    message: "Maaf tidak bisa hadir. Semoga hari bahagia kalian lancar dan diberkati Tuhan. Do'a terbaik selalu menyertai kalian berdua! 🙏",
    time: "2025-06-03T09:00:00",
  },
];

const WishBox = () => {
  const [wishes, setWishes] = useState(() => {
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultWishes;
      }
    }
    return defaultWishes;
  });
  const [form, setForm] = useState({ name: "", message: "", attendance: "hadir" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultWishes));
    }
  }, []);

  const stats = {
    hadir: wishes.filter((w) => w.attendance === "hadir").length,
    tidak_hadir: wishes.filter((w) => w.attendance === "tidak_hadir").length,
    mungkin: wishes.filter((w) => w.attendance === "mungkin").length,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));

    const newWish = {
      id: Date.now(),
      name: form.name,
      message: form.message,
      attendance: form.attendance,
      time: new Date().toISOString(),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setForm({ name: "", message: "", attendance: "hadir" });
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const formatTime = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  const attendanceBadge = (type) => {
    const map = {
      hadir: { label: "Hadir", bg: "#22c55e20", color: "#16a34a", border: "#22c55e40" },
      tidak_hadir: { label: "Tidak Hadir", bg: "#ef444420", color: "#dc2626", border: "#ef444440" },
      mungkin: { label: "Masih Ragu", bg: "#f59e0b20", color: "#d97706", border: "#f59e0b40" },
    };
    const s = map[type] || map.hadir;
    return (
      <span
        className="text-xs font-nunito font-semibold px-2.5 py-0.5 rounded-full"
        style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
      >
        {s.label}
      </span>
    );
  };

  return (
    <section
      id="wishbox"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f3 100%)" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-[0.4em] uppercase font-nunito mb-3">
            ✦ Ucapan & Do&apos;a ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-great mb-4"
            style={{
              background: "linear-gradient(135deg, #946531, #d4a843, #e4c94a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}
          >
            Wish Box
          </h2>
          <div className="flex justify-center mb-6">
            <svg width="200" height="20" viewBox="0 0 200 20">
              <line x1="0" y1="10" x2="75" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
              <path d="M80 10 Q90 3 100 10 Q110 17 120 10" stroke="#d4a843" strokeWidth="1.2" fill="none"/>
              <line x1="125" y1="10" x2="200" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
              <circle cx="100" cy="10" r="2.5" fill="#d4a843"/>
            </svg>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { label: "Hadir", value: stats.hadir, color: "#22c55e", bg: "#22c55e15" },
              { label: "Tidak Hadir", value: stats.tidak_hadir, color: "#ef4444", bg: "#ef444415" },
              { label: "Masih Ragu", value: stats.mungkin, color: "#f59e0b", bg: "#f59e0b15" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: s.bg, border: `1px solid ${s.color}30` }}
              >
                <span className="text-xl font-playfair font-bold" style={{ color: s.color }}>{s.value}</span>
                <span className="text-xs font-nunito text-gray-600">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Write wish form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl p-6 md:p-8 mb-8"
          style={{
            background: "white",
            boxShadow: "0 8px 40px rgba(212,168,67,0.12)",
            border: "1px solid rgba(212,168,67,0.2)",
          }}
        >
          <h3 className="text-base font-playfair font-bold text-gold-700 mb-5 flex items-center gap-2">
            <span>✍️</span> Tulis Ucapan & Do&apos;a
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-2">Nama</label>
              <input
                type="text"
                placeholder="Nama Anda..."
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-xl text-sm font-nunito text-gray-700 outline-none transition-all duration-300"
                style={{ background: "#faf8f3", border: "1.5px solid rgba(212,168,67,0.3)" }}
                onFocus={(e) => { e.target.style.borderColor = "#d4a843"; e.target.style.boxShadow = "0 0 0 3px rgba(212,168,67,0.15)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(212,168,67,0.3)"; e.target.style.boxShadow = "none"; }}
              />
            </div>
            <div>
              <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-2">Kehadiran</label>
              <select
                value={form.attendance}
                onChange={(e) => setForm((p) => ({ ...p, attendance: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm font-nunito text-gray-700 outline-none transition-all duration-300 cursor-pointer"
                style={{ background: "#faf8f3", border: "1.5px solid rgba(212,168,67,0.3)" }}
                onFocus={(e) => { e.target.style.borderColor = "#d4a843"; e.target.style.boxShadow = "0 0 0 3px rgba(212,168,67,0.15)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(212,168,67,0.3)"; e.target.style.boxShadow = "none"; }}
              >
                <option value="hadir">✅ Hadir</option>
                <option value="tidak_hadir">❌ Tidak Hadir</option>
                <option value="mungkin">🤔 Masih Ragu</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-2">Ucapan & Do&apos;a</label>
            <textarea
              placeholder="Tuliskan ucapan dan do'a terbaik Anda untuk kedua mempelai..."
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm font-nunito text-gray-700 outline-none transition-all duration-300 resize-none"
              style={{ background: "#faf8f3", border: "1.5px solid rgba(212,168,67,0.3)" }}
              onFocus={(e) => { e.target.style.borderColor = "#d4a843"; e.target.style.boxShadow = "0 0 0 3px rgba(212,168,67,0.15)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(212,168,67,0.3)"; e.target.style.boxShadow = "none"; }}
            />
          </div>

          {submitted && (
            <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-nunito flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Ucapan berhasil terkirim! Terima kasih 💛
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-nunito font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #946531, #d4a843, #e4c94a)",
              color: "white",
              boxShadow: "0 4px 20px rgba(212,168,67,0.4)",
            }}
          >
            {loading ? "Mengirim..." : "💌 Kirim Ucapan"}
          </button>
        </form>

        {/* Wishes list */}
        <div className="space-y-4 wish-scroll max-h-[600px] overflow-y-auto pr-2">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                border: "1px solid rgba(212,168,67,0.15)",
              }}
            >
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-playfair font-bold text-sm flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #946531, #d4a843)",
                    }}
                  >
                    {wish.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-nunito font-bold text-sm text-gray-800">{wish.name}</p>
                    <p className="text-xs text-gray-400 font-nunito">{formatTime(wish.time)}</p>
                  </div>
                </div>
                {attendanceBadge(wish.attendance)}
              </div>
              <p className="text-sm font-lora italic text-gray-700 leading-relaxed pl-13">
                &ldquo;{wish.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishBox;

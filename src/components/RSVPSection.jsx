import { useState } from "react";

const RSVPSection = () => {
  const [form, setForm] = useState({ name: "", attendance: "", guests: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setError("Harap isi nama Anda."); return; }
    if (!form.attendance) { setError("Harap pilih konfirmasi kehadiran."); return; }
    if (!form.guests) { setError("Harap pilih jumlah tamu."); return; }

    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const attendanceOptions = [
    { value: "hadir", label: "✅ Hadir", color: "#22c55e" },
    { value: "tidak_hadir", label: "❌ Tidak Hadir", color: "#ef4444" },
    { value: "mungkin", label: "🤔 Masih Ragu", color: "#f59e0b" },
  ];

  const guestOptions = [
    { value: "1", label: "1 Orang" },
    { value: "2", label: "2 Orang" },
    { value: "3", label: "3 Orang" },
    { value: "sekeluarga", label: "Sekeluarga" },
  ];

  if (submitted) {
    return (
      <section
        id="rsvp"
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f5f0e8 100%)" }}
      >
        <div className="max-w-lg mx-auto px-6 text-center">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "white",
              boxShadow: "0 8px 40px rgba(212,168,67,0.15)",
              border: "1px solid rgba(212,168,67,0.2)",
            }}
          >
            <div className="text-6xl mb-6 animate-bounce-gentle">
              {form.attendance === "hadir" ? "🎉" : form.attendance === "tidak_hadir" ? "🙏" : "💌"}
            </div>
            <h3
              className="text-2xl font-playfair font-bold mb-3"
              style={{ color: "#946531" }}
            >
              Terima Kasih, {form.name}!
            </h3>
            <p className="text-gray-600 font-nunito text-sm leading-relaxed">
              {form.attendance === "hadir"
                ? "Kami sangat senang Anda bisa hadir. Sampai jumpa di hari bahagia kami! 💍"
                : form.attendance === "tidak_hadir"
                ? "Tidak apa-apa, do'a dan restu Anda sangat berarti bagi kami. 🙏"
                : "Kami tunggu kabar baiknya ya! 😊"}
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", attendance: "", guests: "" }); }}
              className="mt-6 text-sm font-nunito text-gold-600 underline hover:text-gold-700"
            >
              Isi ulang
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f5f0e8 100%)" }}
    >
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #d4a843, transparent)" }} />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #f0416f, transparent)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-[0.4em] uppercase font-nunito mb-3">
            ✦ Konfirmasi Kehadiran ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-great mb-4"
            style={{
              background: "linear-gradient(135deg, #946531, #d4a843, #e4c94a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}
          >
            RSVP
          </h2>
          <div className="flex justify-center mb-4">
            <svg width="200" height="20" viewBox="0 0 200 20">
              <line x1="0" y1="10" x2="75" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
              <path d="M80 10 Q90 3 100 10 Q110 17 120 10" stroke="#d4a843" strokeWidth="1.2" fill="none"/>
              <line x1="125" y1="10" x2="200" y2="10" stroke="#d4a843" strokeWidth="0.8" opacity="0.6"/>
              <circle cx="100" cy="10" r="2.5" fill="#d4a843"/>
            </svg>
          </div>
          <p className="text-gray-600 font-nunito text-sm">
            Mohon konfirmasi kehadiran Anda paling lambat <strong>7 Juni 2025</strong>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: "white",
            boxShadow: "0 8px 40px rgba(212,168,67,0.12)",
            border: "1px solid rgba(212,168,67,0.2)",
          }}
        >
          {/* Name field */}
          <div className="mb-6">
            <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-2">
              Nama Lengkap Anda *
            </label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap Anda..."
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl text-sm font-nunito text-gray-700 outline-none transition-all duration-300 focus:ring-2"
              style={{
                background: "#faf8f3",
                border: "1.5px solid rgba(212,168,67,0.3)",
                focusRingColor: "#d4a843",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#d4a843";
                e.target.style.boxShadow = "0 0 0 3px rgba(212,168,67,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(212,168,67,0.3)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Attendance */}
          <div className="mb-6">
            <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-3">
              Konfirmasi Kehadiran *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {attendanceOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleChange("attendance", opt.value)}
                  className="py-3 px-2 rounded-2xl text-xs font-nunito font-semibold transition-all duration-300 hover:scale-105 text-center"
                  style={{
                    background: form.attendance === opt.value ? `${opt.color}20` : "#faf8f3",
                    border: `2px solid ${form.attendance === opt.value ? opt.color : "rgba(212,168,67,0.2)"}`,
                    color: form.attendance === opt.value ? opt.color : "#666",
                    boxShadow: form.attendance === opt.value ? `0 4px 12px ${opt.color}30` : "none",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Guest count */}
          <div className="mb-8">
            <label className="block text-xs font-nunito font-semibold tracking-widest uppercase text-gold-700 mb-3">
              Jumlah Tamu *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {guestOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleChange("guests", opt.value)}
                  className="py-3 px-2 rounded-2xl text-xs font-nunito font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: form.guests === opt.value
                      ? "linear-gradient(135deg, rgba(212,168,67,0.2), rgba(228,201,74,0.1))"
                      : "#faf8f3",
                    border: `2px solid ${form.guests === opt.value ? "#d4a843" : "rgba(212,168,67,0.2)"}`,
                    color: form.guests === opt.value ? "#946531" : "#666",
                    boxShadow: form.guests === opt.value ? "0 4px 12px rgba(212,168,67,0.3)" : "none",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-nunito flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              {error}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-nunito font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #946531, #d4a843, #e4c94a, #d4a843, #946531)",
              backgroundSize: "200% auto",
              color: "white",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              boxShadow: "0 6px 25px rgba(212,168,67,0.4)",
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Mengirim...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Kirim Konfirmasi
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;

import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

const RSVPWishboxSection = () => {
  const [form, setForm] = useState({ name: "", attendance: "hadir", guests: "1" });
  const [wishes, setWishes] = useState([]);
  const [wishForm, setWishForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Load default wishes for dummy
  useEffect(() => {
    setWishes([
      { id: 1, name: "Keluarga Budi Santoso", message: "Selamat menempuh hidup baru! Semoga langgeng sampai kakek nenek.", time: "1 minggu yang lalu" },
      { id: 2, name: "Faisal", message: "Happy Wedding! Maaf tidak bisa hadir.", time: "1 minggu yang lalu" },
      { id: 3, name: "Anita", message: "Selamat ya Yona & Randy, semoga bahagia selalu.", time: "1 minggu yang lalu" },
    ]);
  }, []);

  const handleRSVP = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", attendance: "hadir", guests: "1" });
  };

  const handleWish = (e) => {
    e.preventDefault();
    if (!wishForm.name.trim() || !wishForm.message.trim()) return;
    const newWish = {
      id: Date.now(),
      name: wishForm.name,
      message: wishForm.message,
      time: "Baru saja",
    };
    setWishes([newWish, ...wishes]);
    setWishForm({ name: "", message: "" });
  };

  return (
    <section className="bg-cream text-black py-24 md:py-32 flex flex-col items-center">
      
      {/* RSVP Section */}
      <div className="w-full max-w-2xl px-6 mb-24">
        <h2 className="text-xl tracking-[0.5em] uppercase text-center mb-12">R S V P</h2>
        
        <form onSubmit={handleRSVP} className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col gap-6">
          <div>
            <label className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">Nama Anda *</label>
            <input 
              type="text" 
              placeholder="Tulis Nama Anda..."
              className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">Konfirmasi Kehadiran *</label>
            <select 
              className="w-full border border-gray-300 py-3 px-3 text-sm focus:outline-none focus:border-black transition-colors bg-white cursor-pointer"
              value={form.attendance}
              onChange={(e) => setForm({...form, attendance: e.target.value})}
            >
              <option value="hadir">Konfirmasi Kehadiran Anda</option>
              <option value="hadir">Hadir</option>
              <option value="tidak_hadir">Tidak Hadir</option>
              <option value="ragu">Masih Ragu</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">Konfirmasi Jumlah Kehadiran *</label>
            <select 
              className="w-full border border-gray-300 py-3 px-3 text-sm focus:outline-none focus:border-black transition-colors bg-white cursor-pointer"
              value={form.guests}
              onChange={(e) => setForm({...form, guests: e.target.value})}
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-gray-500 text-white text-[10px] tracking-[0.2em] uppercase hover:bg-gray-700 transition-colors"
          >
            {submitted ? "Terkirim!" : "Kirim RSVP"}
          </button>
        </form>
      </div>

      {/* Wishbox Section */}
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-5xl md:text-6xl signature-font text-center mb-12" style={{ color: "#b39b7d" }}>
          Wish Box
        </h2>

        {/* Wish Form */}
        <form onSubmit={handleWish} className="mb-8 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Nama Anda"
            className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-black transition-colors"
            value={wishForm.name}
            onChange={(e) => setWishForm({...wishForm, name: e.target.value})}
            required
          />
          <textarea 
            placeholder="Tulis ucapan dan doa..."
            rows="3"
            className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
            value={wishForm.message}
            onChange={(e) => setWishForm({...wishForm, message: e.target.value})}
            required
          />
          <button 
            type="submit" 
            className="self-end py-2 px-6 border border-gray-400 text-[10px] tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-colors"
          >
            Kirim Ucapan
          </button>
        </form>

        {/* Wishes List */}
        <div className="bg-white border border-gray-200">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-center gap-2">
            <span className="text-gray-500 text-sm">💬 {wishes.length} Ucapan</span>
          </div>
          
          <div className="flex flex-col max-h-[500px] overflow-y-auto">
            {wishes.map((wish) => (
              <div key={wish.id} className="p-6 border-b border-gray-100 last:border-b-0 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-gray-500 serif-font">
                  {wish.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{wish.name}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{wish.message}</p>
                  <p className="text-[10px] text-gray-400">🕒 {wish.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 flex justify-center items-center gap-4 text-xs text-gray-500">
            <span>&larr; Previous</span>
            <span className="font-bold text-black">1</span>
            <span>2</span>
            <span>3</span>
            <span>Next &rarr;</span>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center text-gray-500">
        <div className="w-8 h-8 mx-auto border border-gray-400 rounded-full flex items-center justify-center mb-4">
          <span className="text-[10px]">RY</span>
        </div>
      </div>
    </section>
  );
};

export default RSVPWishboxSection;

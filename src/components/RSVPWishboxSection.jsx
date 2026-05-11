import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RSVPWishboxSection = () => {
  const [form, setForm] = useState({ name: "", attendance: "hadir", guests: "1" });
  const [wishes, setWishes] = useState([]);
  const [wishForm, setWishForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setWishes([
      { id: 1, name: "Keluarga Budi Santoso", message: "Selamat menempuh hidup baru! Semoga kasih Kristus senantiasa memberkati perjalanan rumah tangga kalian.", time: "1 minggu yang lalu", color: "#fef3c7" },
      { id: 2, name: "Anita Wijaya", message: "Happy Wedding Randy & Yona! Tuhan Yesus memberkati setiap langkah kalian ke depan.", time: "1 minggu yang lalu", color: "#ecfdf5" },
      { id: 3, name: "Rini Wulandari", message: "Selamat ya Yona & Randy, semoga bahagia selalu dalam lindungan Tuhan.", time: "1 minggu yang lalu", color: "#fdf2f8" },
    ]);
  }, []);

  const handleRSVP = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", attendance: "hadir", guests: "1" });
  };

  const handleWish = (e) => {
    e.preventDefault();
    if (!wishForm.name.trim() || !wishForm.message.trim()) return;
    const colors = ["#fef3c7", "#ecfdf5", "#fdf2f8", "#eff6ff", "#f5f3ff"];
    const newWish = {
      id: Date.now(),
      name: wishForm.name,
      message: wishForm.message,
      time: "Baru saja",
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setWishes([newWish, ...wishes]);
    setWishForm({ name: "", message: "" });
  };

  return (
    <section id="rsvp" className="bg-[#fdfbf7] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        
        {/* RSVP Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-600 font-bold mb-4">Confirm Attendance</p>
            <h2 className="text-4xl md:text-5xl font-great mb-6 text-[#946531]">R S V P</h2>
            <p className="text-xs text-gray-500 tracking-widest leading-loose">
              Mohon konfirmasi kehadiran Anda untuk membantu kami dalam mempersiapkan jamuan.
            </p>
          </div>

          <form onSubmit={handleRSVP} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-gold-900/5 border border-gold-100/50 flex flex-col gap-8 relative">
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[2rem] z-20 flex flex-col items-center justify-center text-center p-10"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-3xl">✓</div>
                  <h3 className="text-xl font-bold mb-2">Terima Kasih!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Konfirmasi kehadiran Anda telah kami terima.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-gold-700 font-bold mb-3">Nama Lengkap *</label>
              <input 
                type="text" 
                placeholder="Tulis Nama Anda..."
                className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gold-700 font-bold mb-3">Kehadiran *</label>
                <div className="relative">
                  <select 
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all appearance-none cursor-pointer"
                    value={form.attendance}
                    onChange={(e) => setForm({...form, attendance: e.target.value})}
                  >
                    <option value="hadir">Hadir</option>
                    <option value="tidak_hadir">Tidak Hadir</option>
                    <option value="ragu">Masih Ragu</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gold-700 font-bold mb-3">Jumlah Tamu *</label>
                <div className="relative">
                  <select 
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all appearance-none cursor-pointer"
                    value={form.guests}
                    onChange={(e) => setForm({...form, guests: e.target.value})}
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 mt-4 bg-[#946531] text-white text-[11px] tracking-[0.3em] uppercase font-bold rounded-xl hover:bg-black hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Konfirmasi"}
            </button>
          </form>
        </motion.div>

        {/* Wishbox Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <div className="text-center md:text-right mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold-600 font-bold mb-4">Gifts of Prayer</p>
            <h2 className="text-5xl md:text-6xl font-great mb-6 text-[#946531]">Wish Box</h2>
          </div>

          {/* List of wishes */}
          <div className="flex-1 bg-white/50 backdrop-blur-md border border-white/50 rounded-[2rem] p-6 md:p-10 mb-8 overflow-hidden flex flex-col shadow-xl">
             <div className="flex items-center gap-2 mb-8 px-2">
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400">{wishes.length} Wishes Received</span>
             </div>

             <div className="flex flex-col gap-6 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {wishes.map((wish) => (
                    <motion.div 
                      key={wish.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="p-6 rounded-2xl flex flex-col gap-3 transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: wish.color }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-gray-800 tracking-wide">{wish.name}</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase">{wish.time}</p>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed italic">"{wish.message}"</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
             </div>
          </div>

          {/* Form to add wish */}
          <form onSubmit={handleWish} className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Nama Anda"
              className="w-full bg-white border border-gray-100 rounded-xl py-4 px-6 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all shadow-sm"
              value={wishForm.name}
              onChange={(e) => setWishForm({...wishForm, name: e.target.value})}
              required
            />
            <div className="relative">
              <textarea 
                placeholder="Tulis ucapan & doa restu..."
                rows="3"
                className="w-full bg-white border border-gray-100 rounded-xl py-4 px-6 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all shadow-sm resize-none"
                value={wishForm.message}
                onChange={(e) => setWishForm({...wishForm, message: e.target.value})}
                required
              />
              <button 
                type="submit" 
                className="absolute bottom-4 right-4 p-2.5 bg-[#946531] text-white rounded-lg hover:bg-black transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </button>
            </div>
          </form>
        </motion.div>

      </div>

      <div className="mt-32 text-center text-gray-300">
        <div className="w-12 h-12 mx-auto border border-gray-200 rounded-full flex items-center justify-center mb-6 opacity-50">
          <span className="text-xs font-bold tracking-tighter">RY</span>
        </div>
      </div>
    </section>
  );
};

export default RSVPWishboxSection;

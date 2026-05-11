import { motion } from "framer-motion";
import { weddingData, getCalendarUrl } from "../data/weddingData";

const EventCard = ({ title, time, timeEnd, venue, address, mapsUrl, calendarEvent, isDark }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative p-8 md:p-12 rounded-3xl overflow-hidden ${
        isDark ? 'bg-black text-white border border-white/10' : 'bg-white text-black border border-gray-100 shadow-xl'
      }`}
    >
      {/* Decorative Ornaments */}
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 ${isDark ? 'invert' : ''}`}>
         <img src="/images/flower-corner.png" alt="" className="w-full h-full object-contain" />
      </div>

      <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 tracking-wide uppercase italic">
        {title}
      </h3>
      
      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gold-600 font-bold mb-1">Waktu</p>
            <p className="text-sm md:text-base font-medium">{time} — {timeEnd}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gold-600 font-bold mb-1">Lokasi</p>
            <p className="text-sm md:text-base font-bold mb-1">{venue}</p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">{address}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100/10 mt-6">
        <a 
          href={mapsUrl} 
          target="_blank" 
          rel="noreferrer"
          className={`flex-1 text-center py-3.5 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${
            isDark ? 'bg-white text-black hover:bg-gold-500 hover:text-white' : 'bg-black text-white hover:bg-gold-600'
          }`}
        >
          Lihat Lokasi
        </a>
        <a 
          href={getCalendarUrl(calendarEvent)} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 text-center py-3.5 rounded-full text-[10px] tracking-widest uppercase font-bold border border-gold-400 text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300"
        >
          Simpan Tanggal
        </a>
      </div>
    </motion.div>
  );
};

const EventSection = () => {
  const { events, turut_mengundang } = weddingData;

  const dateObj = new Date(events.akad.dateISO);
  const dayName = dateObj.toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase();
  const dateNum = String(dateObj.getDate()).padStart(2, '0');
  const yearStr = dateObj.getFullYear();
  const monthName = dateObj.toLocaleDateString('id-ID', { month: 'long' }).toUpperCase();

  return (
    <section id="events" className="bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-900/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold-500 mb-6 font-bold">Rangkaian Acara</p>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-great mb-10 text-white">Save The Date</h2>
            
            <div className="flex items-center gap-10">
              <div className="text-right">
                <p className="text-xs md:text-sm tracking-widest uppercase text-gray-400">{dayName}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 md:w-20 h-[1px] bg-gold-500 mb-4" />
                <p className="text-5xl md:text-6xl font-bold font-playfair">{dateNum}</p>
                <div className="w-16 md:w-20 h-[1px] bg-gold-500 mt-4" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm tracking-widest uppercase text-gray-400">{monthName} {yearStr}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <EventCard 
            title="Pemberkatan Nikah"
            time={events.akad.time}
            timeEnd={events.akad.timeEnd}
            venue={events.akad.venue}
            address={events.akad.address}
            mapsUrl={events.akad.mapsUrl}
            calendarEvent={events.akad}
            isDark={false}
          />
          <EventCard 
            title="Resepsi Pernikahan"
            time={events.resepsi.time}
            timeEnd={events.resepsi.timeEnd}
            venue={events.resepsi.venue}
            address={events.resepsi.address}
            mapsUrl={events.resepsi.mapsUrl}
            calendarEvent={events.resepsi}
            isDark={true}
          />
        </div>

        {/* Closing Greeting */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs md:text-sm text-gray-400 font-light leading-loose tracking-widest uppercase">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default EventSection;

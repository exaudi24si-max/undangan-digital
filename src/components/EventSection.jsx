import { weddingData, getCalendarUrl } from "../data/weddingData";

const EventSection = () => {
  const { events, turut_mengundang } = weddingData;

  // Format date to match screenshot: MINGGU / 02 / 2025
  const dateObj = new Date(events.akad.dateISO);
  const dayName = dateObj.toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase();
  const dateNum = String(dateObj.getDate()).padStart(2, '0');
  const yearStr = dateObj.getFullYear();
  const monthName = dateObj.toLocaleDateString('id-ID', { month: 'long' });

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        {/* Top Greeting */}
        <p className="text-xs tracking-widest text-gray-400 mb-8 max-w-lg mx-auto leading-loose">
          Dengan memohon berkat dan rahmat Tuhan YME. Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara Pemberkatan nikah dan resepsi kami yang Insya Allah akan dilaksanakan pada:
        </p>

        {/* Date Display */}
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-xs tracking-widest uppercase mb-2">{dayName}</p>
          <div className="flex items-center justify-center gap-4 w-full max-w-[200px]">
            <div className="h-px bg-gray-500 flex-1"></div>
            <p className="text-4xl serif-font font-bold">{dateNum}</p>
            <div className="h-px bg-gray-500 flex-1"></div>
          </div>
          <p className="text-xs tracking-widest uppercase mt-2">{monthName} {yearStr}</p>
        </div>

        {/* Save The Date Button */}
        <div className="mb-12">
          <a 
            href={getCalendarUrl(events.akad)} 
            target="_blank" 
            rel="noreferrer"
            className="btn-dark"
          >
            Save The Date
          </a>
        </div>

        {/* Times */}
        <div className="mb-12 space-y-6">
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-2">Pemberkatan Nikah</h4>
            <p className="text-xs text-gray-400">{events.akad.time} - {events.akad.timeEnd}</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-2">Resepsi</h4>
            <p className="text-xs text-gray-400">{events.resepsi.time} - {events.resepsi.timeEnd}</p>
          </div>
        </div>

        {/* Separator icon */}
        <div className="flex justify-center mb-10 opacity-50">
           <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a4 4 0 014-4h10a4 4 0 014 4v4a4 4 0 01-4 4H7a4 4 0 01-4-4v-4z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4m8 2V4m-4 16v-2m-4 2v-2" />
           </svg>
        </div>

        {/* Venue */}
        <div className="mb-10">
          <h4 className="text-xs tracking-[0.3em] uppercase mb-3">Bertempat Di</h4>
          <p className="text-sm font-semibold mb-1">{events.resepsi.venue}</p>
          <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
            {events.resepsi.address}
          </p>
        </div>

        {/* Map Button */}
        <div className="mb-20">
          <a 
            href={events.resepsi.mapsUrl} 
            target="_blank" 
            rel="noreferrer"
            className="btn-dark"
          >
            Petunjuk Arah Ke Lokasi
          </a>
        </div>

        {/* Turut Mengundang */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase mb-10 text-gray-300">Turut Mengundang</h4>
          
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 text-left max-w-lg mx-auto">
            {/* Pria */}
            <div className="w-full md:w-1/2">
              <h5 className="text-[10px] tracking-widest uppercase mb-4 text-gray-400">Pihak Mempelai Pria</h5>
              <ul className="space-y-2">
                {turut_mengundang.pria.map((name, i) => (
                  <li key={i} className="text-[10px] text-gray-300 tracking-wider">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Wanita */}
            <div className="w-full md:w-1/2">
              <h5 className="text-[10px] tracking-widest uppercase mb-4 text-gray-400">Pihak Mempelai Wanita</h5>
              <ul className="space-y-2">
                {turut_mengundang.wanita.map((name, i) => (
                  <li key={i} className="text-[10px] text-gray-300 tracking-wider">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventSection;

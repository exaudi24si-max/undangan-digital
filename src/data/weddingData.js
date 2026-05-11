export const weddingData = {
  groom: {
    fullName: "Randy",
    nickname: "Randy",
    childOrder: "Putra Pertama",
    father: "Bapak Martua Banjarnahor",
    mother: "Ibu Binur Samosir",
    city: "Riau , Pekanbaru",
    photo: null, // Will use gradient placeholder
    instagram: "randy",
    facebook: "randy",
    twitter: "randy",
  },
  bride: {
    fullName: "Yona",
    nickname: "Yona",
    childOrder: "Putri Kedua",
    father: "Bapak Antonius Wijaya",
    mother: "Ibu Elisabeth Indah",
    city: "Siantar, Sumatera Utara",
    photo: null,
    instagram: "yona",
    facebook: "yona",
    twitter: "yona",
  },
  events: {
    akad: {
      date: "Sabtu, 14 Juni 2025",
      dateISO: "2025-06-14",
      time: "09.00 WIB",
      timeEnd: "11.00 WIB",
      venue: "Gereja HKBP Trinitatis Tapung",
      address: "JL. Kelompok Tani, Kota Garo , Kecamatan tapung Hilir ,Kabupaten Kampar , Riau",
      mapsUrl: "https://maps.google.com/?q=Gereja+Katedral+Jakarta",
      calendarTitle: "Pemberkatan Nikah Randy & Yona",
    },
    resepsi: {
      date: "Sabtu, 14 Juni 2025",
      dateISO: "2025-06-14",
      time: "18.00 WIB",
      timeEnd: "21.00 WIB",
      venue: "Rumah Opung Bpk. Chloe Sianipar",
      address: "Jl. Kelompok Tani, Kota Garo , Kecamatan tapung Hilir ,Kabupaten Kampar , Riau",
      mapsUrl: "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta",
      calendarTitle: "Resepsi Pernikahan Randy & Yona",
    },
  },
  weddingDate: new Date("2025-06-14T09:00:00"),
  quote: {
    text: "\"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It always protects, always trusts, always hopes, always perseveres. Love never fails.\"",
    source: "1 Korintus 13:4-8",
  },
  turut_mengundang: {
    pria: [
      "Keluarga Besar Bpk. Martua Banjarnahor",
      "Keluarga Besar Bpk. Lebinter Banjarnhor ",
      "Keluarga Besar Bpk. Bangun Banjarnahor",
    ],
    wanita: [
      "Keluarga Besar Bpk. Antonius Wijaya",
      "Keluarga Besar Bpk. Fransiskus Halim",
      "Keluarga Besar Bpk. Thomas Hartono",
    ],
  },
};

// Google Calendar URL generator
export const getCalendarUrl = (event) => {
  const dateStr = event.dateISO.replace(/-/g, "");
  const startTime = event.time.replace(/\./g, "").replace(" WIB", "");
  const endTime = event.timeEnd.replace(/\./g, "").replace(" WIB", "");
  const pad = (s) => s.padStart(4, "0");
  const start = `${dateStr}T${pad(startTime)}00`;
  const end = `${dateStr}T${pad(endTime)}00`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.calendarTitle)}&dates=${start}/${end}&details=${encodeURIComponent(`Alamat: ${event.address}`)}&location=${encodeURIComponent(event.address)}`;
};

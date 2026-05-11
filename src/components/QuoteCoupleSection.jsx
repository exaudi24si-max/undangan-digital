import { weddingData } from "../data/weddingData";

const QuoteCoupleSection = () => {
  const { quote, groom, bride } = weddingData;

  return (
    <section className="bg-cream text-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Quote */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-sm font-playfair italic mb-4 text-gray-800 leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            - {quote.source} -
          </p>
        </div>

        {/* Couple Profiles */}
        <div className="flex flex-col gap-0 shadow-2xl overflow-hidden">
          
          {/* Groom Box */}
          <div className="flex flex-col md:flex-row">
            {/* Photo Placeholder */}
            <div 
              className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gray-200 relative bg-cover bg-center"
              style={{ backgroundImage: "url('/images/foto20.jpg')", backgroundPosition: "top center" }}
            >
            </div>
            
            {/* Details Box */}
            <div className="w-full md:w-1/2 bg-black text-white p-12 md:p-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl md:text-2xl serif-font font-bold mb-6">
                {groom.fullName}
              </h3>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
                {groom.childOrder} dari Pasangan
              </p>
              <p className="text-sm text-gray-300 font-semibold mb-2">
                {groom.father}
              </p>
              <p className="text-xs text-gray-500 my-1">&</p>
              <p className="text-sm text-gray-300 font-semibold mb-8">
                {groom.mother}
              </p>
              <p className="text-xs text-gray-400 tracking-wider">
                {groom.city}
              </p>
            </div>
          </div>

          {/* Bride Box */}
          <div className="flex flex-col md:flex-row-reverse">
            {/* Photo Placeholder */}
            <div 
              className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gray-300 relative bg-cover bg-center"
              style={{ backgroundImage: "url('/images/foto19.jpg')", backgroundPosition: "center 30%" }}
            >
            </div>
            
            {/* Details Box */}
            <div className="w-full md:w-1/2 bg-black text-white p-12 md:p-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl md:text-2xl serif-font font-bold mb-6">
                {bride.fullName}
              </h3>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
                {bride.childOrder} dari Pasangan
              </p>
              <p className="text-sm text-gray-300 font-semibold mb-2">
                {bride.father}
              </p>
              <p className="text-xs text-gray-500 my-1">&</p>
              <p className="text-sm text-gray-300 font-semibold mb-8">
                {bride.mother}
              </p>
              <p className="text-xs text-gray-400 tracking-wider">
                {bride.city}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QuoteCoupleSection;

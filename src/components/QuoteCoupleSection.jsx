import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

const QuoteCoupleSection = () => {
  const { quote, groom, bride } = weddingData;

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="bg-[#fdfbf7] text-[#1a1a1a] py-24 md:py-32 overflow-hidden relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/ornament-top.png')] bg-repeat-x opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Quote Section */}
        <motion.div 
          {...fadeIn}
          className="text-center mb-32 max-w-3xl mx-auto relative"
        >
          <span className="text-4xl text-gold-500/20 absolute -top-10 left-1/2 -translate-x-1/2 font-serif italic">"</span>
          <p className="text-lg md:text-xl font-playfair italic mb-6 text-gray-800 leading-relaxed px-4">
            {quote.text}
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-8 bg-gold-400" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-600 font-bold">
              {quote.source}
            </p>
            <div className="h-[1px] w-8 bg-gold-400" />
          </div>
        </motion.div>

        {/* Couple Profiles */}
        <div className="space-y-16 md:space-y-0">
          
          {/* Groom Profile */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative group"
            >
              <div className="absolute -inset-4 border border-gold-300/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/foto20.jpg" 
                  alt="Groom" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-great mb-6 text-[#946531]">
                {groom.fullName}
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold mb-8">
                {groom.childOrder} dari:
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-xl md:text-2xl font-playfair font-semibold">{groom.father}</p>
                <p className="text-sm text-gray-400 italic font-serif">&</p>
                <p className="text-xl md:text-2xl font-playfair font-semibold">{groom.mother}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-xs tracking-widest uppercase">{groom.city}</span>
              </div>
            </motion.div>
          </div>

          {/* Divider with Initials */}
          <div className="flex justify-center my-20">
            <div className="w-12 h-12 rounded-full border border-gold-300 flex items-center justify-center font-great text-xl text-gold-600 relative">
              <span className="absolute -left-20 w-16 h-[1px] bg-gold-200 hidden md:block" />
              &
              <span className="absolute -right-20 w-16 h-[1px] bg-gold-200 hidden md:block" />
            </div>
          </div>

          {/* Bride Profile */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative group"
            >
              <div className="absolute -inset-4 border border-gold-300/30 -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/foto19.jpg" 
                  alt="Bride" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center md:text-right"
            >
              <h3 className="text-4xl md:text-5xl font-great mb-6 text-[#946531]">
                {bride.fullName}
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-600 font-bold mb-8">
                {bride.childOrder} dari:
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-xl md:text-2xl font-playfair font-semibold">{bride.father}</p>
                <p className="text-sm text-gray-400 italic font-serif">&</p>
                <p className="text-xl md:text-2xl font-playfair font-semibold">{bride.mother}</p>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-xs tracking-widest uppercase">{bride.city}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteCoupleSection;

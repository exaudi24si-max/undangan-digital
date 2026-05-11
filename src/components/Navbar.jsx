import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#couple", label: "Mempelai" },
  { href: "#events", label: "Acara" },
  { href: "#rsvp", label: "RSVP" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`flex items-center justify-between transition-all duration-700 px-8 py-3 rounded-full ${
              scrolled 
              ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl" 
              : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNav("#hero")}
              className="font-great text-3xl text-white hover:text-gold-400 transition-colors duration-300"
            >
              R & Y
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 relative group ${
                    active === link.href ? "text-gold-400" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold-400 transition-all duration-300 ${
                      active === link.href ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-playfair italic text-white hover:text-gold-400 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

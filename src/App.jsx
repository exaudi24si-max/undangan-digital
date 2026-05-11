import { useState, useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import QuoteCoupleSection from "./components/QuoteCoupleSection";
import EventSection from "./components/EventSection";
import RSVPWishboxSection from "./components/RSVPWishboxSection";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const rafRef = useRef(null);

  useEffect(() => {
    // Get guest name from URL ?to=Name
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuestName(decodeURIComponent(to));
  }, []);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "auto";
      document.body.style.overscrollBehavior = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Splash Screen */}
      {!isOpened && (
        <SplashScreen guestName={guestName} onOpen={() => setIsOpened(true)} />
      )}

      {/* Main Content */}
      <main className={!isOpened ? "hidden" : "block"}>
        <Navbar />
        <HeroSection />
        <QuoteCoupleSection />
        <EventSection />
        <RSVPWishboxSection />
        <Footer />
      </main>

      <MusicPlayer isOpened={isOpened} />
    </div>
  );
}

export default App;

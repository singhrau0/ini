import Header from './components/Header';
import Robot from './components/Robot';
import SectionVideo from './components/SectionVideo';
import HeroSection from './components/HeroSection';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import ExperienceSection from './components/ExperienceSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useScrollAnimations } from './hooks/useScrollAnimations';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();
  
  // Initialize scroll animations
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Robot - z-index 9999 - MUST BE VISIBLE */}
      <Robot />

      {/* Header - z-index 100 */}
      <Header />

      {/* HERO SECTION - MAXIMUM BRIGHTNESS */}
      <section id="hero" className="relative min-h-screen" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/hero-background.MP4" 
          brightness={1.0}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <HeroSection />
          <div id="section-hero-end" className="h-[1px]"></div>
        </main>
      </section>

      {/* SECTION 3 - MAXIMUM BRIGHTNESS */}
      <section id="content-3" className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/what-inikola-background.MP4" 
          brightness={0.9}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <Section3 />
        </main>
      </section>

      {/* SECTION 4 - MAXIMUM BRIGHTNESS */}
      <section id="content-4" className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/why-inikola-background.MP4" 
          brightness={0.9}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <Section4 />
        </main>
      </section>

      {/* SECTION 5 - MAXIMUM BRIGHTNESS */}
      <section id="content-5" className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/house.MP4" 
          brightness={0.85}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <Section5 />
        </main>
      </section>

      {/* EXPERIENCE SECTION - MAXIMUM BRIGHTNESS */}
      <section id="content-experience" className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/house.MP4" 
          brightness={0.8}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <ExperienceSection />
        </main>
      </section>

      {/* FAQ SECTION - MAXIMUM BRIGHTNESS */}
      <section id="content-faq" className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/house.MP4" 
          brightness={0.85}
        />
        <main className="relative" style={{ zIndex: 10 }}>
          <FAQSection />
        </main>
      </section>

      {/* FOOTER - MAXIMUM BRIGHTNESS */}
      <footer className="relative" style={{ zIndex: 1 }}>
        <SectionVideo 
          videoSrc="/videos/footer.MP4" 
          brightness={0.7}
        />
        <div className="relative" style={{ zIndex: 10 }}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
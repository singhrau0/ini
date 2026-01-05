import { Link } from 'react-router-dom';
import SectionVideo from '../components/SectionVideo';
import ContactSection from '../components/ContactSection';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { VIDEOS } from '../config/videos';

const ContactPage = () => {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND - house.MP4 */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo videoSrc={VIDEOS.house} brightness={0.5} />
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
              style={{ zIndex: 100 }}>
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="INIKOLA Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </nav>

        <Link 
          to="/"
          className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
          style={{ fontWeight: 300 }}
        >
          Back to Home
        </Link>
      </header>

      {/* Contact Section */}
      <div className="relative pt-32" style={{ zIndex: 10 }}>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>INIKOLA © 2025. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
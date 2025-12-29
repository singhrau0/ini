import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white">
      <Link to="/" className="flex items-center gap-2 sm:gap-3">
        <img 
          src="/logo.png" 
          alt="INIKOLA Logo" 
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
        <span className="text-sm sm:text-base tracking-tight" style={{ fontWeight: 400 }}>
          INIKOLA
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/products" className="hover:text-white transition-colors">Products</Link>
        <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>

      <Link 
        to="/contact"
        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm hover:bg-white/20 transition"
        style={{ fontWeight: 300 }}
      >
        <span className="hidden sm:inline">Get Started</span>
        <span className="sm:hidden">Start</span>
      </Link>
    </header>
  );
};

export default Header;
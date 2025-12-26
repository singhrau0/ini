import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white">
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
        <Link to="/products" className="hover:text-white transition-colors">Products</Link>
        <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
        <a href="/#content-experience" className="hover:text-white transition-colors">Contact</a>
      </nav>

      <Link 
        to="/#content-experience"
        className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
        style={{ fontWeight: 300 }}
      >
        Get Started
      </Link>
    </header>
  );
};

export default Header;
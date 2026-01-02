import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
        style={{ zIndex: 100 }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <img 
            src="/logo.png" 
            alt="INIKOLA Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-sm sm:text-base tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link 
          to="/contact"
          className="hidden md:inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
          style={{ fontWeight: 300 }}
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            // Close Icon (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          style={{ top: '60px' }}
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-64 bg-black/95 backdrop-blur-lg border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            to="/" 
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/products" 
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link 
            to="/careers" 
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMenu}
          >
            Careers
          </Link>
          <Link 
            to="/contact" 
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={closeMenu}
          >
            Contact
          </Link>

          {/* Mobile CTA Button */}
          <Link 
            to="/contact"
            className="mt-4 px-6 py-3 rounded-full bg-white/10 text-white text-center hover:bg-white/20 transition"
            style={{ fontWeight: 300 }}
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
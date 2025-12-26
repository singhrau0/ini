const HeroSection = () => {
  return (
    <section id="content-1" className="min-h-screen flex items-center">
      <div className="px-6 md:px-16 md:w-1/2">
        <p 
          className="body-text text-white/70 mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '16px'
          }}
        >
          Meet INIKOLA
        </p>
        
        <h1 
          className="hero-heading"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '72px',
            letterSpacing: '-2px',
            lineHeight: 1.1
          }}
        >
          Your Home,<br />Reimagined
        </h1>
        
        <p 
          className="body-text max-w-xl mt-8"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '20px',
            lineHeight: 1.7,
            color: '#B8B8B8'
          }}
        >
          An invisible AI that learns your lifestyle and automates your home.
        </p>
        
        <div className="mt-12 text-white/60">
          ↓ Scroll to explore
        </div>
      </div>
      
      {/* Right side reserved for robot */}
      <div className="hidden md:block md:w-1/2"></div>
    </section>
  );
};

export default HeroSection;
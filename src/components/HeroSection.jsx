const HeroSection = () => {
  return (
    <section id="content-1" className="min-h-screen flex items-center">
      <div className="px-4 sm:px-6 md:px-16 w-full md:w-1/2">
        {/* HIGHLIGHTED TAG - "Meet INIKOLA" */}
        <div className="inline-block mb-4 sm:mb-6">
          <p 
            className="body-text px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm sm:text-base"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 400,
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
              animation: 'tagGlow 3s ease-in-out infinite'
            }}
          >
            ✨ Meet INIKOLA
          </p>
        </div>
        
        {/* ANIMATED HEADING - "Your Home, Reimagined" */}
        <h1 
          className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8"
          style={{
            fontFamily: '"Space Grotesk", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 600,
            letterSpacing: '-3px',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 4s ease-in-out infinite, fadeInUp 1s ease-out'
          }}
        >
          Your Home,<br />Reimagined
        </h1>
        
        {/* BRIGHTER DESCRIPTION with gradient color */}
        <p 
          className="body-text max-w-xl mt-6 sm:mt-8 text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            lineHeight: 1.7,
            background: 'linear-gradient(135deg, #e0e0e0 0%, #b8b8d8 50%, #d0d0ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          An invisible AI that learns your lifestyle and automates your home.
        </p>
        
        <div className="mt-8 sm:mt-12 text-white/70 text-sm sm:text-base animate-bounce">
          ↓ Scroll to explore
        </div>

        {/* Animations */}
        <style>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes tagGlow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
            }
            50% { 
              box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.4);
            }
          }
        `}</style>
      </div>
      
      {/* Right side reserved for robot */}
      <div className="hidden md:block md:w-1/2"></div>
    </section>
  );
};

export default HeroSection;
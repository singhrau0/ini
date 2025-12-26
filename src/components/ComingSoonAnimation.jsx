const ComingSoonAnimation = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] rounded-3xl overflow-hidden flex items-center justify-center p-8">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      {/* Coming Soon Text - FIXED SIZE */}
      <div className="relative z-10 text-center w-full px-6">
        <div 
          className="text-5xl md:text-6xl font-light tracking-widest text-white mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            letterSpacing: '0.2em',
            animation: 'fadeInOut 3s ease-in-out infinite',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(139, 127, 213, 0.3)'
          }}
        >
          COMING
        </div>
        <div 
          className="text-5xl md:text-6xl font-light tracking-widest text-white"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            letterSpacing: '0.2em',
            animation: 'fadeInOut 3s ease-in-out infinite',
            animationDelay: '0.5s',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)'
          }}
        >
          SOON
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="loading-dot"></div>
          <div className="loading-dot" style={{ animationDelay: '0.2s' }}></div>
          <div className="loading-dot" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-white/50 mt-6 text-sm">New innovation in development</p>
      </div>
      
      {/* Glow effect at bottom */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 127, 213, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      
      {/* Side glows */}
      <div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pulse 5s ease-in-out infinite',
          animationDelay: '1s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-32"
        style={{
          background: 'radial-gradient(circle, rgba(139, 127, 213, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pulse 5s ease-in-out infinite',
          animationDelay: '2s'
        }}
      ></div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 127, 213, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .particle-1 {
          left: 10%;
          top: 20%;
          animation-delay: 0s;
        }
        
        .particle-2 {
          left: 80%;
          top: 30%;
          animation-delay: 1s;
        }
        
        .particle-3 {
          left: 20%;
          top: 70%;
          animation-delay: 2s;
        }
        
        .particle-4 {
          left: 70%;
          top: 60%;
          animation-delay: 3s;
        }
        
        .particle-5 {
          left: 50%;
          top: 40%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-60px) translateX(-10px);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(-30px);
            opacity: 0.8;
          }
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          background: rgba(139, 127, 213, 0.8);
          border-radius: 50%;
          animation: dotPulse 1.5s ease-in-out infinite;
        }
        
        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoonAnimation;
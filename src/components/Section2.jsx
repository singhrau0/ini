import { useState } from 'react';

const Section2 = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <section id="content-2" className="content-section min-h-screen grid md:grid-cols-2 items-center px-6 md:px-10">
      <div>
        <h2 
          className="section-heading"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 400,
            fontSize: '48px',
            letterSpacing: '-1px'
          }}
        >
          The Invisible Intelligence
        </h2>
        
        <p 
          className="body-text mt-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '20px',
            lineHeight: 1.7,
            color: '#B8B8B8'
          }}
        >
          INIKOLA observes, learns, and anticipates. Your lights adjust before you reach for the switch.
        </p>
      </div>
      
      {/* Interactive Light Bulb */}
      <div className="flex items-center justify-center h-[70vh] relative">
        <div 
          className="relative cursor-pointer"
          onMouseEnter={() => setIsLightOn(true)}
          onMouseLeave={() => setIsLightOn(false)}
        >
          {/* Glow effect when light is on */}
          {isLightOn && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 220, 100, 0.6) 0%, rgba(255, 180, 50, 0.3) 40%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(2)',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
          )}
          
          {/* Light bulb SVG */}
          <svg 
            width="120" 
            height="180" 
            viewBox="0 0 120 180" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: isLightOn ? 'drop-shadow(0 0 20px rgba(255, 220, 100, 0.8))' : 'none',
              transition: 'filter 0.3s ease'
            }}
          >
            {/* Bulb */}
            <ellipse 
              cx="60" 
              cy="60" 
              rx="40" 
              ry="50" 
              fill={isLightOn ? '#FFE680' : '#4A4A4A'}
              style={{ transition: 'fill 0.3s ease' }}
            />
            
            {/* Bulb base */}
            <rect 
              x="50" 
              y="105" 
              width="20" 
              height="30" 
              fill={isLightOn ? '#D4D4D4' : '#3A3A3A'}
              style={{ transition: 'fill 0.3s ease' }}
            />
            
            {/* Light rays when on */}
            {isLightOn && (
              <>
                <line x1="60" y1="10" x2="60" y2="0" stroke="#FFD700" strokeWidth="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="90" y1="20" x2="100" y2="10" stroke="#FFD700" strokeWidth="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                </line>
                <line x1="30" y1="20" x2="20" y2="10" stroke="#FFD700" strokeWidth="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                </line>
                <line x1="105" y1="60" x2="115" y2="60" stroke="#FFD700" strokeWidth="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                </line>
                <line x1="15" y1="60" x2="5" y2="60" stroke="#FFD700" strokeWidth="3" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
                </line>
              </>
            )}
          </svg>
          
          {/* Hover instruction */}
          <p className="text-center mt-4 text-white/50 text-sm">
            {isLightOn ? 'Light is on!' : 'Hover to turn on'}
          </p>
        </div>
        
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(2); }
            50% { opacity: 1; transform: scale(2.2); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Section2;
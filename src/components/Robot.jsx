import { useState, useEffect } from 'react';

const Robot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading at 30% of viewport, completely gone at 70%
      const fadeStart = windowHeight * 0.3;
      const fadeEnd = windowHeight * 0.7;
      
      if (scrolled <= fadeStart) {
        setOpacity(1);
      } else if (scrolled >= fadeEnd) {
        setOpacity(0);
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const fadeRange = fadeEnd - fadeStart;
        const fadeProgress = scrolled - fadeStart;
        const newOpacity = 1 - (fadeProgress / fadeRange);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render at all if opacity is 0
  if (opacity === 0) return null;

  return (
    <div 
      className="fixed right-0 top-0 w-[48vw] h-screen hidden md:flex items-center justify-center pt-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        zIndex: 40,
        position: 'fixed',
        pointerEvents: 'none',
        opacity: opacity,
        transition: 'opacity 0.3s ease'
      }}
    >
      {/* Hover glow effects */}
      {isHovered && (
        <>
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(139,127,213,0.5) 0%, rgba(139,127,213,0.25) 40%, transparent 65%)',
              filter: 'blur(35px)',
              animation: 'robotPulse 1.5s ease-in-out infinite alternate',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 60% 40%, rgba(0,217,255,0.35) 0%, rgba(0,217,255,0.18) 30%, transparent 55%)',
              filter: 'blur(25px)',
              animation: 'robotLight 1.5s ease-in-out infinite alternate',
              animationDelay: '0.3s',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        </>
      )}
      
      {/* Robot iframe - fills entire height */}
      <div style={{ width: '100%', height: '110%', pointerEvents: 'auto' }}>
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-OJXP9Lkck6bthzYkYOuuk5o9/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            position: 'relative',
            zIndex: 2,
            filter: isHovered ? 'brightness(1.3)' : 'brightness(1.0)',
            transition: 'filter 0.3s ease',
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translateZ(0) scale(1.05)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
          title="3D Robot"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      <style>{`
        @keyframes robotPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes robotLight {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Robot;
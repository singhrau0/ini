import { useEffect, useState } from 'react';

const BackgroundManager = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    // Get hero section height
    const updateHeroHeight = () => {
      const heroElement = document.getElementById('content-1');
      if (heroElement) {
        setHeroHeight(heroElement.offsetHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeroHeight);
    };
  }, []);

  // Hide background when scrolled past hero section
  const isInHero = scrollY < heroHeight;
  const opacity = isInHero ? 1 : 0;

  return (
    <>
      {/* Base black background - always visible */}
      <div 
        className="fixed inset-0 bg-black"
        style={{ zIndex: 0 }}
      />

      {/* Animated gradient backgrounds - only in hero */}
      <div 
        className="fixed inset-0 transition-opacity duration-500"
        style={{ 
          zIndex: 1,
          opacity: opacity,
          pointerEvents: 'none'
        }}
      >
        {/* Animated dots pattern */}
        <div 
          className="absolute inset-0 animate-move-dots"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(139, 127, 213, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, rgba(0, 217, 255, 0.12) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, rgba(139, 127, 213, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 60% 40%, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 60px 60px, 45px 45px, 55px 55px',
            backgroundPosition: '0 0, 25px 25px, 10px 10px, 35px 35px'
          }}
        />

        {/* Left gradient - Purple */}
        <div 
          className="absolute left-0 top-0 w-[40vw] h-screen"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(139, 127, 213, 0.15) 0%, transparent 60%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Right gradient - Cyan (behind robot) */}
        <div 
          className="absolute right-0 top-0 w-[50vw] h-screen"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.12) 0%, transparent 60%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Center gradient - Subtle */}
        <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh]"
          style={{
            background: 'radial-gradient(circle, rgba(100, 100, 150, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />

        {/* Animated gradient orbs */}
        <div 
          className="absolute animate-float-slow"
          style={{
            left: '20%',
            top: '30%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 127, 213, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />

        <div 
          className="absolute animate-float-slower"
          style={{
            right: '20%',
            top: '40%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />
      </div>

      <style>{`
        @keyframes move-dots {
          0% {
            background-position: 0 0, 25px 25px, 10px 10px, 35px 35px;
          }
          100% {
            background-position: 50px 50px, 75px 75px, 60px 60px, 85px 85px;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }

        .animate-move-dots {
          animation: move-dots 20s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default BackgroundManager;
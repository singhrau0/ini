import { useEffect, useRef, useState } from 'react';

const SectionVideo = ({ videoSrc, brightness = 0.5, className = '' }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay blocked, will retry on user interaction
        const playOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('scroll', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('scroll', playOnInteraction, { once: true });
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isLoaded) {
            video.play().catch(() => {});
          } else if (!entry.isIntersecting) {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div 
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: `brightness(${brightness}) contrast(1.2) saturate(1.1)`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default SectionVideo;
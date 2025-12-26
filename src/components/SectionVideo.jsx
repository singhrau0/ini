import { useEffect, useRef, useState } from 'react';

const SectionVideo = ({ videoSrc, brightness = 1.0, className = '' }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🎬 Loading video:', videoSrc);

    // Intersection Observer to play/pause video based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            video.play().catch(err => {
              console.log('Video autoplay prevented:', err);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = video.closest('section') || video.closest('footer');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [videoSrc]);

  return (
    <div className={`absolute top-0 left-0 w-full h-full overflow-hidden ${className}`}
         style={{ zIndex: 0 }}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: `brightness(${brightness}) contrast(1.2) saturate(1.1)`,
          opacity: 1,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* VERY LIGHT gradient for text readability only */}
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
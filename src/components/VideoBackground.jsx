const VideoBackground = () => {
  return (
    <>
      {/* Video Background - Shows on entire page */}
      <div 
        className="fixed inset-0"
        style={{ 
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        {/* Optimized Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.6)',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          // Performance optimization
          onLoadedData={(e) => {
            e.target.playbackRate = 1.0;
          }}
        >
          <source src="/uploads/house.MP4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
          }}
        />

        {/* Subtle color overlays */}
        <div 
          className="absolute left-0 top-0 w-[40vw] h-full"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(139, 127, 213, 0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen'
          }}
        />

        <div 
          className="absolute right-0 top-0 w-[50vw] h-full"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 60%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </>
  );
};

export default VideoBackground;
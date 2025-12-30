import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import SectionVideo from '../components/SectionVideo';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const CareersPage = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  useSmoothScroll();

  const coreTeam = [
    {
      id: 1,
      name: 'Aman Kasaudhan',
      role: 'Founder & CEO',
      expertise: 'AI, IoT & Home Automation Systems',
      image: '/team/founder.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Bilal Ahmed',
      role: 'Product Manager',
      expertise: 'Cloud Infrastructure & Scalable Systems',
      image: '/team/bilal.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Vushagoni Rohith',
      role: 'Product Manager',
      expertise: 'Intelligent Automation & Predictive Systems',
      image: '/team/rohith.png',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Vibek Kumar Rana',
      role: 'Product Developer',
      expertise: 'Posting Expert',
      image: '/team/vibek.png',
      hasImage: true,
      linkedin: 'https://www.linkedin.com/in/vibek-kumar-rana-507463320/'
    },
    {
      id: 5,
      name: 'Mehnaaz Shaik',
      role: 'Backend Engineer',
      expertise: 'Posting Expert',
      image: '/team/mehnaaz.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 6,
      name: 'Trisha Kollabattula',
      role: 'Automation Architect',
      expertise: 'Posting Expert',
      image: '/team/trisha.jpg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 7,
      name: 'Vishakha Pandole',
      role: 'ML Engineer',
      expertise: 'Machine Learning & AI Systems',
      image: '/team/vishakha.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 8,
      name: 'Shiwang',
      role: 'AI Engineer',
      expertise: 'Artificial Intelligence & Neural Networks',
      image: null,
      hasImage: false,
      linkedin: '#'
    },
    {
      id: 9,
      name: 'Rohan Roy',
      role: 'Backend Engineer',
      expertise: 'Server Architecture & APIs',
      image: null,
      hasImage: false,
      linkedin: '#'
    },
    {
      id: 10,
      name: 'Afsheen Sultana',
      role: 'Full Stack Developer',
      expertise: 'Web Applications & User Interfaces',
      image: '/team/afsheen.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 11,
      name: 'Poorna Chand',
      role: 'Embedded Systems Engineer',
      expertise: 'Hardware Integration & IoT Devices',
      image: null,
      hasImage: false,
      linkedin: '#'
    },
    {
      id: 12,
      name: 'Divya Sri',
      role: 'Deployment Engineer',
      expertise: 'CI/CD & Production Systems',
      image: '/team/divya.jpeg',
      hasImage: true,
      linkedin: '#'
    },
    {
      id: 13,
      name: 'Vinay Nidamanuri',
      role: 'IoT Engineer',
      expertise: 'Smart Devices & Connectivity',
      image: null,
      hasImage: false,
      linkedin: '#'
    },
    {
      id: 14,
      name: 'Sai Vishal',
      role: 'ML Engineer',
      expertise: 'Machine Learning & Data Science',
      image: null,
      hasImage: false,
      linkedin: '#'
    }
  ];

  const techStack = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Python', 'Flask'],
    'AI/ML': ['PyTorch', 'TensorFlow', 'Edge Computing'],
    'Cloud': ['AWS', 'Lambda', 'DynamoDB'],
    'IoT': ['MQTT', 'WebSocket', 'Edge Devices'],
    'Infrastructure': ['Docker', 'Kubernetes', 'CI/CD']
  };

  const values = [
    {
      title: 'Build for Reliability',
      description: 'Systems that work consistently, every single day'
    },
    {
      title: 'Respect User Privacy',
      description: 'Data security and privacy are non-negotiable'
    },
    {
      title: 'Design with Intent',
      description: 'Every feature serves a clear purpose'
    },
    {
      title: 'Ship What We Trust',
      description: 'Only deploy what we\'d use in our own homes'
    }
  ];

  // FASTER Auto-scroll effect (3x speed)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    let scrollInterval;
    
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 2; // 3x faster!
        }
      }, 10); // 3x faster interval!
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling]);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo 
          videoSrc="/videos/careers.MP4" 
          brightness={0.3}
        />
      </div>
      
      {/* Header - RESPONSIVE */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
              style={{ zIndex: 100 }}>
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img 
            src="/logo.png" 
            alt="INIKOLA Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-sm sm:text-base tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="text-white">Careers</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <Link 
          to="/"
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm hover:bg-white/20 transition"
          style={{ fontWeight: 300 }}
        >
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </header>

      {/* Hero Section - RESPONSIVE */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm tracking-wider">JOIN THE TEAM</p>
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            Build the Future of<br />Intelligent Living
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              lineHeight: 1.7
            }}
          >
            At INIKOLA, we design AI-powered home automation systems that make living spaces smarter, safer, and more efficient. Join us in building technology that seamlessly blends into everyday life.
          </p>
        </div>
      </section>

      {/* Core Team Section - FASTER AUTO-SCROLLING CAROUSEL + RESPONSIVE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Meet the Core Team
          </h2>
          <p className="text-center text-sm sm:text-base text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            INIKOLA is built by a core team of engineers and innovators with deep expertise in home automation, AI, and intelligent systems.
          </p>
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="overflow-x-auto scrollbar-hide cursor-pointer"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-4 sm:gap-6 pb-4" style={{ width: 'max-content' }}>
              {coreTeam.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 flex-shrink-0"
                  style={{
                    width: '280px',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={() => setHoveredTeam(member.id)}
                  onMouseLeave={() => setHoveredTeam(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    {member.hasImage ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white/10"
                      />
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 
                      className="text-lg sm:text-xl font-semibold mb-2"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
                      }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm mb-2">{member.role}</p>
                    <p 
                      className="text-white/80 text-xs sm:text-sm mb-4"
                      style={{
                        opacity: hoveredTeam === member.id ? 1 : 0.7,
                        transition: 'opacity 0.3s'
                      }}
                    >
                      {member.expertise}
                    </p>
                    
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <p className="text-center text-white/40 text-xs sm:text-sm mt-4 sm:mt-6">
            ← Auto-scrolling • Hover to pause • Drag to explore →
          </p>
        </div>
      </section>

      {/* Technology Stack Section - RESPONSIVE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Our Technology Stack
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div 
                key={category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white/90">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section - RESPONSIVE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Our Values
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Send Resume CTA Section - RESPONSIVE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Open to work with us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 px-2">
            If you're passionate about home automation, AI, and IoT, and believe in building reliable systems that work in the real world, we want to hear from you. We value curiosity, ownership, and real-world engineering.
          </p>
          <a 
            href="mailto:careers@inikola.com"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors text-base sm:text-lg"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 500
            }}
          >
            Send Resume
          </a>
        </div>
      </section>

      {/* Footer - RESPONSIVE */}
      <footer className="relative border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 md:px-4 sm:px-6 md:px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto text-center text-white/60 text-xs sm:text-sm">
          <p>INIKOLA © 2025. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CareersPage;
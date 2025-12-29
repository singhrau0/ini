import { Link } from 'react-router-dom';
import SectionVideo from '../components/SectionVideo';

const AboutPage = () => {
  const technologies = [
    {
      name: 'Motion Sensors',
      description: 'PIR sensors detect movement and occupancy for intelligent automation',
      icon: '🔍'
    },
    {
      name: 'Smart Switches',
      description: 'Wi-Fi enabled switches for remote control and scheduling',
      icon: '💡'
    },
    {
      name: 'Climate Control',
      description: 'Temperature and humidity sensors for optimal comfort',
      icon: '🌡️'
    },
    {
      name: 'Voice Control',
      description: 'Alexa, Google Assistant integration for hands-free control',
      icon: '🎤'
    },
    {
      name: 'Security Cameras',
      description: 'AI-powered cameras with facial recognition and alerts',
      icon: '📹'
    },
    {
      name: 'Door/Window Sensors',
      description: 'Magnetic sensors for security and automation triggers',
      icon: '🚪'
    }
  ];

  const features = [
    {
      title: 'Learn Your Patterns',
      description: 'AI algorithms observe and adapt to your daily routines',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Predict Your Needs',
      description: 'Anticipate actions before you even think about them',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Save Energy',
      description: 'Optimize power consumption with intelligent automation',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Stay Secure',
      description: 'Multi-layer security with real-time monitoring',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo 
          videoSrc="/videos/house.MP4" 
          brightness={0.6}
        />
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
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
          <Link to="/about" className="text-white">About</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
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

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm tracking-wider">ABOUT INIKOLA</p>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            Building the Future of<br />Intelligent Living
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300
            }}
          >
            INIKOLA is revolutionizing home automation with AI-powered systems that learn, adapt, and anticipate your needs.
          </p>
        </div>
      </section>

      {/* Our Motive Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Our Motive
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              At INIKOLA, we believe that technology should be <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">invisible, intelligent, and intuitive</span>. Our mission is to create home automation systems that don't just respond to commands—they anticipate needs, learn preferences, and seamlessly integrate into your lifestyle.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              We're building a future where your home understands you. Where lights adjust before you reach for the switch. Where climate control adapts to your comfort. Where security is proactive, not reactive. This is the INIKOLA vision: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">intelligent living spaces powered by AI</span>.
            </p>
          </div>
        </div>
      </section>

      {/* What is Home Automation Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            What is Home Automation?
          </h2>
          
          <div className="space-y-6 sm:space-y-8 mb-12">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Home automation is the integration of technology and smart devices to control and monitor various systems in your home—lighting, climate, security, entertainment, and more. But at INIKOLA, we've taken it further.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Sensors Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            The Technology Behind INIKOLA
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            Our ecosystem consists of intelligent sensors, controllers, and AI algorithms that work together seamlessly.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{tech.name}</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholders Section - For Sensor Images */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            See the Devices
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Placeholder boxes for actual sensor images */}
            {[
              { title: 'Smart Hub', desc: 'Central control unit' },
              { title: 'Motion Sensor', desc: 'PIR detection technology' },
              { title: 'Smart Switch', desc: 'Wi-Fi enabled control' },
              { title: 'Camera System', desc: 'AI-powered monitoring' },
              { title: 'Climate Sensor', desc: 'Temperature & humidity' },
              { title: 'Door Sensor', desc: 'Magnetic contact detection' }
            ].map((device, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 aspect-square flex flex-col items-center justify-center text-center"
              >
                <div className="w-full h-full bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/40 text-sm">
                    [Add {device.title} Image]
                  </p>
                </div>
                <h3 className="text-lg font-semibold mb-2">{device.title}</h3>
                <p className="text-sm text-white/60">{device.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/50 text-sm mt-8">
            📸 Replace these placeholders with actual product images
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Ready to Transform Your Home?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
            Experience the future of intelligent living with INIKOLA.
          </p>
          <Link 
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors text-base sm:text-lg"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 500
            }}
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto text-center text-white/60 text-xs sm:text-sm">
          <p>INIKOLA © 2025. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
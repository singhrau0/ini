import { Link } from 'react-router-dom';
import SectionVideo from '../components/SectionVideo';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { VIDEOS } from '../config/videos';

const AboutPage = () => {
  useSmoothScroll();
  const smartDevices = [
    {
      name: 'Smart Hub',
      description: 'Central control unit that coordinates all devices',
      image: '/sensors/Futuristic smart hub in blue light.png'
    },
    {
      name: 'Motion Sensors',
      description: 'Detect movement and occupancy for intelligent automation',
      image: '/sensors/Modern motion sensor on dark surface.png'
    },
    {
      name: 'Smart Switches',
      description: 'Seamless control of lighting and appliances',
      image: '/sensors/Sleek smart switch with glowing icons.png'
    },
    {
      name: 'Climate Sensors',
      description: 'Monitor temperature and humidity for optimal comfort',
      image: '/sensors/Sleek climate sensor with digital display.png'
    },
    {
      name: 'Security Cameras',
      description: 'AI-powered monitoring with real-time alerts',
      image: '/sensors/Sleek security camera close-up.png'
    },
    {
      name: 'Contact Sensors',
      description: 'Door and window sensors for security',
      image: '/sensors/White contact sensor close-up on dark surface.png'
    }
  ];

  const keyFeatures = [
    {
      title: 'Learn Behavioral Patterns',
      description: 'AI algorithms observe daily routines and adapt automation logic accordingly',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Anticipate Needs',
      description: 'The system predicts actions based on usage history and environmental data',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Optimize Energy Usage',
      description: 'Intelligent control reduces unnecessary power consumption without compromising comfort',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enhance Security Proactively',
      description: 'Multi-layer security systems detect, analyze, and respond to potential risks in real time',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo videoSrc={VIDEOS.careers} brightness={0.5} />
      </div>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
        style={{ zIndex: 100 }}
      >
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="INIKOLA Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          <span className="text-sm sm:text-base tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link to="/careers" className="hover:text-white transition-colors">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <Link
          to="/"
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm hover:bg-white/20 transition"
          style={{ fontWeight: 300 }}
        >
          <span className="hidden sm:inline">Back To Home</span>
          <span className="sm:hidden">Back To Home</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            We Build Spaces That <br /> Respond Before You Ask
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300
            }}
          >
            INIKOLA is a technology-driven home automation company focused on creating intelligent living environments
            through AI-powered automation systems.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              We design solutions that go beyond basic device control—systems that understand behavior, adapt in real
              time, and continuously evolve to enhance comfort, efficiency, and security.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Our approach to home automation is rooted in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                intelligence, simplicity, and seamless integration
              </span>
              . At INIKOLA, technology works quietly in the background, transforming everyday spaces into responsive,
              intuitive environments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
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
            Our Purpose
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              At INIKOLA, we believe technology should feel natural, not intrusive. Our purpose is to eliminate
              complexity from modern living by building automation systems that blend effortlessly into daily life.
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Traditional automation reacts to commands. INIKOLA systems go further—learning patterns, anticipating
              needs, and making intelligent decisions automatically. Our goal is to enable homes that adjust lighting
              before you enter a room, optimize climate based on your comfort preferences, and proactively protect your
              space without constant manual input.
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-white">
                "We are building intelligent homes that think ahead—homes that work for you, not the other way around."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
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
            Our Vision
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Our vision is to redefine how people interact with their living spaces.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              We envision a future where homes are not just connected, but{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                intelligent
              </span>
              —where automation is predictive rather than reactive, and where AI continuously improves how spaces
              respond to human behavior. From individual residences to large residential communities, INIKOLA aims to set
              a new standard for intelligent infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* What Home Automation Means Section */}
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
            What Home Automation Means at INIKOLA
          </h2>

          <p className="text-base sm:text-lg text-white/80 text-center mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Home automation is the integration of smart technologies that control and monitor systems such as lighting,
            climate, security, and energy usage. At INIKOLA, automation is powered by intelligence.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-base sm:text-lg text-white/60 italic">This approach transforms automation from a feature into an experience.</p>
          </div>
        </div>
      </section>

      {/* The Technology Section */}
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
            INIKOLA's ecosystem is built on a tightly integrated combination of hardware, software, and artificial intelligence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Intelligent Sensors</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Motion, occupancy, temperature, humidity, and contact sensors collect real-time data from the environment,
                forming the foundation for intelligent decision-making.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Smart Control Devices</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Smart switches and controllers enable seamless control of lighting, appliances, and connected systems
                through both automated logic and user interfaces.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">AI & Automation Engine</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                The intelligence layer processes sensor data, learns user preferences, and executes automation workflows
                with predictive behavior modeling.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Voice & Interface Integration</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                INIKOLA supports voice-based control and intuitive dashboards, allowing users to interact with their home naturally and effortlessly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Security & Monitoring</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                AI-powered cameras, door and window sensors, and real-time alerts ensure continuous monitoring and proactive protection.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">INIKOLA Smart Hub</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                The central brain that coordinates communication between devices, executes automation rules, and ensures secure cloud connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Devices Ecosystem */}
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
            INIKOLA Smart Devices Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-white/80 text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            Each device is designed for reliability, scalability, and seamless integration into the larger automation framework.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {smartDevices.map((device, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center"
              >
                <div className="relative overflow-hidden rounded-xl mb-5 group">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">{device.name}</h3>
                <p className="text-sm sm:text-base text-white/60">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability Section */}
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
            Designed for Scalability and the Future
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              INIKOLA systems are built with scalability in mind—from single homes to large residential projects and enterprise-grade deployments. Our architecture supports future expansions, third-party integrations, and evolving AI capabilities without disrupting existing setups.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Security, privacy, and reliability are fundamental to our design philosophy. All systems are developed with robust data protection and encrypted communication to ensure user trust at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Transforming Spaces into Intelligent Experiences
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            INIKOLA is more than a home automation provider. We are building intelligent environments that adapt, learn, and evolve alongside the people who live in them.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-12">
            By combining AI, IoT, and thoughtful design, we aim to create living spaces that feel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              intuitive, efficient, and effortlessly intelligent
            </span>
            .
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
            Ready to Experience Intelligent Living?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
            Discover how INIKOLA can transform your home into a smarter, more responsive space.
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
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

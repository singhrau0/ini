import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionVideo from '../components/SectionVideo';

const CareersPage = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const openings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      description: 'Build dashboards and device control interfaces that power home automation systems. Design cloud services that connect thousands of smart devices in real-time. Work on production systems deployed in homes and buildings.'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Edge Computing', 'MQTT'],
      description: 'Develop intelligent automation systems that learn from user behavior. Build predictive models for climate control, lighting optimization, and adaptive smart environments. Deploy ML models to edge devices in real homes.'
    },
    {
      id: 3,
      title: 'Product Designer (UI/UX)',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '2-3 years',
      skills: ['Figma', 'User Research', 'Interaction Design', 'Design Systems'],
      description: 'Design simple, reliable interfaces for home automation control. Create real-time interaction patterns that feel natural and responsive. Build design systems that work across mobile, web, and voice interfaces.'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'MQTT', 'IoT Protocols'],
      description: 'Build secure, scalable infrastructure that connects thousands of smart devices. Ensure high reliability and low latency for real-time home automation. Design systems that maintain uptime in production environments.'
    }
  ];

  const benefits = [
    {
      icon: '🏗️',
      title: 'Build Real Systems',
      description: 'Work on home automation deployed in real homes and buildings, not prototypes'
    },
    {
      icon: '🧠',
      title: 'Cross-Domain Learning',
      description: 'Master AI, embedded systems, cloud infrastructure, and IoT in one place'
    },
    {
      icon: '🎯',
      title: 'Ownership & Impact',
      description: 'Ship features that millions will use daily in their living spaces'
    },
    {
      icon: '🔬',
      title: 'Engineering-First Culture',
      description: 'Reliability over hype. Real-world testing. Long-term system thinking.'
    },
    {
      icon: '🌍',
      title: 'Remote-First',
      description: 'Work from anywhere or our Hyderabad office. Flexible hours, trust-based culture'
    },
    {
      icon: '📈',
      title: 'Career Growth',
      description: 'Grow into system architects, product owners, and technical leaders'
    }
  ];

  const coreTeam = [
    {
      id: 1,
      name: 'Founder Name',
      role: 'Founder & CEO',
      expertise: 'AI, IoT & Home Automation Systems',
      image: '/team/founder.jpg', // Replace with actual image
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Tech Lead Name',
      role: 'Chief Technology Officer',
      expertise: 'Cloud Infrastructure & Scalable Systems',
      image: '/team/cto.jpg', // Replace with actual image
      linkedin: '#'
    },
    {
      id: 3,
      name: 'AI Lead Name',
      role: 'Head of AI/ML',
      expertise: 'Intelligent Automation & Predictive Systems',
      image: '/team/ai-lead.jpg', // Replace with actual image
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

  const howWeBuild = [
    'Engineering-first culture focused on reliability and real-world performance',
    'Extensive testing in actual homes before production deployment',
    'Long-term system thinking over short-term feature churn',
    'Privacy and security built into every layer of the stack'
  ];

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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND - ULTRA BRIGHT */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo 
          videoSrc="/videos/careers.MP4" 
          brightness={0.3}
        />
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-black/40 border-b border-white/10 text-white"
              style={{ zIndex: 100 }}>
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="INIKOLA Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="tracking-tight" style={{ fontWeight: 400 }}>
            INIKOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <a href="/#content-3" className="hover:text-white transition-colors">Solutions</a>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="/careers" className="text-white">Careers</Link>
          <a href="/#content-experience" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <Link 
          to="/"
          className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
          style={{ fontWeight: 300 }}
        >
          Back to Home
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-4 text-sm tracking-wider">JOIN THE TEAM</p>
          <h1 
            className="text-6xl mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            Build the Future of<br />Intelligent Living
          </h1>
          <p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
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

      {/* Benefits Section */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Why Join INIKOLA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl mb-4 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Meet the Core Team
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            INIKOLA is built by a core team of engineers and innovators with deep expertise in home automation, AI, and intelligent systems.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <div 
                key={member.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredTeam(member.id)}
                onMouseLeave={() => setHoveredTeam(null)}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-2">{member.role}</p>
                  <p 
                    className="text-white/80 text-sm mb-4"
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
      </section>

      {/* How We Build */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            How We Build at INIKOLA
          </h2>
          
          <div className="space-y-4">
            {howWeBuild.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0" />
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Our Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div 
                key={category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-white/90">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
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

      {/* Values */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Open Positions
          </h2>
          
          <div className="space-y-6">
            {openings.map((job) => (
              <div 
                key={job.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 
                      className="text-2xl mb-3"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <span>📍</span> {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span>💼</span> {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <span>⏱️</span> {job.experience}
                      </span>
                    </div>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={`mailto:careers@inikola.com?subject=Application for ${job.title}`}
                    className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <h3 
            className="text-3xl mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Career Growth
          </h3>
          <p className="text-xl text-white/70">
            At INIKOLA, engineers grow into system architects, product owners, and technical leaders as our platforms scale.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <h2 
            className="text-4xl mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-1px'
            }}
          >
            Don't see a perfect fit?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            If you're passionate about home automation, AI, and IoT, and believe in building reliable systems that work in the real world, we want to hear from you. We value curiosity, ownership, and real-world engineering.
          </p>
          <a 
            href="mailto:careers@inikola.com"
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors text-lg"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 500
            }}
          >
            Send Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="relative" style={{ zIndex: 10 }} border-t border-white/10 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>INIKOLA © 2025. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CareersPage;
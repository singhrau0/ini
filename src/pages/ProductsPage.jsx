import { Link } from 'react-router-dom';
import ComingSoonAnimation from '../components/ComingSoonAnimation';
import SectionVideo from '../components/SectionVideo';

const ProductsPage = () => {
  const products = [
    {
      id: 'evalsea',
      name: 'EvalSea',
      tagline: 'Evaluation & Verification Platform',
      description: 'EvalSea automates evaluation workflows and generates structured reports, making assessment processes faster and more reliable.',
      status: 'Live / Beta',
      features: [
        'Auto-evaluation & verification loops',
        'Report generation (PDF/Doc)',
        'Pluggable scoring criteria',
        'Dashboards & analytics'
      ],
      problemSolved: 'Automates evaluation workflows and generates structured reports. Eliminates manual grading processes and provides consistent, data-driven assessments.',
      website: '#'
    },
    {
      id: 'posting-expert',
      name: 'Posting Expert',
      tagline: 'AI Marketing & Social Posting System',
      description: 'Posting Expert automates content creation, image generation, feedback, and publishing across multiple social media platforms.',
      status: 'Live / Beta',
      features: [
        'Multi-platform posting (IG/LinkedIn/Facebook)',
        'Scheduler + trend-based prompts',
        'Feedback scoring model',
        'Multi-tenant scaling'
      ],
      problemSolved: 'Automates content creation, image generation, feedback, and publishing. Saves hours of manual social media management and ensures consistent posting schedules.',
      website: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* VIDEO BACKGROUND - ULTRA BRIGHT */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <SectionVideo 
          videoSrc="/videos/house.MP4" 
          brightness={0.9}
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
          <Link to="/products" className="text-white">Products</Link>
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
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
          <p className="text-white/60 mb-4 text-sm tracking-wider">INIKOLA INNOVATION ECOSYSTEM</p>
          <h1 
            className="text-6xl mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            Products
          </h1>
          <p 
            className="text-xl text-white/70"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              lineHeight: 1.7
            }}
          >
            These products are developed as independent entities under the INIKOLA innovation ecosystem. 
            Clearly marked as independent products by INIKOLA. Separate branding and websites.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto space-y-16">
          {products.map((product) => (
            <div 
              key={product.id}
              id={product.id}
              className="bg-[#1C1C1C]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-12 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                      {product.name[0]}
                    </div>
                    <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                      {product.status}
                    </span>
                  </div>
                  
                  <h2 
                    className="text-4xl mb-3"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {product.name}
                  </h2>
                  
                  <p className="text-white/60 text-lg mb-6">
                    {product.tagline}
                  </p>
                  
                  <p className="text-white/80 text-base mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <a 
                    href={product.website}
                    className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Visit Product Website →
                  </a>
                </div>
                
                {/* Right Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Problem it solves:</h3>
                    <p className="text-white/70 leading-relaxed">
                      {product.problemSolved}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-4">Key features:</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-purple-400 mt-1">•</span>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      An independent product by INIKOLA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative py-20 px-6 md:px-10" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto">
          <ComingSoonAnimation />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 md:px-10" style={{ zIndex: 10 }}>
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
      </footer>
    </div>
  );
};

export default ProductsPage;
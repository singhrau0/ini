import ComingSoonAnimation from './ComingSoonAnimation';
//import ComingSoon from './ComingSoon';
const Section5 = () => {
  const products = [
    {
      name: 'EvalSea',
      description: 'Evaluation & Verification Platform',
      status: 'Live',
      link: '/products#evalsea'
    },
    {
      name: 'Posting Expert',
      description: 'AI Marketing & Social Posting System',
      status: 'Live',
      link: '/products#posting-expert'
    }
  ];

  return (
    <section id="content-5" className="content-section min-h-screen px-6 md:px-10 py-20 flex items-center">
      <div className="w-full">
        <h2 
          className="section-heading mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 400,
            fontSize: '42px',
            letterSpacing: '-1px'
          }}
        >
          Innovation Beyond Automation
        </h2>
        
        <p 
          className="body-text mb-12 max-w-3xl"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#B8B8B8'
          }}
        >
          INIKOLA also incubates next-generation technology ventures that operate as independent products.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-10">
          {/* Product Cards */}
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8 hover:border-inikola-purple/50 transition-all duration-300 cursor-pointer group"
              onClick={() => window.location.href = product.link}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                  {product.status}
                </span>
              </div>
              
              <h3 
                className="text-white text-2xl mb-3 group-hover:text-inikola-purple transition-colors"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 600
                }}
              >
                {product.name}
              </h3>
              
              <p 
                className="text-white/70 mb-6"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.6
                }}
              >
                {product.description}
              </p>
              
              <div className="text-inikola-purple text-sm group-hover:translate-x-2 transition-transform inline-block">
                Visit Product →
              </div>
            </div>
          ))}
          
          {/* Coming Soon Animation */}
          <ComingSoonAnimation />
        </div>
        
        <a 
          href="/products" 
          className="inline-block text-white/80 hover:text-white transition-colors"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '16px'
          }}
        >
          Explore INIKOLA Products →
        </a>
      </div>
    </section>
  );
};

export default Section5;
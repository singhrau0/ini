const Section4 = () => {
  const content = [
    {
      id: 1,
      title: 'AI-first automation architecture',
      description: [
        'Built on neural network foundations that enable genuine learning, not simple rule-based triggers',
        'Architecture designed to scale from single rooms to enterprise campuses without performance degradation'
      ]
    },
    {
      id: 3,
      title: 'Designed for homes, builders & enterprises',
      description: [
        'Flexible deployment models accommodate single residences, multi-unit developments, and commercial properties',
        'Builder-friendly installation framework reduces commissioning time and complexity'
      ]
    },
    {
      id: 4,
      title: 'Energy-efficient and future-ready',
      description: [
        'Advanced power management reduces energy consumption up to 40% compared to conventional systems',
        'Software-defined architecture enables feature updates and protocol support via OTA upgrades'
      ]
    },
    {
      id: 5,
      title: 'Built for Indian and global markets',
      description: [
        'Engineered to operate reliably under diverse power conditions and extreme temperature ranges',
        'Multi-language support and localized automation patterns for regional requirements'
      ]
    }
  ];

  return (
    <section id="content-4" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center text-white"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            letterSpacing: '-1px'
          }}
        >
          Why INIKOLA
        </h2>

        {/* Simple list - just scroll normally */}
        <div className="space-y-12 sm:space-y-16">
          {content.map((item) => (
            <div key={item.id} className="pb-6 sm:pb-8 border-b border-white/10">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-white"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 300,
                  letterSpacing: '-1px'
                }}
              >
                {item.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {item.description.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg leading-relaxed"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      fontWeight: 300,
                      background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0f0 50%, #c8c8ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
const Section3 = () => {
  const content = [
    {
      id: 1,
      title: 'Smart Lighting Automation',
      description: [
        'Contextual lighting that adapts to natural light levels, occupancy, and time of day',
        'ML-driven routines learn user preferences and optimize energy consumption automatically'
      ]
    },
    {
      id: 2,
      title: 'Climate & Energy Control',
      description: [
        'Real-time energy monitoring tracks consumption patterns across all connected devices',
        'Automated climate zones adjust independently based on room occupancy and usage'
      ]
    },
    {
      id: 4,
      title: 'Centralized Control Systems',
      description: [
        'Single unified interface manages all subsystems - lighting, climate, security, and entertainment',
        'Cross-platform access via mobile, web, and voice enables control from anywhere'
      ]
    },
    {
      id: 5,
      title: 'AI-driven Automation Logic',
      description: [
        'Behavioral learning algorithms create personalized automation rules without manual programming',
        'Predictive models anticipate user needs based on historical patterns and environmental data'
      ]
    }
  ];

  return (
    <section id="content-3" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center text-white"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            letterSpacing: '-1px'
          }}
        >
          What INIKOLA Does
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

export default Section3;
const Section3 = () => {
  const content = [
    {
      id: 1,
      title: 'Smart Lighting Automation',
      description: [
        'Contextual lighting that adapts to natural light levels, occupancy, and time of day',
        'ML-driven routines learn user preferences and optimize energy consumption automatically',
        'Seamless integration with existing electrical infrastructure and smart switches'
      ]
    },
    {
      id: 2,
      title: 'Climate & Energy Control',
      description: [
        'Intelligent HVAC management maintains optimal temperature while minimizing power draw',
        'Real-time energy monitoring tracks consumption patterns across all connected devices',
        'Automated climate zones adjust independently based on room occupancy and usage'
      ]
    },
    {
      id: 3,
      title: 'Home & Property Security',
      description: [
        'AI-powered threat detection distinguishes between routine activity and security events',
        'Multi-layer verification system integrates cameras, sensors, and access controls',
        'Encrypted edge processing ensures privacy while maintaining instant response capabilities'
      ]
    },
    {
      id: 4,
      title: 'Centralized Control Systems',
      description: [
        'Single unified interface manages all subsystems - lighting, climate, security, and entertainment',
        'Cross-platform access via mobile, web, and voice enables control from anywhere',
        'Event-driven automation creates intelligent workflows across multiple device ecosystems'
      ]
    },
    {
      id: 5,
      title: 'AI-driven Automation Logic',
      description: [
        'Behavioral learning algorithms create personalized automation rules without manual programming',
        'Predictive models anticipate user needs based on historical patterns and environmental data',
        'Self-optimizing system continuously refines performance for efficiency and comfort'
      ]
    }
  ];

  return (
    <section id="content-3" className="py-20 px-6 md:px-10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-5xl mb-20 text-center text-white"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            letterSpacing: '-1px'
          }}
        >
          What INIKOLA Does
        </h2>

        {/* Simple list - just scroll normally */}
        <div className="space-y-16">
          {content.map((item) => (
            <div key={item.id} className="pb-8 border-b border-white/10">
              <h3 
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 300,
                  letterSpacing: '-1px'
                }}
              >
                {item.title}
              </h3>

              <div className="space-y-4">
                {item.description.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-white/80 text-lg leading-relaxed"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      fontWeight: 300
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
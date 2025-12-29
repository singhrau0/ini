const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              letterSpacing: '-2px'
            }}
          >
            Get in Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to transform your space with intelligent automation? Contact us today.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <a 
            href="mailto:contact@inikola.com"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* <div className="text-4xl mb-4">📧</div> */}
            <h3 className="text-lg font-semibold mb-3">Email Us</h3>
            <p className="text-white/70 group-hover:text-white transition-colors">
              contact@inikola.com
            </p>
          </a>
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/919305009726"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* <div className="text-4xl mb-4">💬</div> */}
            <h3 className="text-lg font-semibold mb-3">WhatsApp</h3>
            <p className="text-white/70 group-hover:text-white transition-colors">
              +91 93050 09726
            </p>
          </a>
          
          {/* Location Card */}
          <a 
            href="https://maps.app.goo.gl/joPCHKuJnSJF9kez7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
          >
            {/* <div className="text-4xl mb-4">📍</div> */}
            <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
            <p className="text-white/70 group-hover:text-white transition-colors">
              View on Google Maps
            </p>
          </a>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <a 
            href="https://maps.app.goo.gl/joPCHKuJnSJF9kez7"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            {/* Map Container */}
            <div className="relative w-full h-[500px] bg-gray-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160410464!2d78.24323019999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="INIKOLA Location Map"
              ></iframe>

              {/* Overlay with "View in Google Maps" on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                  Open in Google Maps →
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="mailto:contact@inikola.com"
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors text-lg font-semibold"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
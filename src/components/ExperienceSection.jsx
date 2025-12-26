const ExperienceSection = () => {
  return (
    <section id="content-experience" className="content-section min-h-screen px-6 md:px-10 py-20 flex items-center">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left side - Info */}
        <div>
          <p 
            className="text-white/60 mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              fontSize: '13px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            INIKOLA • EXPERIENCE
          </p>
          
          <h2 
            className="section-heading mb-6"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 400,
              fontSize: '42px',
              letterSpacing: '-1px'
            }}
          >
            Experience INIKOLA
          </h2>
          
          <p 
            className="body-text mb-10"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#B8B8B8'
            }}
          >
            Transform your home into an intelligent living space. Share your project details and we'll respond with a demo plan and deployment approach.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-white/50 text-sm mb-2">Email</p>
              <a 
                href="mailto:contact@inikola.com" 
                className="text-white hover:text-inikola-purple transition-colors text-base"
              >
                contact@inikola.com
              </a>
            </div>
            
            <div>
              <p className="text-white/50 text-sm mb-2">Phone</p>
              <a 
                href="tel:+919876543210" 
                className="text-white hover:text-inikola-purple transition-colors text-base"
              >
                +91 98765 43210
              </a>
            </div>
            
            <div>
              <p className="text-white/50 text-sm mb-2">Address</p>
              <p className="text-white/70 text-base">
                Hyderabad, Telangana<br />
                India
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input 
                type="text"
                placeholder="Your name"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-inikola-purple focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input 
                type="email"
                placeholder="you@company.com"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-inikola-purple focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">Phone</label>
              <input 
                type="tel"
                placeholder="+91 ..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-inikola-purple focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">Requirements</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your home/building, number of rooms, and goals..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-inikola-purple focus:outline-none transition-colors resize-none"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                fontWeight: 500,
                fontSize: '16px'
              }}
            >
              Submit Request
            </button>
            
            <p className="text-white/40 text-xs text-center">
              This is UI only. Next step: connect to backend/email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
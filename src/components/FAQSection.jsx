import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is INIKOLA only for home automation?',
      answer: 'Yes — INIKOLA is the home automation brand. Our other ventures (EvalSea, Posting Expert) are independent products shown only on the Ventures page.'
    },
    {
      question: 'Does it work without internet?',
      answer: 'INIKOLA uses edge-first architecture, meaning core automation functions run locally on your network. Basic automations work without internet, while cloud features require connectivity.'
    },
    {
      question: 'Can builders deploy this at scale?',
      answer: 'Absolutely. INIKOLA is designed for single rooms up to multi-floor deployments. We work with builders and developers to integrate smart infrastructure from the ground up.'
    },
    {
      question: 'How do we request a demo?',
      answer: 'Click the "Get Started" button in the header or visit our Experience INIKOLA section to share your project details. We\'ll respond with a customized demo plan and deployment approach.'
    },
    {
      question: 'What makes INIKOLA different from other smart home systems?',
      answer: 'INIKOLA features AI-first automation, edge processing for reliability, privacy-first architecture, and is specifically designed for both Indian and global markets with scalable infrastructure.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. INIKOLA uses end-to-end encryption, local processing where possible, and never shares your data with third parties. We are GDPR compliant and prioritize your privacy.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="content-faqs" className="content-section min-h-screen px-6 md:px-10 py-20 flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        <h2 
          className="section-heading mb-6"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 400,
            fontSize: '42px',
            letterSpacing: '-1px'
          }}
        >
          FAQs
        </h2>
        
        <p 
          className="body-text mb-12"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontWeight: 300,
            fontSize: '18px',
            color: '#B8B8B8'
          }}
        >
          Fast answers your prospects usually ask.
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#1C1C1C] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span 
                  className="text-white text-base pr-8"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    fontWeight: 500
                  }}
                >
                  {faq.question}
                </span>
                <span className="text-white/60 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div 
                  className="px-6 pb-4 text-white/70"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    fontWeight: 300,
                    fontSize: '15px',
                    lineHeight: 1.7,
                    animation: 'fadeIn 0.3s ease'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FAQSection;
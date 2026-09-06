export const site = {
  name: 'iNikola',
  legalName: 'iNikola Technologies',
  domain: 'https://inikola.com',
  tagline: 'Secure Enterprise AI',
  promise: 'From a blocked AI use-case to security-approved production.',
  description:
    'iNikola is an Enterprise AI Engineering and Secure AI Enablement company. We design, build, secure and operate production AI systems — RAG, agents and automation — inside your approved data boundary.',
  email: 'contact@inikola.com',
  phone: '+91 93050 09726',
  whatsapp: 'https://wa.me/919305009726',
  location: 'Hyderabad, Telangana, India',
  maps: 'https://maps.app.goo.gl/joPCHKuJnSJF9kez7',
  linkedin: 'https://www.linkedin.com/company/inikola',
  founded: '2024',
  /* Booking: set VITE_BOOKING_URL to a Cal.com / Calendly link to enable the
     embedded scheduler. Without it, /book renders the lead form in demo mode. */
  bookingUrl: import.meta.env?.VITE_BOOKING_URL || '',
  brochure: '/brochures/iNikola_Enterprise_AI_Brochure.pdf',
  features: {
    // Flip to true once real, written-approval client quotes exist.
    // See src/data/testimonials.js — nothing here is invented as a real quote.
    testimonials: false,
  },
}

export const nav = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'R&D', to: '/rnd' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
]

export const footerNav = [
  {
    title: 'Solutions',
    links: [
      { label: 'AI Strategy & Readiness', to: '/solutions/ai-strategy-readiness' },
      { label: 'Enterprise AI Engineering', to: '/solutions/enterprise-ai-engineering' },
      { label: 'Agentic AI & Automation', to: '/solutions/agentic-ai-automation' },
      { label: 'Private & Secure AI', to: '/solutions/private-secure-ai' },
      { label: 'Knowledge & RAG Systems', to: '/solutions/knowledge-rag' },
      { label: 'Managed AI Operations', to: '/solutions/managed-ai-operations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Products', to: '/products' },
      { label: 'R&D Lab', to: '/rnd' },
      { label: 'Insights', to: '/insights' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Book a Demo', to: '/book' },
    ],
  },
]

export const stats = [
  { value: '8', label: 'Service pillars, strategy through managed operations' },
  { value: '4', label: 'Weeks from kickoff to a security-reviewed pilot' },
  { value: '5', label: 'Deployment modes — API, VPC, private cloud, on-prem, air-gapped' },
  { value: '0', label: 'Model lock-in. The routing layer is yours to change' },
]

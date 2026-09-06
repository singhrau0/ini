/* Single source of truth for per-route SEO.
   Imported by the app (src/lib/seo.jsx) and by scripts/postbuild.mjs, which
   emits a static HTML file per route with real meta tags plus sitemap.xml. */
import { solutions } from './solutions.js'
import { products } from './products.js'
import { insights } from './insights.js'
import { portfolio } from './portfolio.js'

const BRAND = 'iNikola'

export const routes = [
  {
    path: '/',
    title: 'iNikola — Secure Enterprise AI, Built for Production',
    description:
      'iNikola is an enterprise AI engineering company. We design, build, secure and operate production AI systems — RAG, agents and automation — inside your approved data boundary.',
    priority: 1.0,
  },
  {
    path: '/solutions',
    title: `Enterprise AI Services & Solutions — ${BRAND}`,
    description:
      'Eight service pillars from AI strategy and readiness through engineering, agentic automation, private AI, security, governance and managed AI operations.',
    priority: 0.9,
  },
  {
    path: '/products',
    title: `AI Products & Accelerators — ${BRAND}`,
    description:
      'Products available today: Private Knowledge Copilot, Posting Expert, EvalSea, HR Bot, EMS and building automation. Everything here is deployable now.',
    priority: 0.9,
  },
  {
    path: '/rnd',
    title: `R&D Lab — Enterprise AI Research at ${BRAND}`,
    description:
      'What we are building next: policy-aware model routing, small language models as a control layer, prompt-injection test harnesses and agent observability. In development, not available today.',
    priority: 0.6,
  },
  {
    path: '/portfolio',
    title: `Portfolio — Enterprise AI Work & Reference Architectures — ${BRAND}`,
    description:
      'Shipped platforms and the reference architectures we deliver: permission-aware knowledge copilots, document intelligence pipelines and enterprise secure AI gateways.',
    priority: 0.8,
  },
  {
    path: '/team',
    title: `Team — Engineers Behind ${BRAND}`,
    description:
      'The AI, platform, security and edge engineers who design and deliver enterprise AI systems at iNikola.',
    priority: 0.6,
  },
  {
    path: '/faq',
    title: 'Enterprise AI FAQ — Private AI, RAG, Agents & Security',
    description:
      'Straight answers on private AI deployment, permission-aware RAG, prompt injection, agent security, evaluation, engagement models and cost.',
    priority: 0.9,
  },
  {
    path: '/insights',
    title: `Insights — Enterprise AI Engineering & Security — ${BRAND}`,
    description:
      'In-depth writing on getting enterprise AI approved and into production: architecture, permission-aware retrieval, deployment boundaries, agent security and evaluation.',
    priority: 0.8,
  },
  {
    path: '/about',
    title: `About ${BRAND} — Enterprise AI Engineering & Secure AI Enablement`,
    description:
      'iNikola takes organisations from an AI idea or blocked proof-of-concept to a governed, production-ready system inside their approved boundary.',
    priority: 0.7,
  },
  {
    path: '/careers',
    title: `Careers — Build Enterprise AI at ${BRAND}`,
    description: 'Open roles in AI engineering, AI security, platform engineering and enterprise solutions consulting.',
    priority: 0.5,
  },
  {
    path: '/contact',
    title: `Contact ${BRAND} — Talk to an Enterprise AI Engineer`,
    description:
      'Tell us the AI workflow you want to deploy but cannot get approved. We will tell you what it takes to get it into production.',
    priority: 0.8,
  },
  {
    path: '/book',
    title: `Book an AI Approval & Architecture Review — ${BRAND}`,
    description:
      'A 30-minute working session on one blocked AI workflow: the data path, the approval blockers and the architecture that clears them.',
    priority: 0.8,
  },
  { path: '/privacy', title: `Privacy Policy — ${BRAND}`, description: 'How iNikola collects, uses and protects personal data.', priority: 0.3 },
  { path: '/terms', title: `Terms of Use — ${BRAND}`, description: 'Terms governing use of the iNikola website.', priority: 0.3 },

  ...solutions.map((s) => ({
    path: `/solutions/${s.slug}`,
    title: `${s.title} — ${BRAND}`,
    description: s.short,
    priority: 0.7,
  })),
  ...products.map((p) => ({
    path: `/products/${p.slug}`,
    title: `${p.name} — ${p.tagline.replace(/\.$/, '')} — ${BRAND}`,
    description: p.tagline,
    priority: 0.7,
  })),
  ...portfolio.map((p) => ({
    path: `/portfolio/${p.slug}`,
    title: `${p.title} — ${p.subtitle} — ${BRAND}`,
    description: p.challenge,
    priority: 0.6,
  })),
  ...insights.map((a) => ({
    path: `/insights/${a.slug}`,
    title: `${a.title} — ${BRAND}`,
    description: a.description,
    priority: 0.7,
    type: 'article',
    date: a.date,
  })),

  /* Unlisted paid-campaign landing page: noindex, excluded from the sitemap,
     never linked from navigation. Reachable only by its direct URL. */
  {
    path: '/lp/private-ai',
    title: 'Get Your Blocked AI Use-Case Approved — iNikola',
    description: 'A 30-minute architecture review on the AI workflow your security team has not approved.',
    noindex: true,
  },
]

export const routeFor = (path) => {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return routes.find((r) => r.path === clean)
}

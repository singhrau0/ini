/* PRODUCTS = available today. Anything still being built belongs in src/data/rnd.js.
   This separation is a hard rule — never mix the two in one listing. */

export const productCategories = [
  { id: 'ai-products', label: 'AI Products' },
  { id: 'accelerators', label: 'Accelerators' },
  { id: 'automation', label: 'Building & Home Automation' },
]

export const products = [
  {
    slug: 'private-knowledge-copilot',
    name: 'Private Knowledge Copilot',
    category: 'ai-products',
    status: 'Available',
    flagship: true,
    tagline: 'A secure assistant over your own documents, deployed inside your boundary.',
    problem:
      'Your policies, SOPs, manuals, contracts and internal research hold the answers people need every day — but finding them means asking a colleague, and putting them into a public AI tool is not an option.',
    description:
      'The Private Knowledge Copilot is our flagship offer and the fastest route to a governed AI system in production. It answers questions over your internal content with citations, retrieves only what the signed-in user is already permitted to see, and runs wherever your policy allows — an approved API, your own VPC, private cloud, on-premise, or fully disconnected.',
    features: [
      'Permission-aware retrieval that inherits access control from the source system',
      'Citations on every answer, linking back to the originating document',
      'SSO, MFA and RBAC integration with your existing identity provider',
      'DLP and policy controls on both prompts and responses',
      'Complete audit trail per user, per query, per document',
      'Model-agnostic: local SLM, open-weight, VPC-hosted or approved enterprise API',
    ],
    outcomes: [
      'Cuts document search time from tens of minutes to seconds',
      'Removes the incentive for staff to paste confidential material into public tools',
      'Creates a reusable control plane the next five use cases can build on',
    ],
    verticals: [
      { sector: 'NBFC / lending', use: 'Credit policy and underwriting copilot' },
      { sector: 'Wealth / AMC / PMS', use: 'Compliance and research copilot' },
      { sector: 'Insurance / TPA', use: 'Claims and policy document copilot' },
      { sector: 'GCC', use: 'Engineering knowledge copilot' },
      { sector: 'Pharma', use: 'Quality and SOP copilot' },
      { sector: 'BPO / KPO', use: 'Client-isolated delivery copilot' },
      { sector: 'Manufacturing', use: 'Engineering and troubleshooting copilot' },
      { sector: 'Payments', use: 'Operations and SOC copilot' },
    ],
  },
  {
    slug: 'posting-expert',
    name: 'Posting Expert',
    category: 'ai-products',
    status: 'Available',
    tagline: 'AI marketing and social publishing, run as an automated workflow.',
    problem:
      'Consistent multi-platform publishing is a full-time job that most teams do inconsistently, in bursts, and without any feedback loop on what actually performed.',
    description:
      'Posting Expert automates the full content loop — generation, imagery, scheduled publishing across platforms, and a scoring model that feeds performance back into the next cycle. It is a live product and a working demonstration of the agentic workflow patterns we deploy inside enterprises.',
    features: [
      'Multi-platform publishing across Instagram, LinkedIn and Facebook',
      'Scheduler with trend-informed prompt generation',
      'AI image generation tied to brand guidelines',
      'Performance feedback scoring that informs the next cycle',
      'Multi-tenant architecture for agencies and multi-brand operators',
    ],
    outcomes: [
      'Hours of manual publishing work per week removed',
      'A consistent posting cadence that survives busy periods',
      'Content decisions informed by measured performance rather than instinct',
    ],
    brochure: '/brochures/PostingExpert_Brochure.pdf',
  },
  {
    slug: 'evalsea',
    name: 'EvalSea',
    category: 'accelerators',
    status: 'Available',
    tagline: 'Evaluation, assessment and verification workflows, automated end to end.',
    problem:
      'Assessment at scale is slow, inconsistent between reviewers, and produces reports that take longer to assemble than the evaluation itself.',
    description:
      'EvalSea automates evaluation and verification loops and generates structured, defensible reports. Built first for education and assessment workflows, its scoring and reporting engine is now a reusable accelerator in enterprise evaluation work — including the golden-set evaluations we build for AI governance engagements.',
    features: [
      'Automated evaluation and verification loops',
      'Pluggable scoring criteria per assessment type',
      'Structured report generation in PDF and document formats',
      'Dashboards and longitudinal analytics',
      'Reviewer consistency checks',
    ],
    outcomes: [
      'Manual grading effort reduced dramatically',
      'Consistent, auditable scoring across reviewers',
      'Reports produced as a by-product of the workflow, not a separate task',
    ],
    brochure: '/brochures/Evalsea_Brochure.pdf',
  },
  {
    slug: 'hr-bot',
    name: 'HR Bot',
    category: 'ai-products',
    status: 'Available',
    tagline: 'Screening, interview and hiring workflow automation.',
    problem:
      'Early-stage hiring is dominated by repeated screening work — reading similar CVs, running the same first-round technical questions, and writing up notes that rarely get compared consistently.',
    description:
      'HR Bot automates the repeatable parts of the hiring funnel: CV screening against a role definition, structured technical and behavioural screening, and consistent scored write-ups. It is an end-to-end agentic workflow in production, and the pattern behind much of the internal-workflow automation we build for clients.',
    features: [
      'Role-definition-driven CV screening and ranking',
      'Structured technical and behavioural screening interviews',
      'Consistent, scored candidate summaries',
      'Interview scheduling and pipeline integration',
      'Human decision checkpoints at every advancement stage',
    ],
    outcomes: [
      'First-round screening throughput increased without extra headcount',
      'Candidate evaluation made comparable across interviewers',
      'Recruiter time redirected to the shortlist rather than the long list',
    ],
  },
  {
    slug: 'ems',
    name: 'EMS',
    category: 'accelerators',
    status: 'Available',
    tagline: 'Enterprise and education management workflows on one platform.',
    problem:
      'Operational workflows spread across spreadsheets, email threads and disconnected tools produce no single view and no reliable audit trail.',
    description:
      'EMS consolidates enterprise and education management workflows — records, scheduling, approvals and reporting — into one integrated platform. It represents the integration and platform delivery capability that underpins our larger enterprise engagements.',
    features: [
      'Unified records and workflow management',
      'Role-based access across departments',
      'Approval chains with a full audit trail',
      'Reporting and operational dashboards',
      'Integration with existing enterprise systems',
    ],
    outcomes: [
      'One system of record instead of parallel spreadsheets',
      'Approvals that are traceable after the fact',
      'Reporting that does not require manual assembly',
    ],
  },
  {
    slug: 'building-automation',
    name: 'Building & Space Automation',
    category: 'automation',
    status: 'Available',
    tagline: 'Sensor-driven automation for buildings and residences — one product line, not the company.',
    problem:
      'Connected devices in a building generate signals nobody acts on, and control systems that only respond to explicit commands create work rather than removing it.',
    description:
      'Our automation line applies the same engineering discipline as the rest of our work to physical spaces: sensors, a control hub and automation logic that responds to occupancy, climate and security conditions. It is one product line within a broader enterprise AI business — included here for completeness, and because the edge and IoT engineering behind it informs our industrial and manufacturing work.',
    features: [
      'Central control hub coordinating connected devices',
      'Occupancy, climate, contact and security sensing',
      'Rules and pattern-based automation logic',
      'Energy optimisation from actual usage patterns',
      'Local processing, so core functions survive an internet outage',
    ],
    outcomes: [
      'Reduced energy consumption without manual intervention',
      'Security events surfaced and acted on in real time',
      'Edge and IoT capability that transfers to plant and facility environments',
    ],
    gallery: [
      { src: '/sensors/Futuristic smart hub in blue light.jpg', label: 'Control hub' },
      { src: '/sensors/Modern motion sensor on dark surface.jpg', label: 'Occupancy sensor' },
      { src: '/sensors/Sleek smart switch with glowing icons.jpg', label: 'Smart switch' },
      { src: '/sensors/Sleek climate sensor with digital display.jpg', label: 'Climate sensor' },
      { src: '/sensors/Sleek security camera close-up.jpg', label: 'Security camera' },
      { src: '/sensors/White contact sensor close-up on dark surface.jpg', label: 'Contact sensor' },
    ],
  },
]

export const productBySlug = (slug) => products.find((p) => p.slug === slug)

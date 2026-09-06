/* Two kinds of entry, deliberately labelled differently on the page:
   kind: 'shipped'    → products we have actually built and run (named, verifiable)
   kind: 'blueprint'  → reference architectures we deliver; described as patterns,
                        not claimed as specific named-client case studies.
   Replace or extend with real, client-approved case studies as they are cleared. */

export const portfolio = [
  {
    slug: 'posting-expert-platform',
    kind: 'shipped',
    title: 'Posting Expert',
    subtitle: 'Multi-tenant agentic content and publishing platform',
    tag: 'Agentic workflow',
    challenge:
      'Marketing teams publish inconsistently across platforms because the work is repetitive, spread across tools, and has no feedback loop.',
    approach:
      'An agentic pipeline that generates content and imagery, schedules and publishes across multiple platforms, then scores performance and feeds the result into the next generation cycle. Built multi-tenant from the start so agencies can run many brands under isolated data.',
    stack: ['Python', 'React', 'Multi-tenant Postgres', 'Queue-based orchestration', 'Platform APIs', 'Image generation'],
    highlights: [
      'Full generate → review → schedule → publish → score loop',
      'Tenant isolation at the data layer',
      'Human approval checkpoint before anything goes live',
    ],
    link: '/products/posting-expert',
  },
  {
    slug: 'evalsea-platform',
    kind: 'shipped',
    title: 'EvalSea',
    subtitle: 'Automated evaluation, scoring and reporting engine',
    tag: 'Workflow automation',
    challenge:
      'Assessment at volume is slow, inconsistent between reviewers, and the reporting takes longer than the evaluation.',
    approach:
      'A pluggable scoring engine with automated verification loops and structured report generation, plus dashboards that make reviewer consistency visible. The same scoring architecture now underpins the golden-set evaluations we build in AI governance engagements.',
    stack: ['Python', 'React', 'Rules + model scoring', 'PDF generation', 'Analytics'],
    highlights: [
      'Criteria pluggable per assessment type',
      'Reports generated as a by-product of the workflow',
      'Reviewer consistency measured, not assumed',
    ],
    link: '/products/evalsea',
  },
  {
    slug: 'hr-bot-platform',
    kind: 'shipped',
    title: 'HR Bot',
    subtitle: 'Screening and interview workflow automation',
    tag: 'Agentic workflow',
    challenge:
      'First-round hiring is dominated by repeated screening work whose output is rarely comparable across interviewers.',
    approach:
      'Role-definition-driven CV screening, structured technical and behavioural interviews, and scored write-ups in a consistent format — with a human decision required at every advancement stage.',
    stack: ['Python', 'LLM orchestration', 'Structured output validation', 'Scheduling integrations'],
    highlights: [
      'Structured output validated before it reaches a recruiter',
      'Human-in-the-loop on every advancement decision',
      'Comparable scoring across candidates and interviewers',
    ],
    link: '/products/hr-bot',
  },
  {
    slug: 'permission-aware-copilot',
    kind: 'blueprint',
    title: 'Permission-Aware Knowledge Copilot',
    subtitle: 'Reference architecture · regulated financial services',
    tag: 'Secure RAG',
    challenge:
      'A lending or wealth business wants an internal assistant over credit policy, product notes and regulatory circulars. Security will not approve it until retrieval provably cannot return a document the asker could not already open.',
    approach:
      'Retrieval filtered by the signed-in identity, inheriting access control lists from the source system at query time rather than at index time. SSO and RBAC via the existing identity provider, citations on every answer, DLP on prompts and responses, and a per-query audit record. Deployed to whichever boundary the data class requires.',
    stack: ['Hybrid vector + keyword retrieval', 'ACL inheritance at query time', 'SSO / OIDC', 'DLP gateway', 'Audit store', 'Model routing'],
    highlights: [
      'Permission filtering as a pre-retrieval constraint, not a post-filter',
      'Evaluation set agreed with domain experts before launch',
      'Security evidence pack produced as a project deliverable',
    ],
  },
  {
    slug: 'document-intelligence',
    kind: 'blueprint',
    title: 'Claims & Document Intelligence Pipeline',
    subtitle: 'Reference architecture · insurance and TPA operations',
    tag: 'Document AI',
    challenge:
      'Document-heavy operations where extraction accuracy determines both cycle time and downstream error rates, and where every automated decision must be explainable after the fact.',
    approach:
      'A staged pipeline — classify, extract, validate against business rules, then route. Low-confidence extractions escalate to a human queue instead of proceeding silently. Every field carries a provenance reference back to the page and region it came from.',
    stack: ['Multimodal extraction', 'Rule validation layer', 'Confidence thresholds', 'Human review queue', 'Provenance tracking'],
    highlights: [
      'Confidence thresholds tuned per field, not per document',
      'Human queue for exceptions rather than blanket review',
      'Field-level provenance for audit',
    ],
  },
  {
    slug: 'secure-ai-gateway',
    kind: 'blueprint',
    title: 'Enterprise Secure AI Gateway',
    subtitle: 'Reference architecture · multi-team AI governance',
    tag: 'Platform',
    challenge:
      'Several teams have each wired up their own model access. Nobody can answer what data went where, costs are unattributable, and controls differ per team.',
    approach:
      'A single enterprise gateway in front of every model, enforcing identity, policy, DLP and egress rules, then routing by data class to the approved model for that class. Usage, cost and quality attributed per team and per use case. Teams keep their autonomy; the organisation gets one audit trail.',
    stack: ['Policy engine', 'Model routing', 'DLP / PII controls', 'Egress control', 'Cost attribution', 'Observability'],
    highlights: [
      'One audit trail across every team and model',
      'Model changes become a routing decision, not a migration',
      'Cost attributed to the team that generated it',
    ],
  },
]

export const portfolioBySlug = (slug) => portfolio.find((p) => p.slug === slug)

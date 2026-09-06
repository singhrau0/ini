export const solutions = [
  {
    slug: 'ai-strategy-readiness',
    n: '01',
    title: 'AI Strategy & Readiness',
    short: 'Find the use cases worth building, and the architecture that will actually get approved.',
    summary:
      'Most AI programmes do not fail on model quality. They stall at the point where security, legal and data governance have to sign off. We start there — mapping the workflows worth automating against the data they touch, and the architecture each one requires to clear review.',
    outcomes: [
      'Prioritised use-case roadmap scored on value, feasibility and approval risk',
      'Data sensitivity map across the workflows in scope',
      'Architecture options with TCO and a recommended deployment boundary',
      'Security and governance decision pack your InfoSec team can review',
    ],
    deliverables: [
      'Use-case discovery workshops with business and platform owners',
      'Data classification and flow mapping',
      'Model strategy: hosted API, VPC, open-weight or local SLM',
      'ROI / TCO model per use case',
      'Approval plan naming the blockers and who resolves each one',
    ],
    faq: [
      {
        q: 'How long does a readiness assessment take?',
        a: 'Two to three weeks for a single business unit, depending on how quickly we can get time with data owners and the security team.',
      },
      {
        q: 'Do we have to commit to a build afterwards?',
        a: 'No. The assessment is a standalone deliverable you own. If you do proceed to a pilot within 30 days, the assessment fee is credited against it.',
      },
    ],
  },
  {
    slug: 'enterprise-ai-engineering',
    n: '02',
    title: 'Enterprise AI Engineering',
    short: 'GenAI applications, ML systems and copilots built to production standards, not demo standards.',
    summary:
      'This is the core of what we do: the application layer that turns a model into a system somebody at your company uses on a Tuesday morning. Backend, frontend, integration, evaluation, deployment — built the way any other production system in your estate would be built.',
    outcomes: [
      'A working application that solves one clearly defined business workflow',
      'Integrated with the systems your team already uses',
      'Evaluation suite and quality thresholds agreed before launch',
      'Code, infrastructure and documentation handed to your team',
    ],
    deliverables: [
      'Custom GenAI applications and enterprise copilots',
      'Retrieval-augmented generation over your own content',
      'Multimodal AI — document, image, audio and structured data',
      'Classical ML integration alongside generative components',
      'AI APIs and services for your existing product surfaces',
      'Frontend and backend engineering, CI/CD and infrastructure-as-code',
    ],
    faq: [
      {
        q: 'Do you work alongside our internal engineering team?',
        a: 'Usually, yes. The most successful engagements pair our AI engineers with your platform and domain teams, so the system does not become something only we can maintain.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. We deliver into your repositories and your cloud accounts.',
      },
    ],
  },
  {
    slug: 'agentic-ai-automation',
    n: '03',
    title: 'Agentic AI & Automation',
    short: 'Agents that take real actions in real systems, with the permissions and approvals to match.',
    summary:
      'An agent that can only chat is a demo. An agent that can file the ticket, update the record and hand off to a human at the right moment is a system. We build the second kind — with least-privilege tool access, allow-listed actions, and human approval gates on anything consequential.',
    outcomes: [
      'Knowledge work that used to take hours completing in minutes',
      'Cross-system workflows that no longer need a person to copy data between tools',
      'Every agent action logged, attributable and reversible',
    ],
    deliverables: [
      'Tool-using agents connected to APIs, databases and business systems',
      'Planner / executor / reviewer multi-agent architectures where they earn their complexity',
      'Human-in-the-loop approval checkpoints on high-impact actions',
      'Workflow automation across ticketing, CRM, ERP and internal tooling',
      'Action logging, replay and rollback',
    ],
    maturity: [
      { level: 'Level 1', name: 'Configured assistant', desc: 'Prompted AI with a role, structured output and a bounded use case.', control: 'Approved model plus usage policy' },
      { level: 'Level 2', name: 'Data-connected assistant', desc: 'Retrieval over company knowledge with citations.', control: 'SSO/RBAC, source permissions, audit' },
      { level: 'Level 3', name: 'Tool-using agent', desc: 'Calls APIs, databases, ticketing, code and business tools.', control: 'Least privilege, allow-listed tools, action logs, human approval' },
      { level: 'Level 4', name: 'Multi-agent workflow', desc: 'Planner, executor and reviewer agents coordinate a longer process.', control: 'State control, validation gates, rollback, end-to-end observability' },
    ],
    faq: [
      {
        q: 'Are multi-agent systems always better?',
        a: 'No. They add coordination failure modes. We use them when separating planning from execution or adding a reviewer measurably improves reliability — not because the architecture sounds impressive.',
      },
    ],
  },
  {
    slug: 'private-secure-ai',
    n: '04',
    title: 'Private & Secure AI',
    short: 'AI that runs where your data is already allowed to live.',
    summary:
      'Private does not have to mean on-premise. It means the minimum architecture that satisfies your policy for that dataset. Sometimes that is an approved enterprise API with the right contractual terms. Sometimes it is a model running inside a disconnected network. We determine which, then build the control plane that makes it governable either way.',
    outcomes: [
      'Sensitive-data use cases that can finally pass security review',
      'One enterprise AI gateway instead of scattered team-by-team model access',
      'Controlled egress, so you can answer where every prompt and document went',
    ],
    deliverables: [
      'Secure AI gateway with policy enforcement and model routing',
      'SSO, MFA and RBAC/ABAC integration with your existing identity provider',
      'DLP and PII controls on prompts and responses',
      'Controlled egress and network boundary design',
      'Deployment into approved API, customer VPC, private cloud, on-prem or air-gapped environments',
      'Full audit trail: who asked what, of which model, over which data',
    ],
    faq: [
      {
        q: 'Our data is already safe in Azure OpenAI. Why would we need this?',
        a: 'Often you would not, for that dataset. The question is narrower: is that specific architecture approved for this specific data class, and can you produce an audit trail per user and per document? Where the answer is yes, we build on it rather than replacing it.',
      },
      {
        q: 'Do you push on-premise deployments?',
        a: 'No. On-premise is the most expensive option and we recommend it only where policy or regulation genuinely requires it.',
      },
    ],
  },
  {
    slug: 'ai-security-engineering',
    n: '05',
    title: 'AI Security Engineering',
    short: 'Threat modelling, prompt-injection defence and release controls for systems that can act.',
    summary:
      'The moment a model can call a tool, it becomes an execution path into your estate. We treat it that way — threat modelling the agent, hardening the tool boundary, testing for injection and privilege escalation, and producing the evidence your security team needs to approve a release.',
    outcomes: [
      'Security evidence pack that shortens the approval cycle',
      'Agent and tool execution hardened against injection and privilege escalation',
      'Release gates that hold as the system evolves',
    ],
    deliverables: [
      'LLM and agent threat modelling',
      'Prompt-injection and jailbreak defence, tested not assumed',
      'Tool and MCP security review, least-privilege scoping',
      'Secrets handling and isolation between tenants or clients',
      'Red-team exercises against the deployed system',
      'Secure SDLC integration and pre-release control gates',
    ],
    faq: [
      {
        q: 'Is this a penetration test?',
        a: 'It overlaps but is not the same. Traditional testing rarely covers indirect prompt injection through retrieved documents, or an agent being talked into calling a tool it should not. We test those paths specifically.',
      },
    ],
  },
  {
    slug: 'knowledge-rag',
    n: '06',
    title: 'Enterprise Knowledge & RAG',
    short: 'Retrieval that respects the permissions your documents already carry.',
    summary:
      'The fastest way to lose trust in an internal copilot is for it to surface a document the person asking was never allowed to open. Permission-aware retrieval is not an enhancement we add later — it is the first thing we build, inheriting access control lists from the source system on every query.',
    outcomes: [
      'An internal assistant people actually trust, because it cites its sources',
      'No permission leakage: retrieval is filtered by the signed-in user identity',
      'Institutional knowledge that survives people leaving',
    ],
    deliverables: [
      'Permission-aware RAG with source ACL inheritance',
      'Vector and hybrid search layer tuned to your corpus',
      'Citation and provenance on every answer',
      'Document intelligence: extraction, classification, comparison and summarisation',
      'Connectors for SharePoint, file shares, databases, ticketing, wikis and code',
      'Per-query audit logging',
    ],
    faq: [
      {
        q: 'What if our source permissions are a mess?',
        a: 'That is common, and it is better to find out during a scoped pilot than after a company-wide rollout. Part of the discovery work is surfacing where source access control is inconsistent, so you can decide what to fix before going wide.',
      },
    ],
  },
  {
    slug: 'ai-governance-quality',
    n: '07',
    title: 'AI Governance & Quality',
    short: 'Evaluations, guardrails and evidence — so risk review has something concrete to read.',
    summary:
      'Governance becomes real when it is measurable. We build the evaluation sets, thresholds and guardrails that turn "the model seems good" into a number your risk committee can act on, and keep those checks running after launch.',
    outcomes: [
      'Quantified answer quality against a task-specific evaluation set',
      'Documented guardrails and their test results',
      'Auditability that satisfies GRC, DPO and compliance review',
    ],
    deliverables: [
      'Golden-set evaluations built with your domain experts',
      'Guardrails on inputs, outputs and tool calls',
      'Hallucination and grounding measurement with citation checks',
      'AI risk testing and human-in-the-loop design',
      'Policy mapping against internal AI usage standards',
    ],
    faq: [
      {
        q: 'How do you handle hallucination risk?',
        a: 'Grounding with citations, a measured accuracy threshold agreed before launch, and starting with internal decision support rather than customer-facing automation. Where the answer matters enough, a human approves before it leaves the system.',
      },
    ],
  },
  {
    slug: 'managed-ai-operations',
    n: '08',
    title: 'LLMOps & Managed AI Operations',
    short: 'The part most projects skip: keeping it working after launch.',
    summary:
      'Models change, prompts drift, costs creep and usage patterns shift. We run the operational layer — monitoring quality, cost and latency, re-running evaluations when anything upstream changes, and handling incidents — so the system is as reliable in month twelve as it was in week four.',
    outcomes: [
      'Quality, cost and latency tracked continuously, not anecdotally',
      'Model and router changes tested against your evaluation set before they ship',
      'A named owner when something breaks',
    ],
    deliverables: [
      'Observability across prompts, retrievals, tool calls and responses',
      'Continuous evaluation runs and regression alerts',
      'Model and routing updates with rollback',
      'Cost attribution by team and use case',
      'Incident response and on-call support',
      'Quarterly governance and roadmap reviews',
    ],
    faq: [
      {
        q: 'Can our own team run this instead?',
        a: 'Yes, and many do after the first year. We build the operational tooling to be handed over, and the managed service exists so you are not blocked while hiring for it.',
      },
    ],
  },
]

export const solutionBySlug = (slug) => solutions.find((s) => s.slug === slug)

export const controlPlane = [
  { layer: 'Enterprise users', desc: 'Employees, teams and applications', tone: 'neutral' },
  { layer: 'Identity & access', desc: 'SSO · MFA · RBAC / ABAC · source permissions', tone: 'cobalt' },
  { layer: 'iNikola secure AI gateway', desc: 'Policy enforcement · routing · isolation · egress control', tone: 'ink' },
  { layer: 'Data & safety controls', desc: 'DLP and PII controls · prompt and response policy · audit logs', tone: 'cobalt' },
  { layer: 'Permission-aware RAG & agents', desc: 'Retrieval honouring source ACLs · tools · orchestration', tone: 'cobalt' },
  { layer: 'Enterprise data sources', desc: 'SharePoint · files · databases · APIs · tickets · code · SOPs', tone: 'neutral' },
  { layer: 'Model abstraction layer', desc: 'Local SLM · open-weight LLM · VPC model · approved enterprise API', tone: 'cobalt' },
  { layer: 'Evaluation & observability', desc: 'Quality · security tests · cost · latency · risk · usage', tone: 'neutral' },
]

export const deployments = [
  {
    name: 'Approved enterprise API',
    fit: 'Lower-sensitivity use cases where enterprise legal and security terms already cover the data class.',
    role: 'We build the application, access model, data-flow controls, evaluations and governance layer on top.',
  },
  {
    name: 'Customer VPC / private endpoint',
    fit: 'Cloud-first organisations that need private connectivity and tighter boundary control.',
    role: 'Secure architecture, model routing, retrieval, IAM integration and observability inside your network.',
  },
  {
    name: 'Private cloud / on-premise',
    fit: 'High-sensitivity data, proprietary IP, or regulatory and infrastructure constraints.',
    role: 'Private inference stack, integrations, governance and ongoing operations.',
  },
  {
    name: 'Disconnected / air-gapped',
    fit: 'Restricted environments where no external egress is permitted at all.',
    role: 'Local model, retrieval and tooling with fully isolated controls and offline update paths.',
  },
  {
    name: 'Hybrid / policy router',
    fit: 'Different data classes legitimately need different models and boundaries.',
    role: 'Policy-based routing behind a single enterprise AI gateway, with one audit trail.',
  },
]

export const process = [
  {
    step: 'Connect',
    title: 'Connect',
    desc: 'Identity, source systems and content — wired in with the permissions they already carry.',
  },
  { step: 'Govern', title: 'Govern', desc: 'Policy, DLP, routing rules and audit applied before anything reaches a model.' },
  { step: 'Retrieve', title: 'Retrieve & act', desc: 'Permission-aware retrieval and agents that operate within allow-listed tools.' },
  { step: 'Serve', title: 'Serve', desc: 'The application people use, in the surfaces they already work in.' },
  { step: 'Observe', title: 'Observe', desc: 'Quality, cost, latency and risk measured continuously, with alerts that mean something.' },
]

export const engagement = [
  { week: 'Week 1', focus: 'Use-case discovery', outputs: 'Workflow, data sensitivity, ROI owner, approval blockers, success criteria' },
  { week: 'Week 2', focus: 'Architecture & risk plan', outputs: 'Boundary, access, egress, model choice, data flow, TCO, control matrix' },
  { week: 'Week 3', focus: 'Private pilot build', outputs: 'Retrieval or agent, authentication, guardrails, logging, integration, evaluation' },
  { week: 'Week 4', focus: 'Security review & handoff', outputs: 'Demo, control evidence, test results, business KPI, rollout plan' },
]

export const ladder = [
  { stage: 'Discovery', offer: 'AI Approval & Architecture Review', detail: 'A 30-minute working session on one blocked workflow.', price: 'No charge' },
  { stage: 'Assessment', offer: 'Readiness & Security Assessment', detail: 'Paid engagement producing the architecture and approval plan.', price: '2–3 weeks' },
  { stage: 'Pilot', offer: 'Fixed-scope Secure AI Pilot', detail: 'One workflow, real data, controlled users, measurable criteria.', price: '4–6 weeks' },
  { stage: 'Production', offer: 'Departmental Deployment', detail: 'Rollout, integrations, hardening and security sign-off.', price: 'Scoped' },
  { stage: 'Platform', offer: 'Multi-use-case AI Platform', detail: 'Shared control plane across business units.', price: 'Scoped' },
  { stage: 'Operate', offer: 'Managed AI Operations', detail: 'Monitoring, evaluations, updates and incident support.', price: 'Monthly' },
]

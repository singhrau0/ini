/* Written around what enterprise buyers actually search and ask.
   Rendered with FAQPage schema markup — see src/pages/Faq.jsx. */

export const faqGroups = [
  {
    id: 'company',
    title: 'Company & positioning',
    items: [
      {
        q: 'What does iNikola do?',
        a: 'iNikola is an enterprise AI engineering company. We take an AI use case from idea or stalled proof-of-concept through to a governed, production system — covering strategy, application engineering, retrieval and agents, security and governance, deployment inside your approved boundary, and ongoing operations.',
      },
      {
        q: 'Is iNikola a home automation company?',
        a: 'No. Building and space automation is one product line within a broader enterprise AI business. The majority of our work is enterprise AI engineering: knowledge copilots, retrieval systems, agentic automation and secure AI platforms for regulated and IP-sensitive organisations.',
      },
      {
        q: 'What makes iNikola different from a general AI development agency?',
        a: 'Most agencies can build a prototype. The difficulty in an enterprise is rarely the prototype — it is identity, permissions, data boundary, audit and production ownership. We build those in from the first architecture decision, which is why our systems reach security approval rather than stalling in review.',
      },
      {
        q: 'Where is iNikola based, and do you work with clients outside India?',
        a: 'We are based in Hyderabad, India, and work with organisations across India, the Gulf and further afield. Delivery is remote-first with on-site presence for discovery, security review and go-live where an engagement calls for it.',
      },
      {
        q: 'How large is the team?',
        a: 'A core team of engineers covering AI and machine learning, backend and platform engineering, security, edge systems and product. Engagement teams are formed around the specific architecture a project needs.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security, privacy & private AI',
    items: [
      {
        q: 'What is private AI, and does it mean running models on our own servers?',
        a: 'Private AI means the AI system runs inside a boundary your policy already permits for that data. Sometimes that is an approved enterprise API under the right contractual terms; sometimes a model inside your own VPC; sometimes private cloud, on-premise, or a fully disconnected environment. On-premise is the most expensive option and we recommend it only where policy or regulation genuinely requires it.',
      },
      {
        q: 'Our data is already protected in Azure OpenAI or AWS Bedrock. Why would we need anything more?',
        a: 'Frequently you would not, for that data class. The narrower question is whether that specific architecture is approved for this specific dataset, and whether you can produce an audit trail showing which user asked what, of which model, over which documents. Where the answer is yes, we build on your existing platform rather than replacing it.',
      },
      {
        q: 'How do you stop a RAG system from exposing documents a user should not see?',
        a: 'Permission-aware retrieval. The system inherits access control lists from the source system and applies them as a constraint before retrieval runs, filtered by the signed-in identity — not as a filter after results come back. Combined with SSO, RBAC or ABAC and per-query audit logging, retrieval cannot return content the user could not already open at source.',
      },
      {
        q: 'What is prompt injection, and how do you defend against it?',
        a: 'Prompt injection is instruction text placed where a model will read it — often inside a document that gets retrieved — designed to redirect the model into actions it should not take. Defence is layered: treating retrieved content as untrusted data rather than instructions, constraining what tools an agent may call, requiring human approval on consequential actions, and running an adversarial test corpus continuously rather than reviewing once.',
      },
      {
        q: 'Can AI run in an air-gapped or disconnected environment?',
        a: 'Yes. Open-weight models, the retrieval layer and the tooling around them can run entirely inside an isolated network, with offline paths for model and knowledge updates. The trade-offs are model capability and operational overhead, which is why we scope it against what the data class actually requires.',
      },
      {
        q: 'What audit evidence can you produce for our security team?',
        a: 'Architecture and data-flow documentation, an access and permission control matrix, DLP and egress policy definitions, evaluation and risk test results, prompt-injection test outcomes, and per-query audit logs showing user, query, retrieved sources, model and response.',
      },
    ],
  },
  {
    id: 'services',
    title: 'AI, agents & what we build',
    items: [
      {
        q: 'What is retrieval-augmented generation, and when should an enterprise use it?',
        a: 'RAG retrieves relevant content from your own sources and grounds the model response in it, with citations. Use it when the answer must come from your documents rather than the model\'s training data, when content changes often enough that fine-tuning would go stale, and when you need to show where an answer came from.',
      },
      {
        q: 'What is an AI agent, and how is it different from a chatbot?',
        a: 'A chatbot returns text. An agent takes actions — calling APIs, querying databases, updating records, creating tickets. That difference matters for security: an agent is an execution path into your systems, so it needs least-privilege tool access, allow-listed actions, action logging and human approval on anything consequential.',
      },
      {
        q: 'Do we need a multi-agent system?',
        a: 'Usually not at first. Multiple agents add coordination failure modes, and a single well-scoped agent solves most workflows. Separating planner, executor and reviewer roles is worth the complexity when it measurably improves reliability on a long-running process — not because the architecture sounds advanced.',
      },
      {
        q: 'Should we fine-tune a model or use retrieval?',
        a: 'Start with retrieval. It handles changing content, gives you citations, and is far cheaper to iterate. Fine-tuning is the right answer for consistent formatting, domain vocabulary or a narrow repeated task where prompt engineering has plateaued — and the two are complementary, not alternatives.',
      },
      {
        q: 'What is a small language model, and where does it fit?',
        a: 'A small language model is a compact model that can run cheaply and locally. Used as a general assistant it disappoints. Used as a control layer — classifying intent, detecting sensitive data before egress, extracting structure on ingest, making policy pre-checks — it is fast, inexpensive and never leaves your boundary.',
      },
      {
        q: 'How do you handle hallucinations?',
        a: 'Grounding answers in retrieved sources with citations, measuring accuracy against an evaluation set built with your domain experts, agreeing a quality threshold before launch, and starting with internal decision support rather than customer-facing automation. Where the stakes are high enough, a human approves before output leaves the system.',
      },
    ],
  },
  {
    id: 'engagement',
    title: 'How we engage',
    items: [
      {
        q: 'How does an engagement usually start?',
        a: 'With a 30-minute AI Approval and Architecture Review on one specific workflow you want to deploy but have not been able to get approved. It is a working session, not a sales presentation. From there the usual path is a paid readiness and security assessment, then a fixed-scope pilot.',
      },
      {
        q: 'How long until we see something working?',
        a: 'A fixed-scope pilot runs four to six weeks: week one for use-case discovery, week two for architecture and risk planning, week three to build against real data, and week four for security review and handover with a measured business KPI.',
      },
      {
        q: 'Do you require us to buy GPUs or infrastructure from you?',
        a: 'No. We are not a hardware reseller. Infrastructure and third-party licences are procured by you, in your own accounts, at your own commercial terms. We charge for architecture, implementation, controls, integration and operations.',
      },
      {
        q: 'Who owns the system you build?',
        a: 'You do — code, infrastructure and documentation, delivered into your repositories and cloud accounts. Managed operations is an option you choose, not a dependency we engineer in.',
      },
      {
        q: 'Will you work alongside our internal AI team?',
        a: 'Often that is the best structure. Where an internal team has already built a promising proof-of-concept, our role is the security, governance, integration and productionisation layer that gets it approved and running reliably.',
      },
      {
        q: 'What does an enterprise AI project cost?',
        a: 'It depends on scope, integration surface and deployment boundary. As a shape: a readiness and security assessment is a small fixed engagement, a fixed-scope pilot is a defined four-to-six week project, and production rollout and managed operations are scoped against the workflows in play. We give a written fixed-scope quote before any build starts.',
      },
      {
        q: 'What happens if the pilot does not meet its criteria?',
        a: 'The success criteria are agreed in writing in week one — accuracy, access control, latency, risk tests and a business KPI. If they are not met, you have a documented assessment of why, which is a legitimate outcome. We would rather produce one production reference than a shelf of unconverted demos.',
      },
    ],
  },
]

export const allFaqs = faqGroups.flatMap((g) => g.items)

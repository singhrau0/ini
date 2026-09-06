/* R&D = in development. Nothing here is available to buy or deploy today.
   Every card renders with an explicit "in development" state — see src/pages/RnD.jsx. */

export const rnd = [
  {
    slug: 'policy-router',
    title: 'Policy-Aware Model Router',
    stage: 'Active development',
    horizon: 'Internal alpha',
    thesis:
      'Different data classes should reach different models automatically, decided by policy rather than by whichever endpoint a developer wired in first.',
    exploring: [
      'Automatic data-class detection on inbound prompts using a small classifier model',
      'Routing rules expressed as policy, versioned alongside infrastructure',
      'Cost and latency arbitrage within a policy envelope',
      'Per-route evaluation so a routing change cannot silently degrade quality',
    ],
  },
  {
    slug: 'slm-control-layer',
    title: 'Small Language Models as a Control Layer',
    stage: 'Research',
    horizon: 'Exploratory',
    thesis:
      'Small models are poorly used as general assistants and extremely well used as fast, cheap, local decision-makers in front of a larger model.',
    exploring: [
      'Sensitive-data detection at the gateway before egress',
      'Intent classification and query routing',
      'Structured extraction on document ingest',
      'Policy pre-checks that never leave the customer boundary',
    ],
  },
  {
    slug: 'injection-testbed',
    title: 'Prompt-Injection Test Harness',
    stage: 'Active development',
    horizon: 'Internal tooling',
    thesis:
      'Indirect prompt injection through retrieved documents is the failure mode most enterprise AI systems are least prepared for, and it needs to be tested continuously rather than reviewed once.',
    exploring: [
      'Adversarial corpora seeded into retrieval indexes during testing',
      'Tool-call escalation attempts as regression tests in CI',
      'Scoring a deployed system against a published attack taxonomy',
      'Alerting when a model or prompt change weakens an existing defence',
    ],
  },
  {
    slug: 'agent-observability',
    title: 'Agent Action Observability',
    stage: 'Research',
    horizon: 'Exploratory',
    thesis:
      'Logging a prompt and a response is not observability for a system that takes actions. The unit of interest is the decision, not the message.',
    exploring: [
      'Decision-level tracing across planner, executor and reviewer agents',
      'Replay of an agent run against a changed prompt or model',
      'Attribution of a downstream business error back to a specific agent decision',
      'Rollback primitives for multi-step workflows',
    ],
  },
  {
    slug: 'edge-industrial-ai',
    title: 'Edge AI for Plant Environments',
    stage: 'Research',
    horizon: 'Exploratory',
    thesis:
      'Operational technology networks cannot take a dependency on cloud inference, but they generate exactly the signal density where AI is most useful.',
    exploring: [
      'Inference on constrained hardware inside OT boundaries',
      'Bridging engineering documentation with live sensor context',
      'Offline-first model and knowledge update paths',
      'Safety-envelope constraints on any automated action',
    ],
  },
]

export const rndBySlug = (slug) => rnd.find((r) => r.slug === slug)

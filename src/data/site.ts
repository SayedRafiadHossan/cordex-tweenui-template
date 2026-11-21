/**
 * All page content for the Cortexa template lives here, so the home page and
 * the inner pages share one source. Names, companies, numbers and quotes are
 * placeholders. Photos are free images from Lummi (https://www.lummi.ai/license).
 */

export const AGENT_IMG = (name: string) => `/images/agents/${name}.webp`;
export const STEP_IMG = (name: string) => `/images/steps/${name}.webp`;
export const AVATAR = (name: string) => `/images/people/${name}.webp`;
export const ICON = (slug: string) => `https://cdn.simpleicons.org/${slug}/f5f1e8`;

/* ------------------------------------------------------------------ nav */

/**
 * Navbar pages, in the same order as the home page sections (Platform → Agents →
 * Integrations → Customers → Pricing), then the usual resources and company links.
 * Home is the logo on desktop and the first item in the mobile menu.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/', image: AGENT_IMG('code-reviewer') },
  { label: 'Platform', href: '/platform', image: AGENT_IMG('data-analyst') },
  { label: 'Agents', href: '/agents', image: AGENT_IMG('support-resolver') },
  { label: 'Integrations', href: '/integrations', image: STEP_IMG('connect') },
  { label: 'Customers', href: '/customers', image: AGENT_IMG('sales-sdr') },
  { label: 'Pricing', href: '/pricing', image: STEP_IMG('evals') },
  { label: 'Blog', href: '/blog', image: AGENT_IMG('research-scout') },
  { label: 'About', href: '/about', image: AGENT_IMG('ops-coordinator') },
];

export const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Agent templates', href: '/agents' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Security', href: '/legal/security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Customers', href: '/customers' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Security', href: '/legal/security' },
];

/* --------------------------------------------------------------- agents */

export const AGENT_CATEGORIES = ['All', 'Sales', 'Support', 'Data', 'Engineering', 'Operations', 'Research'] as const;
export type AgentCategory = (typeof AGENT_CATEGORIES)[number];

export const AGENT_TEMPLATES: {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: Exclude<AgentCategory, 'All'>;
  tools: string[];
  saves: string;
}[] = [
  {
    title: 'Sales SDR',
    excerpt: 'Prospects, enriches, books calls',
    image: AGENT_IMG('sales-sdr'),
    imageAlt: 'Two people shaking hands in silhouette against warm city lights',
    category: 'Sales',
    tools: ['hubspot', 'gmail', 'googlecalendar'],
    saves: '14h / week',
  },
  {
    title: 'Support Resolver',
    excerpt: 'Answers tickets from your docs',
    image: AGENT_IMG('support-resolver'),
    imageAlt: 'Smiling support representative wearing a headset',
    category: 'Support',
    tools: ['zendesk', 'intercom', 'notion'],
    saves: '52% of tickets',
  },
  {
    title: 'Data Analyst',
    excerpt: 'SQL, charts and weekly briefs',
    image: AGENT_IMG('data-analyst'),
    imageAlt: 'Glowing analytics charts on a dark screen',
    category: 'Data',
    tools: ['postgresql', 'snowflake', 'googlesheets'],
    saves: '6h / week',
  },
  {
    title: 'Research Scout',
    excerpt: 'Deep web research with sources',
    image: AGENT_IMG('research-scout'),
    imageAlt: 'Person studying alone at a desk in the evening',
    category: 'Research',
    tools: ['notion', 'googledrive', 'confluence'],
    saves: '9h / week',
  },
  {
    title: 'Code Reviewer',
    excerpt: 'Reviews PRs, writes the fix',
    image: AGENT_IMG('code-reviewer'),
    imageAlt: 'Laptop showing code in front of a city at dusk',
    category: 'Engineering',
    tools: ['github', 'linear', 'jira'],
    saves: '30% faster merges',
  },
  {
    title: 'Ops Coordinator',
    excerpt: 'Runs recurring back-office work',
    image: AGENT_IMG('ops-coordinator'),
    imageAlt: 'Operator in a room full of monitoring screens',
    category: 'Operations',
    tools: ['asana', 'airtable', 'gmail'],
    saves: '11h / week',
  },
  {
    title: 'Meeting Notetaker',
    excerpt: 'Summaries, decisions and follow-ups',
    image: STEP_IMG('describe'),
    imageAlt: 'Open notebook with handwritten notes in warm light',
    category: 'Operations',
    tools: ['zoom', 'notion', 'linear'],
    saves: '4h / week',
  },
  {
    title: 'Integration Builder',
    excerpt: 'Wires up APIs from a spec',
    image: STEP_IMG('connect'),
    imageAlt: 'Hands holding glowing fiber optic cables',
    category: 'Engineering',
    tools: ['github', 'vercel', 'supabase'],
    saves: '2 days / integration',
  },
  {
    title: 'Churn Watcher',
    excerpt: 'Flags at-risk accounts early',
    image: STEP_IMG('evals'),
    imageAlt: 'Monitor showing charts on a dark workstation',
    category: 'Data',
    tools: ['stripe', 'hubspot', 'googleanalytics'],
    saves: '−18% churn',
  },
  {
    title: 'Launch Planner',
    excerpt: 'Turns a brief into a launch plan',
    image: STEP_IMG('deploy'),
    imageAlt: 'Rocket launching through clouds at night',
    category: 'Research',
    tools: ['notion', 'figma', 'clickup'],
    saves: '1 week / launch',
  },
];

/** The six shown on the home page. */
export const FEATURED_AGENTS = AGENT_TEMPLATES.slice(0, 6);

/* ---------------------------------------------------------------- steps */

export const STEPS = [
  {
    id: 'step-1',
    title: 'Describe the job',
    description: 'Write the goal in plain English, or start from one of 60+ templates.',
    image: STEP_IMG('describe'),
    imageAlt: 'Open notebook with handwritten notes in warm light',
  },
  {
    id: 'step-2',
    title: 'Connect your tools',
    description: 'One-click access to your CRM, docs, inbox and database, scoped per agent.',
    image: STEP_IMG('connect'),
    imageAlt: 'Hands holding glowing fiber optic cables',
  },
  {
    id: 'step-3',
    title: 'Test with evals',
    description: 'Replay real tasks, compare runs side by side and tune guardrails.',
    image: STEP_IMG('evals'),
    imageAlt: 'Monitor showing charts on a dark workstation',
  },
  {
    id: 'step-4',
    title: 'Deploy anywhere',
    description: 'Run on a schedule, from Slack, by API, or embedded in your product.',
    image: STEP_IMG('deploy'),
    imageAlt: 'Rocket launching through clouds at night',
  },
];

/* --------------------------------------------------------- testimonials */

const q = (quoteBefore: string, quoteHighlight: string, quoteAfter: string) => ({
  quoteBefore,
  quoteHighlight,
  quoteAfter,
});

export const TESTIMONIALS = [
  [
    {
      name: 'Liam Harper',
      jobTitle: 'Head of RevOps, Lumora',
      image: AVATAR('liam'),
      stars: 5,
      ...q('Our SDR agent books', 'more first calls than our whole team did last year.', 'And it never forgets a follow-up.'),
    },
    {
      name: 'Maya Collins',
      jobTitle: 'Support Lead, Halcyon',
      image: AVATAR('maya'),
      stars: 5,
      ...q('Half our tickets now', 'resolve before a human even opens them.', 'Our CSAT went up, not down.'),
    },
  ],
  [
    {
      name: 'Ethan Brooks',
      jobTitle: 'CTO, Vectra',
      image: AVATAR('ethan'),
      stars: 5,
      ...q('Evals are the killer feature.', 'We ship agent changes with the same confidence as code.', ''),
    },
    {
      name: 'Zoe Mitchell',
      jobTitle: 'Product Designer, Quanta',
      image: AVATAR('zoe'),
      stars: 5,
      ...q('I built a research agent in an afternoon,', 'without writing a single line of code.', ''),
    },
  ],
  [
    {
      name: 'Noah Bennett',
      jobTitle: 'VP Operations, Northwind',
      image: AVATAR('noah'),
      stars: 5,
      ...q('Guardrails made legal say yes.', 'Every action is logged and reversible.', 'That was the unlock.'),
    },
    {
      name: 'Ava Chen',
      jobTitle: 'Data Lead, Fieldnote',
      image: AVATAR('ava'),
      stars: 5,
      ...q('The Monday metrics brief', 'writes itself now, with charts.', 'My team got their mornings back.'),
    },
  ],
];

export const RATING = {
  score: '4.9',
  outOf: '/5',
  label: 'Average rating',
  note: 'From 2,400+ teams',
  extraCount: '+2.4k',
  avatars: TESTIMONIALS.flat()
    .slice(0, 3)
    .map((t) => ({ image: t.image })),
  quotes: ['It feels like hiring a team that never sleeps.', 'The most useful AI tool we pay for.'],
};

/* -------------------------------------------------------------- pricing */

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'For builders & side projects',
    description: 'Everything you need to ship your first agents.',
    monthly: 29,
    yearly: 290,
    includedCount: 4,
  },
  {
    id: 'team',
    name: 'Team',
    subtitle: 'For growing teams',
    description: 'Shared agents, evals and approvals for the whole team.',
    monthly: 99,
    yearly: 990,
    includedCount: 7,
  },
  {
    id: 'scale',
    name: 'Scale',
    subtitle: 'For companies running on agents',
    description: 'Higher limits, SSO, audit export and a dedicated engineer.',
    monthly: 349,
    yearly: 3490,
    includedCount: 10,
  },
];

export const PLAN_FEATURES = [
  'Unlimited agent drafts',
  '2,000 agent runs / month',
  '50+ tool integrations',
  'Knowledge base (5 GB)',
  'Evals & run replay',
  'Human approval flows',
  'Multi-agent crews',
  'SSO & role-based access',
  'Audit log export',
  'Dedicated solutions engineer',
];

/** `true` = included, `false` = not included, string = the plan's limit. */
export const COMPARISON: { group: string; rows: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] }[] = [
  {
    group: 'Usage',
    rows: [
      { label: 'Agent runs / month', values: ['2,000', '20,000', 'Custom'] },
      { label: 'Seats', values: ['3', '15', 'Unlimited'] },
      { label: 'Knowledge base', values: ['5 GB', '50 GB', '1 TB'] },
      { label: 'Run history', values: ['30 days', '1 year', 'Unlimited'] },
    ],
  },
  {
    group: 'Building',
    rows: [
      { label: 'Agent templates', values: [true, true, true] },
      { label: 'Tool integrations', values: ['50+', '400+', '400+ & custom'] },
      { label: 'Evals & run replay', values: [true, true, true] },
      { label: 'Multi-agent crews', values: [false, true, true] },
      { label: 'Bring your own model', values: [false, true, true] },
    ],
  },
  {
    group: 'Control & security',
    rows: [
      { label: 'Human approval flows', values: [false, true, true] },
      { label: 'SSO / SAML', values: [false, false, true] },
      { label: 'Role-based access', values: [false, true, true] },
      { label: 'Audit log export', values: [false, false, true] },
      { label: 'EU or US data residency', values: [false, true, true] },
    ],
  },
  {
    group: 'Support',
    rows: [
      { label: 'Community & email', values: [true, true, true] },
      { label: 'Priority support', values: [false, true, true] },
      { label: 'Dedicated solutions engineer', values: [false, false, true] },
    ],
  },
];

/* ------------------------------------------------------------------ faq */

export const FAQS = [
  {
    question: 'What is an AI agent, exactly?',
    answer:
      'An agent is an AI model that can plan, use tools like your CRM or inbox, and work toward a goal over many steps, instead of just answering one message.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. Describe the job in plain English and pick tools from a list. Developers can use our TypeScript and Python SDKs for full control.',
  },
  {
    question: 'Which models does Cortexa use?',
    answer:
      'You choose. Use frontier models for hard reasoning and small, fast models for simple steps. The router can pick automatically based on your evals.',
  },
  {
    question: 'Is my data used to train models?',
    answer:
      'Never. Your data stays in your workspace, is encrypted at rest and in transit, and you can host in the EU or US.',
  },
  {
    question: 'How do you stop agents from making mistakes?',
    answer:
      'Guardrails define what an agent may do alone, what needs approval and what is blocked. Every step is traced, and evals catch regressions before you deploy.',
  },
];

export const PRICING_FAQS = [
  {
    question: 'What counts as an agent run?',
    answer:
      'One run is one task an agent starts and finishes, however many steps it takes. Drafts, tests in the editor and eval replays are free.',
  },
  {
    question: 'What happens if I go over my runs?',
    answer:
      'Nothing breaks. Extra runs are billed at your plan rate at the end of the month, and you can set a hard cap so you never pay more than you planned.',
  },
  {
    question: 'Do I pay for the AI models separately?',
    answer:
      'No. Model usage is included in every run. On Team and Scale you can also bring your own model keys and pay the provider directly.',
  },
  {
    question: 'Can I switch plans or cancel anytime?',
    answer:
      'Yes. Upgrades apply immediately and are prorated. Downgrades and cancellations take effect at the end of your billing period.',
  },
  {
    question: 'Do you offer discounts?',
    answer:
      'Yearly billing includes two months free. Startups under two years old and non-profits get 50% off Team for the first year.',
  },
];

/* --------------------------------------------------------- integrations */

export const INTEGRATION_CATEGORIES = ['All', 'Communication', 'Productivity', 'Engineering', 'Data', 'CRM & Sales', 'Support', 'Commerce'] as const;

export const INTEGRATIONS: { name: string; slug: string; category: Exclude<(typeof INTEGRATION_CATEGORIES)[number], 'All'>; blurb: string }[] = [
  { name: 'Gmail', slug: 'gmail', category: 'Communication', blurb: 'Read, draft and send email' },
  { name: 'Discord', slug: 'discord', category: 'Communication', blurb: 'Post updates and answer questions' },
  { name: 'Zoom', slug: 'zoom', category: 'Communication', blurb: 'Join, record and summarise calls' },
  { name: 'WhatsApp', slug: 'whatsapp', category: 'Communication', blurb: 'Reply to customers on chat' },
  { name: 'Telegram', slug: 'telegram', category: 'Communication', blurb: 'Bots and channel updates' },
  { name: 'Notion', slug: 'notion', category: 'Productivity', blurb: 'Search and write pages' },
  { name: 'Google Drive', slug: 'googledrive', category: 'Productivity', blurb: 'Find and read documents' },
  { name: 'Google Sheets', slug: 'googlesheets', category: 'Productivity', blurb: 'Read and update spreadsheets' },
  { name: 'Google Calendar', slug: 'googlecalendar', category: 'Productivity', blurb: 'Book and move meetings' },
  { name: 'Confluence', slug: 'confluence', category: 'Productivity', blurb: 'Answer from your wiki' },
  { name: 'Asana', slug: 'asana', category: 'Productivity', blurb: 'Create and update tasks' },
  { name: 'Trello', slug: 'trello', category: 'Productivity', blurb: 'Move cards across boards' },
  { name: 'ClickUp', slug: 'clickup', category: 'Productivity', blurb: 'Plan and track work' },
  { name: 'Dropbox', slug: 'dropbox', category: 'Productivity', blurb: 'Read and file documents' },
  { name: 'Figma', slug: 'figma', category: 'Productivity', blurb: 'Read frames and comments' },
  { name: 'GitHub', slug: 'github', category: 'Engineering', blurb: 'Review PRs and open fixes' },
  { name: 'GitLab', slug: 'gitlab', category: 'Engineering', blurb: 'Merge requests and pipelines' },
  { name: 'Linear', slug: 'linear', category: 'Engineering', blurb: 'Triage and update issues' },
  { name: 'Jira', slug: 'jira', category: 'Engineering', blurb: 'Create and route tickets' },
  { name: 'Vercel', slug: 'vercel', category: 'Engineering', blurb: 'Check deploys and logs' },
  { name: 'Supabase', slug: 'supabase', category: 'Engineering', blurb: 'Query and update tables' },
  { name: 'PostgreSQL', slug: 'postgresql', category: 'Data', blurb: 'Run read-only SQL' },
  { name: 'MySQL', slug: 'mysql', category: 'Data', blurb: 'Query production replicas' },
  { name: 'MongoDB', slug: 'mongodb', category: 'Data', blurb: 'Search collections' },
  { name: 'Snowflake', slug: 'snowflake', category: 'Data', blurb: 'Warehouse analytics' },
  { name: 'Airtable', slug: 'airtable', category: 'Data', blurb: 'Read and write bases' },
  { name: 'Google Analytics', slug: 'googleanalytics', category: 'Data', blurb: 'Traffic and conversion data' },
  { name: 'HubSpot', slug: 'hubspot', category: 'CRM & Sales', blurb: 'Enrich and update deals' },
  { name: 'Mailchimp', slug: 'mailchimp', category: 'CRM & Sales', blurb: 'Build and send campaigns' },
  { name: 'Zendesk', slug: 'zendesk', category: 'Support', blurb: 'Answer and route tickets' },
  { name: 'Intercom', slug: 'intercom', category: 'Support', blurb: 'Reply in live chat' },
  { name: 'Stripe', slug: 'stripe', category: 'Commerce', blurb: 'Look up payments and refunds' },
  { name: 'Shopify', slug: 'shopify', category: 'Commerce', blurb: 'Orders, products and stock' },
];

/* ------------------------------------------------------------ customers */

export const CASE_STUDIES = [
  {
    company: 'Halcyon',
    industry: 'Consumer fintech · 400 people',
    title: 'Halcyon resolves half its support queue before a human opens it',
    summary:
      'A Support Resolver agent answers from Halcyon’s help centre and policy docs, and hands anything risky to a person with the context already gathered.',
    image: AGENT_IMG('support-resolver'),
    imageAlt: 'Smiling support representative wearing a headset',
    metrics: [
      ['52%', 'tickets resolved by agents'],
      ['9s', 'median first response'],
      ['+0.4', 'CSAT points'],
    ],
  },
  {
    company: 'Lumora',
    industry: 'B2B SaaS · 120 people',
    title: 'Lumora’s SDR agent books more first calls than its whole team did',
    summary:
      'The agent researches accounts, writes a personal first line for every lead and books meetings straight into reps’ calendars.',
    image: AGENT_IMG('sales-sdr'),
    imageAlt: 'Two people shaking hands in silhouette against warm city lights',
    metrics: [
      ['3.1×', 'more first calls'],
      ['14h', 'saved per rep, per week'],
      ['0', 'missed follow-ups'],
    ],
  },
  {
    company: 'Fieldnote',
    industry: 'Data platform · 60 people',
    title: 'Fieldnote’s Monday metrics brief now writes itself',
    summary:
      'A Data Analyst agent queries the warehouse, charts the week and posts a plain-English brief to Slack before anyone logs on.',
    image: AGENT_IMG('data-analyst'),
    imageAlt: 'Glowing analytics charts on a dark screen',
    metrics: [
      ['6h', 'saved every week'],
      ['100%', 'on-time briefs'],
      ['2', 'anomalies caught early'],
    ],
  },
];

/* ---------------------------------------------------------------- about */

export const VALUES = [
  { title: 'Earn trust, step by step', body: 'Agents get more freedom only after they prove they can handle it. We build the same way.' },
  { title: 'Show the work', body: 'Every thought, tool call and cost is visible. Nothing important happens in a black box.' },
  { title: 'Small team, big leverage', body: 'We run Cortexa with Cortexa. Our own agents handle support, research and ops.' },
  { title: 'Craft over noise', body: 'We would rather ship one feature that feels inevitable than ten that feel bolted on.' },
];

export const TEAM = [
  { name: 'Amara Okafor', role: 'Co-founder & CEO' },
  { name: 'Daniel Reyes', role: 'Co-founder & CTO' },
  { name: 'Hana Sato', role: 'Head of Research' },
  { name: 'Marcus Lindqvist', role: 'Head of Engineering' },
  { name: 'Priya Natarajan', role: 'Head of Product' },
  { name: 'Tomás Ferreira', role: 'Head of Design' },
  { name: 'Grace Whitfield', role: 'Head of Customer Success' },
  { name: 'Yusuf Demir', role: 'Head of Security' },
];

export const MILESTONES = [
  ['2024', 'Founded in a spare room with one agent that answered our own support email.'],
  ['2025', 'Seed round, first 100 teams, and the first version of evals.'],
  ['2026', 'Multi-agent crews, 400+ integrations and 2,400 teams in production.'],
];

/* -------------------------------------------------------------- careers */

export const PERKS = [
  ['Remote-first', 'Work from anywhere within ±4 hours of UTC, with twice-yearly team weeks.'],
  ['Real ownership', 'Meaningful equity for everyone, with a 10-year exercise window.'],
  ['Health, covered', 'Full medical, dental and vision for you and your family.'],
  ['Learning budget', '$2,000 a year for books, courses and conferences.'],
  ['Time to recharge', '30 days off, plus the last week of the year for everyone.'],
  ['Great gear', 'A laptop of your choice and $1,000 to set up your home office.'],
];

export const ROLES = [
  { title: 'Senior Software Engineer, Agent Runtime', team: 'Engineering', location: 'Remote (EU)', type: 'Full-time' },
  { title: 'Software Engineer, Integrations', team: 'Engineering', location: 'Remote (Americas)', type: 'Full-time' },
  { title: 'Research Engineer, Evals', team: 'Research', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote (EU)', type: 'Full-time' },
  { title: 'Solutions Engineer', team: 'Customer Success', location: 'New York or Remote', type: 'Full-time' },
  { title: 'Developer Advocate', team: 'Marketing', location: 'Remote', type: 'Full-time' },
];

/* ------------------------------------------------------------ changelog */

export const CHANGELOG = [
  {
    version: '3.4',
    date: 'November 12, 2026',
    title: 'Multi-agent crews are generally available',
    tag: 'New',
    items: [
      'Chain specialist agents into one workflow, with hand-offs you can inspect step by step.',
      'Crews share a scratchpad, so later agents see earlier findings without re-running tools.',
      'New “Research → Write → Review” starter crew.',
    ],
  },
  {
    version: '3.3',
    date: 'October 28, 2026',
    title: 'Eval suites from real traffic',
    tag: 'Improved',
    items: [
      'Turn any week of production runs into a regression suite in one click.',
      'Side-by-side diffs now highlight the exact step where two runs diverged.',
    ],
  },
  {
    version: '3.2',
    date: 'October 9, 2026',
    title: 'Approval flows in Slack',
    tag: 'New',
    items: [
      'Approve, edit or reject an agent’s action straight from a Slack message.',
      'Approvals time out safely: if nobody answers, the action is skipped and logged.',
    ],
  },
  {
    version: '3.1',
    date: 'September 18, 2026',
    title: 'Model router',
    tag: 'New',
    items: [
      'Let Cortexa pick the cheapest model that passes your evals, per step.',
      'Average cost per run dropped 38% across early-access teams.',
    ],
  },
  {
    version: '3.0',
    date: 'August 30, 2026',
    title: 'A faster, calmer editor',
    tag: 'Improved',
    items: [
      'The agent editor loads 3× faster and keeps your place between sessions.',
      'Keyboard shortcuts for everything, and a new command palette.',
    ],
  },
  {
    version: '2.9',
    date: 'August 4, 2026',
    title: 'EU data residency',
    tag: 'Security',
    items: ['Host your workspace, knowledge base and run history entirely in the EU (Frankfurt).'],
  },
];

/* ----------------------------------------------------------------- blog */

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export const POSTS: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  body: PostBlock[];
}[] = [
  {
    slug: 'agents-that-earn-trust',
    title: 'Agents that earn trust: a practical guide to guardrails',
    excerpt: 'How to give an agent real responsibility without losing sleep, with the rules our customers actually use.',
    category: 'Guides',
    date: 'November 14, 2026',
    readTime: '7 min read',
    image: AGENT_IMG('ops-coordinator'),
    imageAlt: 'Operator in a room full of monitoring screens',
    author: 'Yusuf Demir',
    authorRole: 'Head of Security',
    body: [
      { type: 'p', text: 'The first question every team asks before putting an agent in production is not “how smart is it?” but “what happens when it is wrong?”. Guardrails are how you answer that question before it becomes a problem.' },
      { type: 'h2', text: 'Start with three buckets' },
      { type: 'p', text: 'Every action an agent can take falls into one of three buckets: things it may do alone, things that need a human to approve, and things it may never do. Write these down before you write a single prompt.' },
      { type: 'list', items: ['Alone: reading data, drafting, searching, summarising.', 'With approval: sending external email, issuing refunds, changing records.', 'Never: deleting data, changing permissions, anything irreversible.'] },
      { type: 'h2', text: 'Widen the circle slowly' },
      { type: 'p', text: 'Once an agent has handled a few hundred approvals without a correction, move that action into the “alone” bucket. Trust is earned one step at a time, and your audit log is the proof.' },
      { type: 'quote', text: 'Guardrails are not a brake. They are what lets you take your foot off it.' },
      { type: 'p', text: 'The teams who get the most out of agents are not the ones with the cleverest prompts. They are the ones with the clearest rules.' },
    ],
  },
  {
    slug: 'evals-from-real-traffic',
    title: 'Why your evals should come from real traffic',
    excerpt: 'Synthetic test sets miss the weird stuff. Here is how to build an eval suite from the tasks your agents really see.',
    category: 'Engineering',
    date: 'November 2, 2026',
    readTime: '6 min read',
    image: STEP_IMG('evals'),
    imageAlt: 'Monitor showing charts on a dark workstation',
    author: 'Hana Sato',
    authorRole: 'Head of Research',
    body: [
      { type: 'p', text: 'Hand-written test cases are a fine place to start, but they reflect what you imagine users will ask. Real traffic reflects what they actually ask, typos, edge cases and all.' },
      { type: 'h2', text: 'Sample, label, replay' },
      { type: 'list', items: ['Sample a week of production runs, weighted toward failures and escalations.', 'Label the right outcome for each, ideally with the person who handled it.', 'Replay the set against every change to prompts, tools or models.'] },
      { type: 'p', text: 'The result is a suite that gets harder exactly where your agent is weakest, which is the only place a test suite earns its keep.' },
      { type: 'quote', text: 'An eval you did not get from production is a guess about production.' },
    ],
  },
  {
    slug: 'the-monday-brief',
    title: 'The Monday brief: how Fieldnote automated its weekly metrics',
    excerpt: 'A small data team, a warehouse full of events and one agent that now writes the brief everyone reads first.',
    category: 'Customers',
    date: 'October 21, 2026',
    readTime: '5 min read',
    image: AGENT_IMG('data-analyst'),
    imageAlt: 'Glowing analytics charts on a dark screen',
    author: 'Grace Whitfield',
    authorRole: 'Head of Customer Success',
    body: [
      { type: 'p', text: 'Every Monday, Fieldnote’s data lead used to spend the morning pulling numbers, building charts and writing the same paragraph about activation. Now an agent does it before anyone logs on.' },
      { type: 'h2', text: 'What the agent does' },
      { type: 'list', items: ['Runs a fixed set of read-only SQL queries against the warehouse.', 'Compares the week with the last four and flags anything unusual.', 'Writes a short, plain-English brief with three charts and posts it to Slack.'] },
      { type: 'p', text: 'The team reviewed every brief for the first month. By week five they stopped, because there was nothing left to fix.' },
    ],
  },
  {
    slug: 'choosing-models-per-step',
    title: 'Choosing the right model for every step',
    excerpt: 'Frontier models for hard reasoning, small models for simple steps. How the router decides, and how to steer it.',
    category: 'Product',
    date: 'October 8, 2026',
    readTime: '4 min read',
    image: AGENT_IMG('code-reviewer'),
    imageAlt: 'Laptop showing code in front of a city at dusk',
    author: 'Priya Natarajan',
    authorRole: 'Head of Product',
    body: [
      { type: 'p', text: 'Not every step in an agent’s plan needs your most capable model. Extracting a date from an email does not need the same horsepower as planning a migration.' },
      { type: 'h2', text: 'How the router works' },
      { type: 'p', text: 'For each step, the router tries the smallest model that has passed your evals for that kind of step, and escalates only when confidence drops. You can pin a model to any step if you want full control.' },
      { type: 'quote', text: 'The cheapest model that passes your evals is the right model.' },
    ],
  },
  {
    slug: 'our-first-agent',
    title: 'The first agent we ever shipped was for ourselves',
    excerpt: 'Before Cortexa had customers, it had one job: answer our own support inbox. Here is what that taught us.',
    category: 'Company',
    date: 'September 24, 2026',
    readTime: '5 min read',
    image: AGENT_IMG('research-scout'),
    imageAlt: 'Person studying alone at a desk in the evening',
    author: 'Amara Okafor',
    authorRole: 'Co-founder & CEO',
    body: [
      { type: 'p', text: 'In the spare room where Cortexa started, there were two of us and one support inbox. The first agent we built answered that inbox, badly at first, then well.' },
      { type: 'p', text: 'Everything in the product today traces back to a lesson from those months: show every step, ask before acting, and measure before you trust.' },
    ],
  },
  {
    slug: 'connecting-tools-safely',
    title: 'Connecting tools safely: scoped access for agents',
    excerpt: 'Why every agent gets its own keys, why most should be read-only, and how to grant more when it is earned.',
    category: 'Guides',
    date: 'September 10, 2026',
    readTime: '6 min read',
    image: STEP_IMG('connect'),
    imageAlt: 'Hands holding glowing fiber optic cables',
    author: 'Daniel Reyes',
    authorRole: 'Co-founder & CTO',
    body: [
      { type: 'p', text: 'An agent should have exactly the access its job needs, and no more. That sounds obvious, until you notice how many integrations default to “full access”.' },
      { type: 'h2', text: 'Our rules of thumb' },
      { type: 'list', items: ['One set of credentials per agent, never shared.', 'Read-only by default; write access is a deliberate upgrade.', 'Every write action is logged with the run that caused it.'] },
    ],
  },
];

/* ---------------------------------------------------------------- legal */

export const LEGAL_DOCS: Record<string, { title: string; updated: string; intro: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'November 1, 2026',
    intro: 'This template policy explains how a product like Cortexa might collect, use and protect personal data. Replace it with your own policy, reviewed by a lawyer, before you launch.',
    sections: [
      { heading: 'What we collect', body: 'Account details you give us (name, email, company), content you connect to the workspace, and usage data such as pages visited and features used.' },
      { heading: 'How we use it', body: 'To run the service, keep it secure, provide support and improve the product. We never sell personal data, and we never use your content to train models.' },
      { heading: 'Where it lives', body: 'Data is stored with our hosting providers in the region you choose (EU or US), encrypted in transit and at rest.' },
      { heading: 'Your rights', body: 'You can access, correct, export or delete your data at any time from your workspace settings, or by contacting us.' },
      { heading: 'Contact', body: 'Questions about privacy can be sent to privacy@cortexa.ai.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'November 1, 2026',
    intro: 'These template terms show the shape of an agreement for a product like Cortexa. Replace them with your own terms, reviewed by a lawyer, before you launch.',
    sections: [
      { heading: 'Using the service', body: 'You must be authorised to accept these terms for your organisation, keep your credentials safe and use the service lawfully.' },
      { heading: 'Your content', body: 'You own the content you bring and the output your agents create. You grant us the rights needed to run the service for you.' },
      { heading: 'Agents and actions', body: 'You decide what your agents may do. You are responsible for reviewing the actions you allow them to take on your behalf.' },
      { heading: 'Billing', body: 'Paid plans are billed in advance, monthly or yearly. Usage above your plan is billed at the end of each month.' },
      { heading: 'Ending the agreement', body: 'You can cancel at any time. We may suspend accounts that break these terms, with notice where possible.' },
    ],
  },
  security: {
    title: 'Security',
    updated: 'November 1, 2026',
    intro: 'An overview of the security practices a product like Cortexa would follow. Replace it with your own details before you launch.',
    sections: [
      { heading: 'Encryption', body: 'All data is encrypted in transit with TLS 1.3 and at rest with AES-256. Credentials for connected tools are stored in a dedicated secrets vault.' },
      { heading: 'Isolation', body: 'Every workspace is logically isolated, and every agent runs with its own scoped credentials.' },
      { heading: 'Access control', body: 'SSO, SAML and role-based access on Scale. Production access for staff is time-limited, approved and logged.' },
      { heading: 'Monitoring & audit', body: 'Every agent action is traced and can be exported to your SIEM. We run continuous monitoring and annual third-party penetration tests.' },
      { heading: 'Reporting a vulnerability', body: 'Please report security issues to security@cortexa.ai. We respond within one business day.' },
    ],
  },
};

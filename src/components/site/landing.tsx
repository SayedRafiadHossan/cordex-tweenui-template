"use client";

import NavbarPillGlide from "@/components/tweenui/navbar-pill-glide";
import CardSpotlightGrid from "@/components/tweenui/card-spotlight-grid";
import ProcessStickySteps from "@/components/tweenui/process-sticky-steps";
import ColumnDrift from "@/components/tweenui/column-drift";
import PricingPlanSwitch from "@/components/tweenui/pricing-plan-switch";
import FaqAccordion from "@/components/tweenui/faq-accordion";
import CtaStarfall from "@/components/tweenui/cta-starfall";
import FooterWordmarkRise from "@/components/tweenui/footer-wordmark-rise";
import Hero from "./hero";
import LogosStats from "./logos-stats";
import Features from "./features";
import LogoMark from "./logo";
import IntegrationsOrbit from "./integrations-orbit";
import { scrollToId } from "./scroll";
import ScrollReveal from "./scroll-reveal";

const IMG = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop`;
const AVATAR = (id: string) =>
  `https://images.unsplash.com/${id}?w=96&h=96&fit=crop&crop=faces`;

const LOGO = <LogoMark />;

const NAV_LINKS = [
  {
    label: "Home",
    href: "#top",
    image: IMG("photo-1618005182384-a83a8bd57fbe", 900, 700),
  },
  {
    label: "Platform",
    href: "#features",
    image: IMG("photo-1551650975-87deedd944c3", 900, 700),
  },
  {
    label: "Agents",
    href: "#agents",
    image: IMG("photo-1460925895917-afdab827c52f", 900, 700),
  },
  {
    label: "How it works",
    href: "#how",
    image: IMG("photo-1522071820081-009f0129c71c", 900, 700),
  },
  {
    label: "Pricing",
    href: "#pricing",
    image: IMG("photo-1552664730-d307ca884978", 900, 700),
  },
  {
    label: "FAQ",
    href: "#faq",
    image: IMG("photo-1531403009284-440f080d1e12", 900, 700),
  },
];

const AGENT_TEMPLATES = [
  {
    title: "Sales SDR",
    excerpt: "Prospects, enriches, books calls",
    image: IMG("photo-1552664730-d307ca884978"),
    imageAlt: "Sales team planning outreach",
  },
  {
    title: "Support Resolver",
    excerpt: "Answers tickets from your docs",
    image: IMG("photo-1551650975-87deedd944c3"),
    imageAlt: "Support dashboard on a laptop",
  },
  {
    title: "Data Analyst",
    excerpt: "SQL, charts and weekly briefs",
    image: IMG("photo-1460925895917-afdab827c52f"),
    imageAlt: "Analytics dashboard",
  },
  {
    title: "Research Scout",
    excerpt: "Deep web research with sources",
    image: IMG("photo-1618005182384-a83a8bd57fbe"),
    imageAlt: "Abstract 3D shapes",
  },
  {
    title: "Code Reviewer",
    excerpt: "Reviews PRs, writes the fix",
    image: IMG("photo-1531403009284-440f080d1e12"),
    imageAlt: "Engineers in a workshop",
  },
  {
    title: "Ops Coordinator",
    excerpt: "Runs recurring back-office work",
    image: IMG("photo-1522071820081-009f0129c71c"),
    imageAlt: "Team coordinating work",
  },
];

const STEPS = [
  {
    id: "step-1",
    title: "Describe the job",
    description:
      "Write the goal in plain English, or start from one of 60+ templates.",
    image: IMG("photo-1531403009284-440f080d1e12", 800, 520),
    imageAlt: "Team writing goals on a whiteboard",
  },
  {
    id: "step-2",
    title: "Connect your tools",
    description:
      "One-click access to your CRM, docs, inbox and database, scoped per agent.",
    image: IMG("photo-1551650975-87deedd944c3", 800, 520),
    imageAlt: "Connecting apps on a laptop",
  },
  {
    id: "step-3",
    title: "Test with evals",
    description:
      "Replay real tasks, compare runs side by side and tune guardrails.",
    image: IMG("photo-1460925895917-afdab827c52f", 800, 520),
    imageAlt: "Evaluation charts on a dashboard",
  },
  {
    id: "step-4",
    title: "Deploy anywhere",
    description:
      "Run on a schedule, from Slack, by API, or embedded in your product.",
    image: IMG("photo-1522071820081-009f0129c71c", 800, 520),
    imageAlt: "Team celebrating a launch",
  },
];

const q = (
  quoteBefore: string,
  quoteHighlight: string,
  quoteAfter: string,
) => ({ quoteBefore, quoteHighlight, quoteAfter });

const TESTIMONIALS = [
  [
    {
      name: "Liam Harper",
      jobTitle: "Head of RevOps, Lumora",
      image: AVATAR("photo-1500648767791-00dcc994a43e"),
      stars: 5,
      ...q(
        "Our SDR agent books",
        "more first calls than our whole team did last year.",
        "And it never forgets a follow-up.",
      ),
    },
    {
      name: "Maya Collins",
      jobTitle: "Support Lead, Halcyon",
      image: AVATAR("photo-1494790108377-be9c29b29330"),
      stars: 5,
      ...q(
        "Half our tickets now",
        "resolve before a human even opens them.",
        "Our CSAT went up, not down.",
      ),
    },
  ],
  [
    {
      name: "Ethan Brooks",
      jobTitle: "CTO, Vectra",
      image: AVATAR("photo-1519085360753-af0119f7cbe7"),
      stars: 5,
      ...q(
        "Evals are the killer feature.",
        "We ship agent changes with the same confidence as code.",
        "",
      ),
    },
    {
      name: "Zoe Mitchell",
      jobTitle: "Product Designer, Quanta",
      image: AVATAR("photo-1438761681033-6461ffad8d80"),
      stars: 5,
      ...q(
        "I built a research agent in an afternoon,",
        "without writing a single line of code.",
        "",
      ),
    },
  ],
  [
    {
      name: "Noah Bennett",
      jobTitle: "VP Operations, Northwind",
      image: AVATAR("photo-1507003211169-0a1dd7228f2d"),
      stars: 5,
      ...q(
        "Guardrails made legal say yes.",
        "Every action is logged and reversible.",
        "That was the unlock.",
      ),
    },
    {
      name: "Ava Chen",
      jobTitle: "Data Lead, Fieldnote",
      image: AVATAR("photo-1544005313-94ddf0286df2"),
      stars: 5,
      ...q(
        "The Monday metrics brief",
        "writes itself now, with charts.",
        "My team got their mornings back.",
      ),
    },
  ],
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For builders & side projects",
    description: "Everything you need to ship your first agents.",
    monthly: 29,
    yearly: 290,
    includedCount: 4,
  },
  {
    id: "team",
    name: "Team",
    subtitle: "For growing teams",
    description: "Shared agents, evals and approvals for the whole team.",
    monthly: 99,
    yearly: 990,
    includedCount: 7,
  },
  {
    id: "scale",
    name: "Scale",
    subtitle: "For companies running on agents",
    description: "Higher limits, SSO, audit export and a dedicated engineer.",
    monthly: 349,
    yearly: 3490,
    includedCount: 10,
  },
];

const PLAN_FEATURES = [
  "Unlimited agent drafts",
  "2,000 agent runs / month",
  "50+ tool integrations",
  "Knowledge base (5 GB)",
  "Evals & run replay",
  "Human approval flows",
  "Multi-agent crews",
  "SSO & role-based access",
  "Audit log export",
  "Dedicated solutions engineer",
];

const FAQS = [
  {
    question: "What is an AI agent, exactly?",
    answer:
      "An agent is an AI model that can plan, use tools like your CRM or inbox, and work toward a goal over many steps, instead of just answering one message.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Describe the job in plain English and pick tools from a list. Developers can use our TypeScript and Python SDKs for full control.",
  },
  {
    question: "Which models does Cortexa use?",
    answer:
      "You choose. Use frontier models for hard reasoning and small, fast models for simple steps. The router can pick automatically based on your evals.",
  },
  {
    question: "Is my data used to train models?",
    answer:
      "Never. Your data stays in your workspace, is encrypted at rest and in transit, and you can host in the EU or US.",
  },
  {
    question: "How do you stop agents from making mistakes?",
    answer:
      "Guardrails define what an agent may do alone, what needs approval and what is blocked. Every step is traced, and evals catch regressions before you deploy.",
  },
];

export default function Landing() {
  return (
    <NavbarPillGlide
      brand="Cortexa"
      logo={LOGO}
      homeHref="#top"
      currentHref="#top"
      links={NAV_LINKS}
      primaryAction={{ label: "Start free", href: "#pricing" }}
      secondaryAction={{ label: "Book a demo", href: "#cta" }}
      socials={[
        { label: "GitHub", href: "https://github.com", icon: "github" },
        { label: "X", href: "https://x.com", icon: "x" },
        { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      ]}
      email="hello@cortexa.ai"
    >
      <main>
        <Hero />
        <LogosStats />
        <Features />

        <div id="agents" className="scroll-mt-20">
          <CardSpotlightGrid
            title={
              <>
                Start from a{" "}
                <span className="cx-gradient-text">ready-made agent</span>
              </>
            }
            description="Battle-tested templates for the jobs teams automate first. Clone one, connect your tools, and it is live in minutes."
            projects={AGENT_TEMPLATES}
          />
        </div>

        <section id="how" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div data-reveal-stagger className="mx-auto mb-16 max-w-2xl text-center">
              <p className="text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase">
                How it works
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                From idea to working agent in an afternoon
              </h2>
            </div>
            <ProcessStickySteps
              title={
                <>
                  Ship your first agent in{" "}
                  <span className="text-[#ecd9b0]">4 simple steps</span>
                </>
              }
              steps={STEPS}
            />
          </div>
        </section>

        <IntegrationsOrbit />

        <ColumnDrift
          id="customers"
          title="Teams that put agents to work"
          description="Results from teams running Cortexa agents in production every day."
          columns={TESTIMONIALS}
          rating={{
            score: "4.9",
            outOf: "/5",
            label: "Average rating",
            note: "From 2,400+ teams",
            extraCount: "+2.4k",
            avatars: TESTIMONIALS.flat()
              .slice(0, 3)
              .map((t) => ({ image: t.image })),
            quotes: [
              "It feels like hiring a team that never sleeps.",
              "The most useful AI tool we pay for.",
            ],
          }}
        />

        <section id="pricing" className="scroll-mt-24 py-24">
          <PricingPlanSwitch
            plans={PLANS}
            features={PLAN_FEATURES}
            eyebrow="Pricing"
            heading="Simple pricing that scales with your agents"
            description="Start free for 14 days. No credit card. Switch to yearly and get two months free."
            ctaText="Start 14-day free trial"
            ctaHref="#cta"
          />
        </section>

        <section id="faq" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div data-reveal-stagger>
              <p className="text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Questions, answered
              </h2>
              <p className="mt-5 max-w-sm text-[#f5f1e8]/60">
                Can&apos;t find what you need? Our team replies in under an
                hour, and our support agent replies in seconds.
              </p>
            </div>
            <FaqAccordion
              data-reveal-stagger
              items={FAQS}
              defaultOpen={0}
              className="max-w-none"
            />
          </div>
        </section>

        <div id="cta" className="scroll-mt-20">
          <CtaStarfall
            title={
              <>
                Hire your first{" "}
                <span className="cx-gradient-text">AI teammate</span> today
              </>
            }
            description="Join 2,400+ teams handing their busywork to Cortexa agents. Free for 14 days."
            action={{
              label: "Start building free",
              onClick: () => scrollToId("pricing"),
            }}
          />
        </div>
      </main>
      <ScrollReveal />

      <FooterWordmarkRise
        brand="Cortexa"
        logo={LOGO}
        description="The platform for AI agents that plan, act and report back, safely."
        columns={[
          {
            heading: "Product",
            links: [
              { label: "Platform", href: "#features" },
              { label: "Agent templates", href: "#agents" },
              { label: "Integrations", href: "#integrations" },
              { label: "Pricing", href: "#pricing" },
            ],
          },
          {
            heading: "Developers",
            links: [
              { label: "Docs", href: "#" },
              { label: "SDKs", href: "#" },
              { label: "API status", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Customers", href: "#customers" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#cta" },
            ],
          },
        ]}
        socials={[
          { label: "X", href: "https://x.com", icon: "x" },
          { label: "GitHub", href: "https://github.com", icon: "github" },
          { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
        ]}
        legal={[
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Security", href: "#" },
        ]}
        copyright="© 2026 Cortexa, Inc."
      />
    </NavbarPillGlide>
  );
}

import type { Metadata } from 'next';
import IntegrationsOrbit from '@/components/site/integrations-orbit';
import IntegrationDirectory from '@/components/site/integration-directory';
import CodeCard from '@/components/site/code-card';
import PageCta from '@/components/site/page-cta';
import { PageHero, Section, SectionHeader } from '@/components/site/page-hero';
import { INTEGRATIONS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Integrations | Cortexa',
  description: 'Connect Cortexa agents to the tools you already use, with scoped, revocable access.',
};

const MCP_SAMPLE = `// cortexa.config.ts
export default {
  tools: [
    // Any OpenAPI spec becomes a set of tools
    { openapi: 'https://api.acme.com/openapi.json', auth: 'oauth' },

    // Or plug in an MCP server you already run
    { mcp: 'https://mcp.acme.internal', scopes: ['orders:read'] },
  ],
};`;

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title={
          <>
            Plugs into the tools <span className="cx-gradient-text">you already use</span>
          </>
        }
        description={`${INTEGRATIONS.length} featured integrations, 400+ in total. Agents read, write and take action across your stack, and only touch what you allow.`}
      />

      <IntegrationsOrbit />

      <Section>
        <SectionHeader eyebrow="Directory" title="Find your stack" className="mb-12" />
        <IntegrationDirectory />
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Bring your own tools"
            title="Anything with an API is a tool"
            description="Point Cortexa at an OpenAPI spec or an MCP server and your agents can use it in minutes, with the same scopes, approvals and audit trail as built-in integrations."
            align="left"
          />
          <CodeCard filename="cortexa.config.ts" code={MCP_SAMPLE} />
        </div>
      </Section>

      <PageCta
        title={
          <>
            Connect your stack <span className="cx-gradient-text">in minutes</span>
          </>
        }
        description="One click for popular tools, one line of config for everything else."
        label="Start building free"
        href="/pricing"
      />
    </>
  );
}

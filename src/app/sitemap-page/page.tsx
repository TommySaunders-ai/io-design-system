import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Complete Sitemap — IO Design System',
  description: 'Every page, component, foundation, pattern, and layout across the entire IO Design System platform.',
}

const DOMAIN = 'https://io-design-system.vercel.app'

/* ═══════════════════════════════════════════════════════
 * DATA — EVERY PAGE IN THE ENTIRE REPO
 * ═══════════════════════════════════════════════════════ */

interface PageEntry {
  title: string
  path: string
  description?: string
}

interface Section {
  title: string
  icon: string
  description: string
  pages: PageEntry[]
}

const sections: Section[] = [
  /* ── GETTING STARTED ── */
  {
    title: 'Getting Started',
    icon: 'GS',
    description: 'Core pages — home, guides, changelog, and roadmap',
    pages: [
      { title: 'Home', path: '/', description: 'Landing page — design system overview and quick links' },
      { title: 'Changelog', path: '/changelog', description: 'Version history and release notes' },
      { title: 'Design Principles', path: '/design-principles', description: 'Core design philosophy and guiding principles' },
      { title: 'Quick Start', path: '/quick-start', description: 'Getting started guide for developers' },
      { title: 'Roadmap', path: '/roadmap', description: 'Planned features and upcoming releases' },
      { title: 'Sitemap', path: '/sitemap-page', description: 'This page — complete site directory' },
    ],
  },

  /* ── COMPONENTS ── */
  {
    title: 'Components',
    icon: 'CO',
    description: 'UI components — buttons, inputs, cards, modals, tables, and more',
    pages: [
      { title: 'Alert', path: '/components/alert', description: 'Contextual feedback messages for user actions' },
      { title: 'Badge', path: '/components/badge', description: 'Status indicators and count labels' },
      { title: 'Button', path: '/components/button', description: 'Primary, secondary, ghost, and icon button variants' },
      { title: 'Card', path: '/components/card', description: 'Content containers with optional header, body, and footer' },
      { title: 'Checkbox', path: '/components/checkbox', description: 'Selection control for boolean values' },
      { title: 'Icon', path: '/components/icon', description: 'Icon library and usage guidelines' },
      { title: 'Input', path: '/components/input', description: 'Text input fields with labels and validation' },
      { title: 'Modal', path: '/components/modal', description: 'Dialog overlays for focused interactions' },
      { title: 'Progress', path: '/components/progress', description: 'Progress bars and loading indicators' },
      { title: 'Select', path: '/components/select', description: 'Dropdown selection menus' },
      { title: 'Skeleton', path: '/components/skeleton', description: 'Placeholder loading states for content' },
      { title: 'Table', path: '/components/table', description: 'Data tables with sorting and pagination' },
      { title: 'Tabs', path: '/components/tabs', description: 'Tabbed navigation for switching views' },
      { title: 'Tag', path: '/components/tag', description: 'Labels for categorization and filtering' },
      { title: 'Toggle', path: '/components/toggle', description: 'On/off switch for binary settings' },
      { title: 'Tooltip', path: '/components/tooltip', description: 'Contextual help text on hover' },
    ],
  },

  /* ── FOUNDATIONS ── */
  {
    title: 'Foundations',
    icon: 'FN',
    description: 'Design tokens — colors, typography, spacing, shadows, icons, and radius',
    pages: [
      { title: 'Colors', path: '/foundations/colors', description: 'Color palette, semantic tokens, and usage guidelines' },
      { title: 'Icons', path: '/foundations/icons', description: 'Icon set, sizing, and accessibility' },
      { title: 'Radius', path: '/foundations/radius', description: 'Border radius scale and rounding tokens' },
      { title: 'Shadows', path: '/foundations/shadows', description: 'Elevation and shadow tokens' },
      { title: 'Spacing', path: '/foundations/spacing', description: 'Spacing scale and layout rhythm' },
      { title: 'Typography', path: '/foundations/typography', description: 'Type scale, font families, and text styles' },
    ],
  },

  /* ── LAYOUTS ── */
  {
    title: 'Layouts',
    icon: 'LY',
    description: 'Page layout patterns — dashboards, forms, and page shells',
    pages: [
      { title: 'Dashboard', path: '/layouts/dashboard', description: 'Multi-panel dashboard layout with sidebar and grid' },
      { title: 'Form', path: '/layouts/form', description: 'Form layout with validation and field grouping' },
      { title: 'Page Layout', path: '/layouts/page-layout', description: 'Standard page shell with header, content, and footer' },
    ],
  },

  /* ── PATTERNS ── */
  {
    title: 'Patterns',
    icon: 'PT',
    description: 'Visual patterns — backgrounds, effects, hover states, and grids',
    pages: [
      { title: 'Dot Background', path: '/patterns/dot-background', description: 'Subtle dot grid background pattern' },
      { title: 'Frosted Glass', path: '/patterns/frosted-glass', description: 'Glassmorphism blur and transparency effect' },
      { title: 'Glow Focus', path: '/patterns/glow-focus', description: 'Glowing focus ring for interactive elements' },
      { title: 'Gradient Actions', path: '/patterns/gradient-actions', description: 'Gradient-styled action buttons and CTAs' },
      { title: 'Hover Lift', path: '/patterns/hover-lift', description: 'Elevated hover state with shadow and transform' },
      { title: 'Masonry Grid', path: '/patterns/masonry-grid', description: 'Dynamic masonry layout for mixed-size content' },
      { title: 'Status Lifecycle', path: '/patterns/status-lifecycle', description: 'Status badge progression and state management' },
    ],
  },

  /* ── FEED BUILDER ── */
  {
    title: 'Feed Builder',
    icon: 'FB',
    description: 'IO Feed Builder — source feeds, creative feeds, Notion integration, and publishing',
    pages: [
      { title: 'Overview', path: '/feed-builder/overview', description: 'Feed Builder product overview and architecture' },
      { title: 'Source Feed', path: '/feed-builder/source-feed', description: 'Ingest and manage source content from Notion databases' },
      { title: 'Creative Feed', path: '/feed-builder/creative-feed', description: 'Transform source content into platform-ready creatives' },
      { title: 'Notion Connect', path: '/feed-builder/notion-connect', description: 'Connect and sync Notion databases' },
      { title: 'Publish', path: '/feed-builder/publish', description: 'Publish and distribute content across channels' },
    ],
  },
]

/* ═══════════════════════════════════════════════════════
 * PAGE COUNT
 * ═══════════════════════════════════════════════════════ */

const totalPages = sections.reduce((sum, s) => sum + s.pages.length, 0)

/* ═══════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════ */

export default function SitemapPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sitemap-toc-link { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); }
        .sitemap-toc-link:hover { border-color: rgba(29,185,84,0.3); background: rgba(255,255,255,0.04); }
        .sitemap-row { border-top: 1px solid rgba(255,255,255,0.03); }
        .sitemap-row:hover { background: rgba(255,255,255,0.02); }
        .sitemap-page-link { color: #ffffff; }
        .sitemap-page-link:hover { color: #1db954; }
        .sitemap-url-link { font-family: monospace; color: rgba(74,222,128,0.8); text-decoration-color: rgba(29,185,84,0.2); }
        .sitemap-url-link:hover { color: #1db954; text-decoration-color: rgba(29,185,84,0.5); }
      `}} />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(29,185,84,0.06) 0%, transparent 60%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'monospace', color: 'rgba(134,134,139,0.7)' }}>
            io-design-system.vercel.app
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ color: '#ffffff' }}>
            Complete Sitemap
          </h1>
          <p className="text-lg max-w-2xl mb-10" style={{ color: 'rgba(134,134,139,0.7)' }}>
            Every page, component, foundation, pattern, and layout across the entire IO Design System platform.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            <StatCard label="Total Pages" value={totalPages} />
            <StatCard label="Sections" value={sections.length} />
            <StatCard label="Components" value={sections.find(s => s.title === 'Components')?.pages.length ?? 0} />
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="mx-auto max-w-7xl px-6 py-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 className="text-xs uppercase tracking-[0.2em] mb-6" style={{ fontFamily: 'monospace', color: 'rgba(134,134,139,0.7)' }}>
          Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((section) => (
            <a
              key={section.title}
              href={`#${slugify(section.title)}`}
              className="sitemap-toc-link flex items-center gap-3 px-4 py-3 rounded-lg transition-all group"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-bold"
                style={{ fontFamily: 'monospace', backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(134,134,139,0.7)' }}
              >
                {section.icon}
              </span>
              <div className="min-w-0">
                <span className="text-sm font-medium block truncate" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {section.title}
                </span>
                <span className="text-xs" style={{ color: 'rgba(134,134,139,0.7)' }}>
                  {section.pages.length} pages
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        {sections.map((section) => (
          <section key={section.title} id={slugify(section.title)}>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ fontFamily: 'monospace', backgroundColor: 'rgba(255,255,255,0.05)', color: '#1db954' }}
              >
                {section.icon}
              </span>
              <div>
                <h2 className="text-xl font-semibold" style={{ color: '#ffffff' }}>{section.title}</h2>
                <p className="text-sm" style={{ color: 'rgba(134,134,139,0.7)' }}>{section.description}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="text-xs uppercase tracking-wider" style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'rgba(134,134,139,0.7)' }}>
                    <th className="text-left px-4 py-3 font-medium">Page</th>
                    <th className="text-left px-4 py-3 font-medium">Full URL</th>
                    <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">Description</th>
                    <th className="text-right px-4 py-3 font-medium w-20">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {section.pages.map((page) => {
                    const fullUrl = `${DOMAIN}${page.path}`
                    return (
                      <tr
                        key={page.path}
                        className="sitemap-row transition-colors"
                      >
                        <td className="px-4 py-3">
                          <Link
                            href={page.path}
                            className="sitemap-page-link transition-colors"
                          >
                            {page.title}
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={fullUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sitemap-url-link text-xs underline underline-offset-2 transition-colors break-all"
                          >
                            {fullUrl}
                          </a>
                        </td>
                        <td className="px-4 py-3 hidden lg:table-cell text-xs" style={{ color: 'rgba(134,134,139,0.7)' }}>
                          {page.description || ''}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)' }}>
                            public
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <section className="py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs" style={{ fontFamily: 'monospace', color: 'rgba(134,134,139,0.7)' }}>
            {totalPages} total pages across {sections.length} sections — Generated from filesystem routes
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(134,134,139,0.5)' }}>
            {DOMAIN}/sitemap-page
          </p>
        </div>
      </section>
    </main>
  )
}

/* ── HELPERS ── */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="text-2xl font-semibold tabular-nums" style={{ color: '#ffffff' }}>{value}</div>
      <div className="text-xs mt-0.5" style={{ color: 'rgba(134,134,139,0.7)' }}>{label}</div>
    </div>
  )
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

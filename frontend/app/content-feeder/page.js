import Script from "next/script";

export const metadata = {
  title: "Content Feeder: The 3-Step Process Every Website Needs",
  description:
    "Most websites struggle to scale content consistently. Here's the 3-step Content Feeder process: Planning, Deployment, and Technical Follow-up.",
};

export default function ContentFeederPage() {
  return (
    <div className="max-w-3xl mx-auto">

      {/* Header */}
      <section className="py-16 text-center">
        <span className="inline-block bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Content Feeder
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-950 mb-6 leading-tight">
          The Process Every Website Struggles With
        </h1>
        <p className="text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
          Publishing one article is easy. Building a repeatable system that plans, deploys, and tracks content at scale is where most websites fall short.
        </p>
      </section>

      {/* Steps */}
      <section className="pb-20 space-y-8">

        {/* Step 1 */}
        <div className="bg-white border border-brand-200 rounded-2xl p-8 flex gap-6">
          <div className="shrink-0 w-14 h-14 bg-accent-600 text-white rounded-full font-display font-bold text-2xl flex items-center justify-center">
            1
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 mb-3">Planning</h2>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }} className="mb-6">
              <iframe
                src="https://player.vimeo.com/video/1203720788?h=63363f6444&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="1. Planning Stage - Content Feeder"
              />
            </div>
            <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
            <p className="text-ink-500 leading-relaxed mb-6">
              Before writing a single word, you need a clear content plan that matches your website's goals. The format you choose drives everything - your workflow, your publishing cadence, and the tools you'll need.
            </p>

            <h3 className="font-display text-lg font-bold text-ink-900 mb-2">Breaking News</h3>
            <p className="text-ink-500 leading-relaxed mb-6">
              Breaking news content is built around speed. The goal is to be one of the first sites to publish on a trending topic so Google indexes you early and you capture traffic before competition stacks up. This format requires monitoring tools (Google Alerts, RSS feeds, social signals) and a streamlined publishing process where an article can go from idea to live in under 30 minutes. It works best for niches where news cycles are frequent - finance, tech, sports, local events. The downside: it demands consistency and has a short shelf life.
            </p>

            <h3 className="font-display text-lg font-bold text-ink-900 mb-2">Topical Maps</h3>
            <p className="text-ink-500 leading-relaxed mb-6">
              A topical map is a structured content plan that covers an entire subject area - not just individual keywords, but the full network of topics, subtopics, and supporting articles that signal authority to Google. Instead of publishing random articles, you map out every angle of your niche and fill it systematically. This approach builds topical authority faster than chasing isolated keywords because Google rewards sites that demonstrate deep, comprehensive expertise. It requires upfront research to identify content clusters, pillar pages, and the relationships between them - but once the map is built, your publishing queue is essentially planned for months.
            </p>

            <p className="text-ink-500 leading-relaxed">
              Each format has its own workflow, cadence, and toolset. Getting this wrong wastes time and produces content that never ranks. Getting it right turns your site into a content machine.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white border border-brand-200 rounded-2xl p-8 flex gap-6">
          <div className="shrink-0 w-14 h-14 bg-accent-600 text-white rounded-full font-display font-bold text-2xl flex items-center justify-center">
            2
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 mb-3">Deployment</h2>
            <p className="text-ink-500 leading-relaxed mb-4">
              This is where most website owners hit a wall. Posting one article manually is simple - but what happens when you need to publish 50, 100, or 500? Without a deployment system in place, content piles up as drafts or gets published inconsistently with no tracking.
            </p>
            <p className="text-ink-500 leading-relaxed mb-4">
              A real deployment plan covers scheduling, bulk publishing, version control, and a tracking layer so you always know what went live, when, and why.
            </p>
            <p className="text-ink-500 leading-relaxed">
              Scheduling articles upfront sounds organized in theory, but in practice it creates more problems than it solves. Hosting goes down, websites get hacked, plugins break, content gets outdated before it even publishes. When you have 200 articles queued and your site goes offline for 3 days, your entire deployment calendar falls apart and you lose visibility on what actually went live. That is why this solution is built around posting on demand. You publish when you are ready, with full control over what goes out and when, without relying on a fragile automated queue that can fail silently.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white border border-brand-200 rounded-2xl p-8 flex gap-6">
          <div className="shrink-0 w-14 h-14 bg-accent-600 text-white rounded-full font-display font-bold text-2xl flex items-center justify-center">
            3
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 mb-3">Technical Follow-up</h2>
            <p className="text-ink-500 leading-relaxed mb-4">
              Deployment done - but is Google actually finding your content? Most websites skip this step entirely. Content goes live and nobody checks whether it gets indexed. Pages sit invisible in the dark for weeks or months.
            </p>
            <p className="text-ink-500 leading-relaxed mb-4">
              Technical follow-up means actively monitoring indexing status through Search Console, fixing crawl issues, submitting sitemaps, and applying the right strategies - internal linking, fetch-and-render, IndexNow - to accelerate discovery and keep your content working.
            </p>
            <p className="text-ink-500 leading-relaxed">
              The baseline expectation is simple: a healthy website should get indexed on its own. Google states in its own{" "}
              <a
                href="https://developers.google.com/search/docs/fundamentals/get-on-google"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Search Central documentation
              </a>{" "}
              that most sites are found automatically through crawling, and that manual submission is rarely necessary if your site structure and internal linking are solid. Third-party indexers exist, but they are a last resort - a sign that something deeper is broken, not a routine step in a content workflow. Fix the technical foundation first and Google will do the rest.
            </p>
          </div>
        </div>

      </section>

      {/* Request a Quote */}
      <section className="mb-16" id="request-a-quote">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3">Request a Quote</h2>
          <p className="text-ink-500 max-w-xl mx-auto leading-relaxed">
            Pick a time that works for you. We'll walk through your current content situation and build a plan tailored to your website.
          </p>
        </div>
        <div className="bg-white border border-brand-200 rounded-2xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/seo4latam/seo4latam?hide_event_type_details=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </section>

    </div>
  );
}


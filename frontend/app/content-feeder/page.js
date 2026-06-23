import Script from "next/script";

export const metadata = {
  title: "Content Feeder — The 3-Step Process Every Website Needs",
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
          Publishing one article is easy. Building a repeatable system that plans, deploys, and tracks content at scale — that's where most websites fall short.
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
            <p className="text-ink-500 leading-relaxed mb-4">
              Before writing a single word, you need a clear content plan that matches your website's goals. The format matters: are you publishing breaking news, in-depth guides, or AI-assisted rewrites of existing content?
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
              This is where most website owners hit a wall. Posting one article manually is simple — but what happens when you need to publish 50, 100, or 500? Without a deployment system in place, content piles up as drafts or gets published inconsistently with no tracking.
            </p>
            <p className="text-ink-500 leading-relaxed">
              A real deployment plan covers scheduling, bulk publishing, version control, and a tracking layer so you always know what went live, when, and why.
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
              Deployment done — but is Google actually finding your content? Most websites skip this step entirely. Content goes live and nobody checks whether it gets indexed. Pages sit invisible in the dark for weeks or months.
            </p>
            <p className="text-ink-500 leading-relaxed">
              Technical follow-up means actively monitoring indexing status through Search Console, fixing crawl issues, submitting sitemaps, and applying the right strategies — internal linking, fetch-and-render, IndexNow — to accelerate discovery and keep your content working.
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

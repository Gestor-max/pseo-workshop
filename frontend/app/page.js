export const revalidate = 60;

async function getHomepage() {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=*`;
    const res = await fetch(url, {
      headers: process.env.STRAPI_TOKEN
        ? { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
        : {},
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}

const DEFAULTS = {
  heroBadge: "SEO Mentorship Program",
  heroTitle: "Master SEO with a Personal Mentor by Your Side",
  heroSubtitle:
    "Stop guessing and start ranking. Our structured SEO mentorship program gives you expert guidance, accountability, and a clear roadmap to grow your organic traffic — faster than going it alone.",
  heroCta1Text: "Apply for Mentorship",
  heroCta1Url: "#apply",
  heroCta2Text: "See How It Works",
  heroCta2Url: "#how-it-works",
  stats: [
    { number: "200+", label: "Students Mentored" },
    { number: "3x", label: "Average Traffic Growth" },
    { number: "90 days", label: "To First Results" },
    { number: "94%", label: "Student Satisfaction" },
  ],
  featuresTitle: "What You'll Learn",
  featuresSubtitle:
    "A complete SEO curriculum tailored to your business goals — not a one-size-fits-all course.",
  features: [
    { icon: "🔍", title: "Technical SEO", description: "Core Web Vitals, crawlability, indexing, site architecture, and speed optimization." },
    { icon: "📝", title: "Content Strategy", description: "Keyword research, topical authority, content clusters, and on-page optimization." },
    { icon: "🔗", title: "Link Building", description: "White-hat authority building through digital PR, outreach, and HARO." },
    { icon: "📊", title: "SEO Analytics", description: "GA4, Search Console, rank tracking, and turning data into decisions." },
    { icon: "🚀", title: "Programmatic SEO", description: "Scale content with data-driven templates targeting thousands of keywords." },
    { icon: "📍", title: "Local SEO", description: "Google Business Profile, local citations, and map pack domination." },
  ],
  stepsTitle: "How the Mentorship Works",
  stepsSubtitle: "A structured 90-day program with weekly 1-on-1 sessions and ongoing support.",
  steps: [
    { step: "1", title: "SEO Audit", description: "We audit your site and identify the highest-impact opportunities." },
    { step: "2", title: "Custom Roadmap", description: "You get a prioritized 90-day action plan built around your goals." },
    { step: "3", title: "Weekly Sessions", description: "1-on-1 calls every week to review progress, answer questions, and adjust strategy." },
    { step: "4", title: "Measure & Scale", description: "Track rankings and traffic growth. Double down on what works." },
  ],
  whoTitle: "Who This Is For",
  whoItems: [
    "A business owner who wants to reduce dependence on paid ads",
    "A freelancer or consultant looking to sharpen your SEO skills",
    "A marketer who needs to prove SEO ROI to stakeholders",
    "A blogger or content creator who wants consistent organic traffic",
    "An agency owner who wants to deliver better results for clients",
    "Anyone tired of generic SEO courses that don't move the needle",
  ],
  testimonialsTitle: "What Students Say",
  testimonials: [
    { quote: "In 3 months my organic traffic went from 800 to 11,000 visits/month. The 1-on-1 guidance made all the difference.", name: "Maria L.", role: "E-commerce Founder" },
    { quote: "I tried courses before but always got stuck. Having a mentor who actually reviews MY site changed everything.", name: "James T.", role: "Freelance Consultant" },
    { quote: "We now rank #1 for 40+ keywords in our niche. The ROI on this mentorship has been incredible.", name: "Sofia R.", role: "SaaS Marketing Director" },
  ],
  ctaTitle: "Ready to Grow Your Organic Traffic?",
  ctaSubtitle: "Apply for the SEO Mentorship Program today. Spots are limited, so we keep cohorts small to ensure quality guidance.",
  ctaButtonText: "Apply Now — It's Free to Apply",
  ctaButtonUrl: "mailto:hello@seomentorpro.com",
};

export default async function HomePage() {
  const cms = await getHomepage();
  const d = { ...DEFAULTS, ...cms };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <span className="inline-block bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          {d.heroBadge}
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-ink-950 mb-6 max-w-3xl mx-auto">
          {d.heroTitle}
        </h1>
        <p className="text-xl text-ink-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {d.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={d.heroCta1Url} className="px-8 py-4 bg-accent-600 text-white font-bold text-lg rounded-xl hover:bg-accent-700 transition-colors">
            {d.heroCta1Text}
          </a>
          <a href={d.heroCta2Url} className="px-8 py-4 border-2 border-ink-200 text-ink-700 font-semibold text-lg rounded-xl hover:border-accent-400 hover:text-accent-700 transition-colors">
            {d.heroCta2Text}
          </a>
        </div>
      </section>

      {/* Stats */}
      {d.stats?.length > 0 && (
        <section className="py-10 border-y border-brand-200 mb-16">
          <div className="flex flex-wrap justify-center gap-10 text-center">
            {d.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-accent-600">{s.number}</div>
                <div className="text-sm text-ink-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      {d.features?.length > 0 && (
        <section className="mb-20" id="curriculum">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">{d.featuresTitle}</h2>
          <p className="text-ink-400 text-center mb-10 max-w-xl mx-auto">{d.featuresSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {d.features.map((f) => (
              <div key={f.title} className="bg-white border border-brand-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-md transition-all">
                {f.icon && <div className="text-3xl mb-3">{f.icon}</div>}
                <h3 className="font-display font-bold text-ink-900 mb-2">{f.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Steps */}
      {d.steps?.length > 0 && (
        <section className="mb-20 py-16 -mx-4 px-4 bg-white rounded-2xl border border-brand-200" id="how-it-works">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">{d.stepsTitle}</h2>
          <p className="text-ink-400 text-center mb-12 max-w-xl mx-auto">{d.stepsSubtitle}</p>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {d.steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-accent-600 text-white rounded-full font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-ink-900 mb-2">{s.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Who it's for */}
      {d.whoItems?.length > 0 && (
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">{d.whoTitle}</h2>
          <p className="text-ink-400 text-center mb-10 max-w-xl mx-auto">This mentorship is a great fit if you are...</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {d.whoItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-brand-200 rounded-xl p-4">
                <span className="text-accent-600 font-bold text-lg mt-0.5">✓</span>
                <p className="text-ink-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {d.testimonials?.length > 0 && (
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">{d.testimonialsTitle}</h2>
          <p className="text-ink-400 text-center mb-10">Real results from real students.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {d.testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-brand-200 rounded-xl p-6">
                <div className="text-accent-500 text-lg mb-3">★★★★★</div>
                <p className="text-ink-600 text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                <div className="font-display font-bold text-ink-900 text-sm">{t.name}</div>
                <div className="text-ink-400 text-xs">{t.role}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mb-16 py-16 px-8 bg-accent-600 rounded-2xl text-center text-white" id="apply">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{d.ctaTitle}</h2>
        <p className="text-accent-100 max-w-lg mx-auto mb-8 leading-relaxed">{d.ctaSubtitle}</p>
        <a href={d.ctaButtonUrl} className="inline-block px-10 py-4 bg-white text-accent-700 font-bold text-lg rounded-xl hover:bg-accent-50 transition-colors">
          {d.ctaButtonText}
        </a>
        <p className="text-accent-200 text-sm mt-4">No commitment required. We'll schedule a free discovery call first.</p>
      </section>
    </div>
  );
}

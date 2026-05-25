import { getAllArticles } from "../lib/strapi";

const config = require("../config");

export const revalidate = 60;

export default async function HomePage() {
  let articles = [];
  try {
    articles = await getAllArticles({ limit: "6" });
  } catch (e) {
    // Strapi may not have articles yet
  }
  const blogPosts = articles.filter((a) => a.contentType === "blog");

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <span className="inline-block bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          SEO Mentorship Program
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-ink-950 mb-6 max-w-3xl mx-auto">
          Master SEO with a{" "}
          <span className="text-accent-600">Personal Mentor</span> by Your Side
        </h1>
        <p className="text-xl text-ink-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop guessing and start ranking. Our structured SEO mentorship program
          gives you expert guidance, accountability, and a clear roadmap to grow
          your organic traffic — faster than going it alone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="px-8 py-4 bg-accent-600 text-white font-bold text-lg rounded-xl hover:bg-accent-700 transition-colors"
          >
            Apply for Mentorship
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border-2 border-ink-200 text-ink-700 font-semibold text-lg rounded-xl hover:border-accent-400 hover:text-accent-700 transition-colors"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="py-10 border-y border-brand-200 mb-16">
        <div className="flex flex-wrap justify-center gap-10 text-center">
          {[
            { number: "200+", label: "Students Mentored" },
            { number: "3x", label: "Average Traffic Growth" },
            { number: "90 days", label: "To First Results" },
            { number: "94%", label: "Student Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-accent-600">
                {stat.number}
              </div>
              <div className="text-sm text-ink-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll learn */}
      <section className="mb-20" id="curriculum">
        <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">
          What You'll Learn
        </h2>
        <p className="text-ink-400 text-center mb-10 max-w-xl mx-auto">
          A complete SEO curriculum tailored to your business goals — not a
          one-size-fits-all course.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: "🔍",
              title: "Technical SEO",
              desc: "Core Web Vitals, crawlability, indexing, site architecture, and speed optimization.",
            },
            {
              icon: "📝",
              title: "Content Strategy",
              desc: "Keyword research, topical authority, content clusters, and on-page optimization.",
            },
            {
              icon: "🔗",
              title: "Link Building",
              desc: "White-hat authority building through digital PR, outreach, and HARO.",
            },
            {
              icon: "📊",
              title: "SEO Analytics",
              desc: "GA4, Search Console, rank tracking, and turning data into decisions.",
            },
            {
              icon: "🚀",
              title: "Programmatic SEO",
              desc: "Scale content with data-driven templates targeting thousands of keywords.",
            },
            {
              icon: "📍",
              title: "Local SEO",
              desc: "Google Business Profile, local citations, and map pack domination.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-brand-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-display font-bold text-ink-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-20 py-16 -mx-4 px-4 bg-white rounded-2xl border border-brand-200" id="how-it-works">
        <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">
          How the Mentorship Works
        </h2>
        <p className="text-ink-400 text-center mb-12 max-w-xl mx-auto">
          A structured 90-day program with weekly 1-on-1 sessions and ongoing support.
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { step: "1", title: "SEO Audit", desc: "We audit your site and identify the highest-impact opportunities." },
            { step: "2", title: "Custom Roadmap", desc: "You get a prioritized 90-day action plan built around your goals." },
            { step: "3", title: "Weekly Sessions", desc: "1-on-1 calls every week to review progress, answer questions, and adjust strategy." },
            { step: "4", title: "Measure & Scale", desc: "Track rankings and traffic growth. Double down on what works." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-accent-600 text-white rounded-full font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-display font-bold text-ink-900 mb-2">{item.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">
          Who This Is For
        </h2>
        <p className="text-ink-400 text-center mb-10 max-w-xl mx-auto">
          This mentorship is a great fit if you are...
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "A business owner who wants to reduce dependence on paid ads",
            "A freelancer or consultant looking to sharpen your SEO skills",
            "A marketer who needs to prove SEO ROI to stakeholders",
            "A blogger or content creator who wants consistent organic traffic",
            "An agency owner who wants to deliver better results for clients",
            "Anyone tired of generic SEO courses that don't move the needle",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white border border-brand-200 rounded-xl p-4">
              <span className="text-accent-600 font-bold text-lg mt-0.5">✓</span>
              <p className="text-ink-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">
          What Students Say
        </h2>
        <p className="text-ink-400 text-center mb-10">Real results from real students.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              quote: "In 3 months my organic traffic went from 800 to 11,000 visits/month. The 1-on-1 guidance made all the difference.",
              name: "Maria L.",
              role: "E-commerce Founder",
            },
            {
              quote: "I tried courses before but always got stuck. Having a mentor who actually reviews MY site changed everything.",
              name: "James T.",
              role: "Freelance Consultant",
            },
            {
              quote: "We now rank #1 for 40+ keywords in our niche. The ROI on this mentorship has been incredible.",
              name: "Sofia R.",
              role: "SaaS Marketing Director",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white border border-brand-200 rounded-xl p-6">
              <div className="text-accent-500 text-lg mb-3">★★★★★</div>
              <p className="text-ink-600 text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
              <div className="font-display font-bold text-ink-900 text-sm">{t.name}</div>
              <div className="text-ink-400 text-xs">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog posts from Strapi */}
      {blogPosts.length > 0 && (
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-ink-950 mb-3 text-center">
            Free SEO Resources
          </h2>
          <p className="text-ink-400 text-center mb-10">
            Guides and tutorials to get you started.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((article) => (
              <a
                key={article.id}
                href={`/blog/${article.slug}`}
                className="block bg-white border border-brand-200 rounded-xl p-5 hover:shadow-lg hover:border-accent-300 transition-all"
              >
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-100 text-accent-700 mb-3 inline-block">
                  Guide
                </span>
                <h3 className="font-display font-semibold text-ink-900 mb-2 leading-snug">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-sm text-ink-400 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
                <span className="inline-block mt-3 text-xs font-medium text-accent-600">
                  Read more &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mb-16 py-16 px-8 bg-accent-600 rounded-2xl text-center text-white" id="apply">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Organic Traffic?
        </h2>
        <p className="text-accent-100 max-w-lg mx-auto mb-8 leading-relaxed">
          Apply for the SEO Mentorship Program today. Limited spots available — we keep cohorts small to ensure quality guidance.
        </p>
        <a
          href="mailto:hello@seomentorpro.com"
          className="inline-block px-10 py-4 bg-white text-accent-700 font-bold text-lg rounded-xl hover:bg-accent-50 transition-colors"
        >
          Apply Now — It's Free to Apply
        </a>
        <p className="text-accent-200 text-sm mt-4">No commitment required. We'll schedule a free discovery call first.</p>
      </section>
    </div>
  );
}

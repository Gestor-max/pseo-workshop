const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-production-9aa4.up.railway.app';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('Set STRAPI_TOKEN env var first.');
  process.exit(1);
}

const data = {
  heroBadge: "SEO Mentorship Program",
  heroTitle: "Master SEO with a Personal Mentor by Your Side",
  heroSubtitle: "Stop guessing and start ranking. Our structured SEO mentorship program gives you expert guidance, accountability, and a clear roadmap to grow your organic traffic — faster than going it alone.",
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
  featuresSubtitle: "A complete SEO curriculum tailored to your business goals — not a one-size-fits-all course.",
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
  ctaSubtitle: "Apply for the SEO Mentorship Program today. Limited spots available — we keep cohorts small to ensure quality guidance.",
  ctaButtonText: "Apply Now — It's Free to Apply",
  ctaButtonUrl: "mailto:hello@seomentorpro.com",
};

async function seed() {
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_TOKEN}` };

  // Upsert the single type
  const res = await fetch(`${STRAPI_URL}/api/homepage`, { method: 'PUT', headers, body: JSON.stringify({ data }) });
  const json = await res.json();
  if (!res.ok) { console.error('Failed:', json); process.exit(1); }
  console.log('Homepage content saved.');

  // Publish it
  const pub = await fetch(`${STRAPI_URL}/api/homepage/actions/publish`, { method: 'POST', headers });
  if (pub.ok) console.log('Homepage published.');
  else console.log('Publish step skipped (may already be published).');
}

seed().catch(console.error);

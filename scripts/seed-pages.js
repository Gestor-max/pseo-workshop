const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-production-9aa4.up.railway.app';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_TOKEN) { console.error('Set STRAPI_TOKEN env var first.'); process.exit(1); }

const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${STRAPI_TOKEN}` };

async function upsertAndPublish(endpoint, data) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, { method: 'PUT', headers, body: JSON.stringify({ data }) });
  const json = await res.json();
  if (!res.ok) { console.error(`${endpoint} failed:`, json); return; }
  console.log(`✓ ${endpoint} saved`);

  const pub = await fetch(`${STRAPI_URL}/api/${endpoint}/actions/publish`, { method: 'POST', headers });
  console.log(pub.ok ? `✓ ${endpoint} published` : `  ${endpoint} already published`);
}

async function seed() {
  await upsertAndPublish('privacy-page', {
    title: "Privacy Policy",
    lastUpdated: new Date().toISOString().split('T')[0],
    intro: "SEO Mentor operates seomentorpro.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.",
    content: `<h2>Information We Collect</h2>
<ul>
  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on pages.</li>
  <li><strong>Contact Information:</strong> Name and email address if you reach out to us.</li>
</ul>
<h2>How We Use Your Information</h2>
<ul>
  <li>Provide and maintain our website</li>
  <li>Improve and personalize your experience</li>
  <li>Analyze usage patterns to improve our content</li>
  <li>Respond to your inquiries</li>
</ul>
<h2>Cookies</h2>
<p>We use cookies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
<h2>Third-Party Services</h2>
<p>We may use third-party services such as Google Analytics to monitor and analyze the use of our website.</p>
<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
<h2>Contact Us</h2>
<p>If you have questions about this Privacy Policy, please <a href="/contact">contact us</a>.</p>`,
  });

  await upsertAndPublish('contact-page', {
    title: "Contact Us",
    subtitle: "Have a question, want to apply for mentorship, or just want to say hello? We'd love to hear from you.",
    email: "hello@seomentorpro.com",
    showForm: true,
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your website and what you're trying to achieve...",
    submitText: "Send Message",
  });
}

seed().catch(console.error);

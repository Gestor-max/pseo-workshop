export const revalidate = 60;

async function getPrivacyPage() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/privacy-page`,
      {
        headers: process.env.STRAPI_TOKEN
          ? { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
          : {},
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata() {
  const data = await getPrivacyPage();
  return {
    title: data?.title || "Privacy Policy",
    description: "Our privacy policy and data practices.",
  };
}

export default async function PrivacyPage() {
  const data = await getPrivacyPage();

  const title = data?.title || "Privacy Policy";
  const intro = data?.intro || "This page informs you of our policies regarding the collection, use, and disclosure of personal information.";
  const lastUpdated = data?.lastUpdated || new Date().toISOString().split("T")[0];
  const content = data?.content || null;

  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600 mb-8">
        Last updated:{" "}
        {new Date(lastUpdated).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <>
          <p>{intro}</p>
          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Contact Information:</strong> Name and email address if you contact us.</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain our website</li>
            <li>Improve and personalize your experience</li>
            <li>Analyze usage patterns to improve our content</li>
            <li>Respond to your inquiries</li>
          </ul>
          <h2>Cookies</h2>
          <p>We use cookies to track activity on our website. You can instruct your browser to refuse all cookies.</p>
          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics to monitor and analyze the use of our website.</p>
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time and will post changes on this page.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please <a href="/contact">contact us</a>.</p>
        </>
      )}
    </div>
  );
}

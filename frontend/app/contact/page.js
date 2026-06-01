"use client";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-page`)
      .then((r) => r.json())
      .then((j) => setData(j?.data || null))
      .catch(() => null);
  }, []);

  const title = data?.title || "Contact Us";
  const subtitle = data?.subtitle || "Have a question or want to work together? We'd love to hear from you.";
  const formspreeId = data?.formspreeId || "YOUR_FORM_ID";
  const showForm = data?.showForm !== false;
  const submitText = data?.submitText || "Send Message";
  const email = data?.email || null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600 mb-8">{subtitle}</p>

      {email && (
        <p className="mb-6">
          You can also reach us directly at{" "}
          <a href={`mailto:${email}`} className="text-accent-600 underline">{email}</a>
        </p>
      )}

      {showForm && (
        <form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={data?.namePlaceholder || "Your name"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={data?.emailPlaceholder || "your@email.com"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={data?.messagePlaceholder || "How can we help?"}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-colors font-medium"
          >
            {submitText}
          </button>
        </form>
      )}
    </div>
  );
}

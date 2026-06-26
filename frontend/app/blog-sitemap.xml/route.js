import { getArticles } from "../../lib/strapi";

const config = require("../../config");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${config.domain}`;

export const revalidate = 3600;

export async function GET() {
  const articles = await getArticles("blog", { limit: "1000", sort: "updatedAt:desc" });

  const urls = (articles || [])
    .map((article) => {
      const lastMod = article.updatedAt || article.createdAt || new Date().toISOString();
      return `
    <url>
      <loc>${SITE_URL}/blog/${article.slug}</loc>
      <lastmod>${new Date(lastMod).toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

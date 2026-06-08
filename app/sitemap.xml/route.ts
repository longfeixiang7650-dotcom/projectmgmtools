import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "2026-project-management-tools-complete-buyers-guide",
    "asana-vs-monday-vs-jira-2026-ppm-showdown",
    "project-management-software-buyers-guide-2026",
    "agile-vs-waterfall-choosing-the-right-pm-methodology",
    "the-rise-of-ai-in-project-management-2026",
] as const;

const TOOL_SLUGS = [
  "asana",
    "jira",
    "clickup",
    "monday",
    "notion",
    "linear",
    "wrike",
    "smartsheet",
    "airtable",
    "trello",
    "basecamp",
    "shortcut",
    "height",
    "teamwork",
    "proofhub",
    "liquidplanner",
    "hive",
    "scoro",
    "zoho-projects",
    "microsoft-project",
    "ganttpro",
    "celoxis",
    "ntask",
    "binfire",
] as const;

const CATEGORY_SLUGS = [
  "project-management",
] as const;

export async function GET() {
  const baseUrl = "https://projectmgmtools.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

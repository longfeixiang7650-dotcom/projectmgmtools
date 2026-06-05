import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "top-project-management-tools-2026",
  "asana-vs-clickup-vs-monday-comparison",
  "agile-vs-waterfall-choosing-right-methodology",
  "best-free-project-management-software",
  "jira-vs-linear-comparison-2026",
  "project-management-methodologies",
  "ai-project-management-tools-2026",
  "remote-team-collaboration-software",
  "kanban-vs-scrum-which-is-right",
  "project-management-roi-tracking",
  "best-gantt-chart-software-2026",
  "enterprise-project-management-tools",
  "smb-project-management-software-guide",
  "monday-vs-wrike-comparison",
];

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
];

export async function GET() {
  const baseUrl = "https://projectmgmtools.net";
  
  const urls: string[] = [];
  
  // Static pages
  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  
  // Blog pages
  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }
  
  // Tool pages
  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
  
  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

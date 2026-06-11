import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

const BLUE = "#1d4ed8";

export const metadata: Metadata = {
  title: "ProjectMgmtTools — Compare Top Project Management Software 2026",
  description:
    "Compare the best project management tools. In-depth reviews of Asana, Jira, ClickUp, Monday.com, and more — built by Sapphire Labs.",
  keywords: [
    "project management",
    "project management software",
    "Asana",
    "Jira",
    "ClickUp",
    "Monday.com",
    "task management",
    "team collaboration",
    "PM tools",
    "software reviews",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ProjectMgmtTools",
    title: "ProjectMgmtTools — Compare Top Project Management Software 2026",
    description:
      "Compare the best project management tools. In-depth reviews by the team at Sapphire Labs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased flex flex-col"
        style={{ backgroundColor: "#0a1628", color: "#f0f4ff" }}>
        {/* Deep Blue Header */}
        <header className="sticky top-0 z-50 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(10,22,40,0.95)", borderBottom: "1px solid rgba(29,78,216,0.25)" }}>
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#f0f4ff" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              ProjectMgmtTools
              <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(29,78,216,0.15)", color: "#60a5fa" }}>
                by Sapphire Labs
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm" style={{ color: "#93b4e8" }}>
              <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link
                href="/tools"
                className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Compare Tools
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer style={{ backgroundColor: "#0d1e3c", borderTop: "1px solid rgba(29,78,216,0.2)" }}>
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#f0f4ff" }}>ProjectMgmtTools</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6078a0" }}>
                  Independent project management software comparisons built by{" "}
                  <span style={{ color: "#60a5fa" }}>Sapphire Labs</span>, a 6-person microservices studio in Salt Lake City.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6078a0" }}>Quick Links</h4>
                <div className="space-y-2 text-xs">
                  <Link href="/tools" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>All Tools</Link>
                  <Link href="/blog" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>Blog</Link>
                  <Link href="/about" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>About Us</Link>
                  <Link href="/contact" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6078a0" }}>Legal</h4>
                <div className="space-y-2 text-xs">
                  <Link href="/privacy" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>Privacy Policy</Link>
                  <Link href="/terms" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>Terms of Service</Link>
                  <Link href="/disclosure" className="block hover:text-white transition-colors" style={{ color: "#93b4e8" }}>Affiliate Disclosure</Link>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center text-xs" style={{ borderTop: "1px solid rgba(29,78,216,0.15)", color: "#6078a0" }}>
              &copy; 2026 ProjectMgmtTools. Operated by Sapphire Labs — Salt Lake City, UT. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

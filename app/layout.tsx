import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ProjectMgmtTools - Compare Top Project Management Software 2026",
  description:
    "Compare the best project management tools. In-depth reviews of Asana, Jira, ClickUp, Monday.com, and more.",
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
    title: "ProjectMgmtTools - Compare Top Project Management Software 2026",
    description:
      "Compare the best project management tools. In-depth reviews of Asana, Jira, ClickUp, Monday.com, and more.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        {/* Minimal White Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              ProjectMgmtTools
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
              <Link href="/tools" className="hover:text-gray-900 transition-colors">Tools</Link>
              <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
              <Link
                href="/tools"
                className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "#F97316" }}
              >
                Compare Tools
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Minimal Footer */}
        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">ProjectMgmtTools</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </div>
            <p className="text-xs text-gray-400">&copy; 2026 ProjectMgmtTools. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

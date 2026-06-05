import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

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
      <body className="min-h-screen antialiased" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
        {/* Background Effects */}
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}

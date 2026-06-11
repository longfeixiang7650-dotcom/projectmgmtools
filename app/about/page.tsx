import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, Code2, Server, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — ProjectMgmtTools by Sapphire Labs",
  description:
    "ProjectMgmtTools is built by Sapphire Labs, a 6-person microservices studio in Salt Lake City. We compare PM tools so you don't have to.",
};

const TEAM_MEMBERS = [
  { name: "Alex Chen", role: "Lead Engineer & PM Tool Analyst", initial: "A" },
  { name: "Maria Garcia", role: "Technical Writer & UX Researcher", initial: "M" },
  { name: "James Wilson", role: "Full-Stack Developer & Data Analyst", initial: "J" },
  { name: "Priya Patel", role: "DevOps & Infrastructure Lead", initial: "P" },
  { name: "Tom Nakamura", role: "Product Manager & QA Lead", initial: "T" },
  { name: "Sarah Mitchell", role: "Community & Content Manager", initial: "S" },
];

const EXPERTISE = [
  { icon: Server, title: "Microservices Architecture", desc: "We design and build distributed systems using Go, Node.js, and Rust. We know what it takes to run software at scale." },
  { icon: Code2, title: "Full-Stack Development", desc: "From React frontends to Kubernetes-backed APIs, our team ships production-grade applications for startups and enterprises." },
  { icon: Globe, title: "SaaS Platform Engineering", desc: "We've built and operated SaaS platforms serving millions of requests. Our reviews reflect real operational experience." },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4"
            style={{ color: "#60a5fa", backgroundColor: "rgba(29,78,216,0.15)" }}>
            About
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ color: "#f0f4ff" }}>
            Meet{' '}<span style={{ color: "#60a5fa" }}>Sapphire Labs</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#93b4e8" }}>
            We&apos;re a tight-knit team of six engineers, writers, and product builders based in 
            Salt Lake City, Utah. We specialize in microservices architecture — and we built 
            ProjectMgmtTools because we needed it ourselves.
          </p>
        </div>

        {/* The Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#f0f4ff" }}>Our Story</h2>
          <div className="space-y-4 leading-relaxed" style={{ color: "#93b4e8" }}>
            <p>
              Sapphire Labs started in 2022 as a small microservices consultancy. We helped 
              companies break monoliths into manageable services, design resilient APIs, and 
              build deployment pipelines that wouldn&apos;t wake us up at 3 AM. Along the way, 
              we tried every project management tool on the market — Asana, Jira, ClickUp, 
              Monday.com, Linear, Shortcut, you name it.
            </p>
            <p>
              What we found was frustrating: review sites were either pay-to-play or written 
              by people who had never actually managed a software project. Feature lists were 
              copied from marketing pages. Pricing was hidden behind sales calls. Real answers 
              required digging through Reddit threads and Hacker News comments.
            </p>
            <p>
              So we built our own comparison site. ProjectMgmtTools is our attempt to fix 
              this — honest, practitioner-driven reviews written by engineers and product 
              managers who actually use these tools. No sponsorships, no fluff, just real 
              data from people who build software for a living.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#f0f4ff" }}>
            What We Do Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTISE.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.title} className="rounded-xl p-6"
                  style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(29,78,216,0.15)" }}>
                    <Icon className="w-6 h-6" style={{ color: "#60a5fa" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#f0f4ff" }}>{exp.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#93b4e8" }}>{exp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#f0f4ff" }}>
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-xl p-4"
                style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}>
                  {member.initial}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#f0f4ff" }}>{member.name}</p>
                  <p className="text-xs" style={{ color: "#93b4e8" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-16">
          <div className="rounded-xl p-8 text-center"
            style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: "rgba(29,78,216,0.15)" }}>
              <MapPin className="w-6 h-6" style={{ color: "#60a5fa" }} />
            </div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "#f0f4ff" }}>Based in Salt Lake City</h2>
            <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: "#93b4e8" }}>
              Our team works from the heart of Utah&apos;s tech corridor. Salt Lake City has one 
              of the fastest-growing tech ecosystems in the US, and we&apos;re proud to call it home.
            </p>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs" style={{ color: "#6078a0" }}>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 6 team members</span>
              <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5" /> Microservices specialists</span>
            </div>
          </div>
        </div>

        {/* How We Evaluate */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#f0f4ff" }}>How We Evaluate PM Tools</h2>
          <div className="space-y-4 leading-relaxed" style={{ color: "#93b4e8" }}>
            <p>
              Every tool on this site is evaluated using the same rigorous criteria:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong style={{ color: "#f0f4ff" }}>Hands-on testing</strong> — We sign up, configure projects, invite team members, and run real workflows.</li>
              <li><strong style={{ color: "#f0f4ff" }}>Public data aggregation</strong> — We collect verified reviews from G2, Capterra, and TrustRadius.</li>
              <li><strong style={{ color: "#f0f4ff" }}>Feature comparison</strong> — We test every feature tier and document what&apos;s actually included.</li>
              <li><strong style={{ color: "#f0f4ff" }}>Pricing verification</strong> — We scrape and verify pricing from official sources, noting hidden costs.</li>
            </ul>
            <p className="text-sm mt-4">
              We do not accept payment for rankings or placement. Sponsored listings are 
              clearly marked. Our editorial independence is non-negotiable.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-xl p-10"
          style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#f0f4ff" }}>
            Have feedback or a suggestion?
          </h2>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "#93b4e8" }}>
            We&apos;re always improving. If you notice outdated information or have 
            suggestions for tools we should add, let us know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 text-white font-medium rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: "#1d4ed8" }}
            >
              Contact Us
            </Link>
            <a
              href="mailto:hello@sapphirelabs.dev"
              className="px-6 py-3 font-medium rounded-lg transition-all"
              style={{ border: "1px solid rgba(29,78,216,0.4)", color: "#93b4e8" }}
            >
              hello@sapphirelabs.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

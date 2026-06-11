"use client";

import { useMemo } from "react";
import {
  ArrowRight, Star, Users, BarChart3, Shield,
  ClipboardList, Sparkles, MessageSquare, CheckCircle, Server, Code2, Globe
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const BLUE = "#1d4ed8";
const SITE_NAME = "ProjectMgmtTools";
const STUDIO_NAME = "Sapphire Labs";

export default function HomePage() {
  const topTools = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 6),
    []
  );

  const recentPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    []
  );

  const features = [
    { icon: ClipboardList, title: "Side-by-Side Comparisons", desc: "Feature-by-feature breakdowns with pricing, ratings, and real user feedback." },
    { icon: BarChart3, title: "Expert Scoring", desc: "Data-driven ratings across usability, features, scalability, and value." },
    { icon: Users, title: "Built by Practitioners", desc: "Created by a 6-person microservices team in Salt Lake City who use these tools daily." },
    { icon: Shield, title: "Unbiased & Independent", desc: "No sponsored placements. Every review is honest, thorough, and editorially independent." },
  ];

  const categories = [
    { name: "Agile & Scrum", count: 12, icon: Code2 },
    { name: "Project Management", count: 18, icon: ClipboardList },
    { name: "Enterprise PPM", count: 8, icon: BarChart3 },
    { name: "Team Collaboration", count: 10, icon: MessageSquare },
  ];

  const stats = [
    { label: "Tools Reviewed", value: ALL_TOOLS.length },
    { label: "Active Users", value: "15K+" },
    { label: "Team Behind It", value: "6" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ color: "#60a5fa", backgroundColor: "rgba(29,78,216,0.15)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Built by {STUDIO_NAME} — Trusted by 15,000+ project managers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#f0f4ff" }}>
            Find the Right Project Management Tool, Faster
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "#93b4e8" }}>
            Unbiased, practitioner-driven comparisons of the best project management software.
            Side-by-side pricing, feature breakdowns, and real ratings — no fluff, no sponsorships.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Compare Tools <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{ border: "1px solid rgba(29,78,216,0.4)", color: "#93b4e8" }}
            >
              Meet Sapphire Labs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12" style={{ backgroundColor: "#0d1e3c", borderTop: "1px solid rgba(29,78,216,0.2)", borderBottom: "1px solid rgba(29,78,216,0.2)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold" style={{ color: "#f0f4ff" }}>{stat.value}</p>
                <p className="text-sm mt-1" style={{ color: "#93b4e8" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#f0f4ff" }}>
              Browse by Category
            </h2>
            <p style={{ color: "#93b4e8" }}>
              Find the right tool type for your team&apos;s needs
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-xl p-5 text-center transition-all hover:translate-y-[-2px]"
                  style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(29,78,216,0.15)" }}>
                    <Icon className="w-5 h-5" style={{ color: BLUE }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: "#f0f4ff" }}>{cat.name}</h3>
                  <p className="text-xs" style={{ color: "#93b4e8" }}>{cat.count} tools</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Tools — Comparison Style */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0d1e3c" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#f0f4ff" }}>
              Top-Rated PM Tools
            </h2>
            <p style={{ color: "#93b4e8" }}>
              Ranked by our independent scoring methodology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topTools.map((tool: any, i: number) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group rounded-xl p-5 transition-all hover:translate-y-[-2px]"
                style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.25)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {i === 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white"
                      style={{ backgroundColor: BLUE }}>
                      #1 Pick
                    </span>
                  )}
                  <span className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(29,78,216,0.15)", color: "#60a5fa" }}>
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1 group-hover:underline" style={{ color: "#f0f4ff" }}>
                  {tool.name}
                </h3>
                <p className="text-xs line-clamp-2 mb-3" style={{ color: "#93b4e8" }}>{tool.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                    <span className="text-sm font-semibold" style={{ color: "#f0f4ff" }}>{tool.rating}</span>
                    <span className="text-xs" style={{ color: "#6078a0" }}>({tool.reviewCount || 0})</span>
                  </div>
                  <span className="text-xs" style={{ color: "#93b4e8" }}>{tool.pricing || "Free"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#f0f4ff" }}>
            Why {SITE_NAME}?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(29,78,216,0.15)" }}>
                  <feat.icon className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "#f0f4ff" }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#93b4e8" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0d1e3c" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#f0f4ff" }}>
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I evaluated 5 project management tools before finding the perfect fit here. The comparison tables saved me days of research.", name: "Sarah K.", role: "Product Manager" },
              { quote: "The detailed feature breakdown helped our team choose a platform that actually scales with our workflow.", name: "Marcus J.", role: "Engineering Lead" },
              { quote: "I recommended this site to my entire PMO team. The reviews are spot-on and truly unbiased.", name: "Yuki T.", role: "Program Manager" },
            ].map((t, i) => (
              <div key={i} className="rounded-xl p-6"
                style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.25)" }}>
                <MessageSquare className="w-6 h-6 mb-2" style={{ color: "rgba(29,78,216,0.5)" }} />
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#93b4e8" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#f0f4ff" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#6078a0" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="px-6 py-16" style={{ backgroundColor: "#0a1628" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold" style={{ color: "#f0f4ff" }}>Latest from Our Blog</h2>
              <Link href="/blog" className="text-sm flex items-center gap-1 font-medium" style={{ color: BLUE }}>
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl p-5 transition-all"
                  style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}
                >
                  <span className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(29,78,216,0.15)", color: "#60a5fa" }}>
                    {post.category || "Article"}
                  </span>
                  <h3 className="text-sm font-semibold mt-2 mb-2 group-hover:underline line-clamp-2"
                    style={{ color: "#f0f4ff" }}>
                    {post.title}
                  </h3>
                  <p className="text-xs line-clamp-2" style={{ color: "#93b4e8" }}>{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px]" style={{ color: "#6078a0" }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime || "3 min"} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0d1e3c" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#f0f4ff" }}>
            Stay Updated
          </h2>
          <p className="mb-6" style={{ color: "#93b4e8" }}>
            Get the latest PM software reviews and tips delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-xl text-sm outline-none transition-colors"
              style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.3)", color: "#f0f4ff" }}
            />
            <button
              className="px-5 py-3 rounded-r-xl text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

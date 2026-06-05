"use client";

import { useMemo } from "react";
import {
  CheckCircle2, ArrowRight, Star, Users, MessageSquare,
  Shield, Zap, Globe, BarChart3, BookOpen, Layers,
  ChevronRight, Quote, Sparkles, Clock, Mail, ClipboardList
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const ACCENT_COLOR = "#0891B2";
const SITE_NAME = "ProjectMgmtTools";

export default function HomePage() {
  // Top-rated tools
  const topTools = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 4),
    []
  );

  // Latest blog posts
  const recentPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    []
  );

  // Features
  const features = [
    { icon: ClipboardList, title: "Curated Comparisons", desc: "Side-by-side feature and pricing comparisons of the top PM tools." },
    { icon: Users, title: "Real User Reviews", desc: "Authentic feedback from thousands of verified project management professionals." },
    { icon: BarChart3, title: "Expert Ratings", desc: "Data-driven scoring across features, usability, scalability, and value." },
    { icon: Shield, title: "Unbiased Rankings", desc: "No sponsored placements — just honest, in-depth reviews you can trust." },
  ];

  // Testimonials
  const testimonials = [
    { quote: "I evaluated 5 project management tools before finding the perfect fit here. The comparison tables saved me days of research.", name: "Sarah K.", role: "Product Manager" },
    { quote: "The detailed feature breakdown helped our team choose a platform that actually scales with our workflow.", name: "Marcus J.", role: "Engineering Lead" },
    { quote: "I recommended this site to my entire PMO team. The reviews are spot-on and truly unbiased.", name: "Yuki T.", role: "Program Manager" },
  ];

  // Stats
  const stats = [
    { label: "Tools Reviewed", value: ALL_TOOLS.length },
    { label: "Active Users", value: "15K+" },
    { label: "Expert Reviews", value: BLOG_POSTS.length },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ======== HERO (SaaS style) ======== */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${ACCENT_COLOR}08, #0EA5E910, ${ACCENT_COLOR}05)` }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{ borderColor: `${ACCENT_COLOR}30`, color: ACCENT_COLOR, backgroundColor: `${ACCENT_COLOR}08` }}>
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by 15,000+ project managers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Find the Perfect Project Management Software
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
              Unbiased reviews, detailed comparisons, and expert recommendations
              to help you find the ideal PM tools for your team.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                Explore Top Tools <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all border border-gray-200 text-gray-700 hover:border-gray-300"
              >
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== Stats Bar ======== */}
      <section className="px-6 py-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Top Tools ======== */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Top-Rated PM Tools
            </h2>
            <p className="text-gray-500">
              Curated and ranked by our expert review team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topTools.map((tool: any, i: number) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-gray-200 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  {i === 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white"
                      style={{ backgroundColor: ACCENT_COLOR }}>
                      #1 Pick
                    </span>
                  )}
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:underline mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{tool.rating}</span>
                    <span className="text-xs text-gray-400">({tool.reviewCount || 0})</span>
                  </div>
                  <span className="text-xs text-gray-500">{tool.pricing || "Free"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Features ======== */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Why {SITE_NAME}?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${ACCENT_COLOR}10` }}>
                  <feat.icon className="w-5 h-5" style={{ color: ACCENT_COLOR }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Testimonials ======== */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                <Quote className="w-6 h-6 mb-2" style={{ color: `${ACCENT_COLOR}40` }} />
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Latest Blog Posts ======== */}
      {recentPosts.length > 0 && (
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">Latest from Our Blog</h2>
              <Link href="/blog" className="text-sm flex items-center gap-1 font-medium"
                style={{ color: ACCENT_COLOR }}>
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {post.category || "Article"}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-2 mb-2 group-hover:underline line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime || "3 min"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== Newsletter CTA ======== */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Stay Updated
          </h2>
          <p className="text-gray-500 mb-6">
            Get the latest PM software reviews and tips delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-xl border border-gray-200 text-sm outline-none focus:border-gray-400"
            />
            <button
              className="px-5 py-3 rounded-r-xl text-white text-sm font-semibold"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ======== Footer (lightweight) ======== */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5" style={{ color: ACCENT_COLOR }} />
            <span className="text-sm font-semibold text-gray-900">{SITE_NAME}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="text-xs text-gray-400">&copy; 2026 {SITE_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

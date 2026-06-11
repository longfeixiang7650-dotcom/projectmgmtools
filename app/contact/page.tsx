"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, Code2 } from "lucide-react";

const BLUE = "#1d4ed8";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4"
            style={{ color: "#60a5fa", backgroundColor: "rgba(29,78,216,0.15)" }}>
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#f0f4ff" }}>
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#93b4e8" }}>
            Have a question, suggestion, or want to list your tool? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl p-8"
              style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: "#f0f4ff" }}>Send Us a Message</h2>

              {submitted ? (
                <div className="rounded-lg p-6 text-center"
                  style={{ backgroundColor: "rgba(29,78,216,0.1)", border: "1px solid rgba(29,78,216,0.3)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(29,78,216,0.15)" }}>
                    <Send className="w-6 h-6" style={{ color: "#60a5fa" }} />
                  </div>
                  <p className="font-semibold text-lg mb-1" style={{ color: "#f0f4ff" }}>Message Sent!</p>
                  <p className="text-sm" style={{ color: "#93b4e8" }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#93b4e8" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
                        style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.3)", color: "#f0f4ff" }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#93b4e8" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
                        style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.3)", color: "#f0f4ff" }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#93b4e8" }}>
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
                      style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.3)", color: "#f0f4ff" }}
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="provider-listing">List My Tool</option>
                      <option value="bug">Report a Bug</option>
                      <option value="suggestion">Feature Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#93b4e8" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-colors resize-none"
                      style={{ backgroundColor: "#0a1628", border: "1px solid rgba(29,78,216,0.3)", color: "#f0f4ff" }}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg transition-colors hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: BLUE }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-5">
            <div className="rounded-xl p-6"
              style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: "#f0f4ff" }}>
                <Mail className="w-4 h-4" style={{ color: "#60a5fa" }} />
                Email Us
              </h3>
              <div className="space-y-3">
                <p className="text-sm" style={{ color: "#93b4e8" }}>
                  <strong style={{ color: "#f0f4ff" }}>General:</strong>
                  <br />
                  <a href="mailto:hello@sapphirelabs.dev" className="hover:underline" style={{ color: "#60a5fa" }}>
                    hello@sapphirelabs.dev
                  </a>
                </p>
                <p className="text-sm" style={{ color: "#93b4e8" }}>
                  <strong style={{ color: "#f0f4ff" }}>Support:</strong>
                  <br />
                  <a href="mailto:support@sapphirelabs.dev" className="hover:underline" style={{ color: "#60a5fa" }}>
                    support@sapphirelabs.dev
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-xl p-6"
              style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: "#f0f4ff" }}>
                <MapPin className="w-4 h-4" style={{ color: "#60a5fa" }} />
                Studio
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#93b4e8" }}>
                Sapphire Labs
                <br />
                Salt Lake City, UT 84101
                <br />
                United States
              </p>
            </div>

            <div className="rounded-xl p-6"
              style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: "#f0f4ff" }}>
                <Clock className="w-4 h-4" style={{ color: "#60a5fa" }} />
                Response Time
              </h3>
              <p className="text-sm" style={{ color: "#93b4e8" }}>
                We typically respond within <strong style={{ color: "#f0f4ff" }}>24 hours</strong> during
                business days (Mountain Time).
              </p>
            </div>

            <div className="rounded-xl p-6"
              style={{ backgroundColor: "#0d1e3c", border: "1px solid rgba(29,78,216,0.25)" }}>
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: "#f0f4ff" }}>
                <Code2 className="w-4 h-4" style={{ color: "#60a5fa" }} />
                Specialization
              </h3>
              <p className="text-sm" style={{ color: "#93b4e8" }}>
                Microservices architecture, distributed systems, and SaaS platform engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

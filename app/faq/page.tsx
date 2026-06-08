"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is project management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project management software helps teams plan, track, and execute work efficiently. It provides tools for task assignment, scheduling, resource planning, collaboration, and reporting. Modern PM tools support various methodologies including Agile, Scrum, Kanban, and Waterfall, and offer features like Gantt charts, time tracking, file sharing, and real-time collaboration. Popular examples include Asana, Jira, Monday.com, ClickUp, and Trello.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between free and paid project management tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free PM tools typically offer basic task management, limited storage, and fewer users. Paid plans unlock advanced features like Gantt charts, time tracking, automation, portfolio management, and priority support. For example, Asana's free plan supports up to 15 users, while paid plans start at $10.99/user/month. ClickUp's free plan is generous for individuals, but teams quickly outgrow it. Evaluate your needs — many teams start free and upgrade as workflows become more complex.",
      },
    },
    {
      "@type": "Question",
      name: "Agile vs Waterfall vs Kanban — which methodology should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agile (Scrum) works best for software development teams with iterative sprints and cross-functional collaboration. Waterfall suits industries with fixed requirements and sequential phases like construction or manufacturing. Kanban is ideal for continuous delivery workflows where visualizing work-in-progress limits matters. Many modern PM tools support all three. Start with the methodology that matches your team's natural workflow, and use a tool that doesn't lock you into one approach.",
      },
    },
    {
      "@type": "Question",
      name: "What project management tools are best for small teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small teams (2–20 people), consider Asana for its intuitive interface and goal tracking, Monday.com for visual project boards and templates, Trello for simple Kanban workflows, or ClickUp for the best feature-to-price ratio. Notion is excellent for teams that need docs + project management in one tool. Most of these offer free tiers for small teams, making them low-risk to try.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose enterprise-grade project management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise PM tools must support portfolio management, cross-project resource planning, advanced security (SSO, SAML, SOC 2), compliance reporting, API integrations, and role-based access controls. Top enterprise options include Jira Align for scaled agile, Microsoft Project for traditional PM, ServiceNow for IT-centric organizations, and Smartsheet for spreadsheet-like flexibility. Evaluate your organization size, compliance requirements, and integration ecosystem before committing.",
      },
    },
    {
      "@type": "Question",
      name: "Which Gantt chart tools are best for project scheduling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For dedicated Gantt chart capabilities, Microsoft Project remains the gold standard for traditional project scheduling with critical path analysis and resource leveling. GanttPRO offers a modern, intuitive Gantt-focused platform. TeamGantt simplifies Gantt charts for non-project managers. Among general PM tools, Asana's timeline view, Monday.com's Gantt view, and ClickUp's Gantt view all offer solid scheduling features. Choose based on whether you need standalone Gantt functionality or integrated project management.",
      },
    },
    {
      "@type": "Question",
      name: "How important is time tracking integration in PM tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time tracking integration is essential for agencies, consultancies, and any team billing by the hour. Native time tracking tools like Toggl Track, Harvest, and Clockify integrate with most major PM platforms. Asana, ClickUp, and Monday.com offer built-in time tracking on paid plans. For payroll and invoicing workflows, look for tools that sync with QuickBooks, Xero, or Gusto. Good time tracking also powers accurate project estimation and resource planning.",
      },
    },
    {
      "@type": "Question",
      name: "How are project management tools priced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM tools typically use per-user-per-month pricing with tiered feature levels. Free plans support 10–15 users with basic features. Paid plans range from $7–$15/user/month (basic), $15–$30/user/month (business with automation/reporting), to custom enterprise pricing. Some tools like Asana and Monday.com require annual commitments for best rates. ClickUp offers the most features per dollar. Always factor in total cost including any required add-ons for time tracking, guests, or premium support.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose cloud-based or on-premises project management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloud-based PM tools (SaaS) offer automatic updates, accessibility from anywhere, lower upfront costs, and vendor-managed security. They're best for most teams. On-premises deployment provides full data control, air-gapped security, and customization but requires IT infrastructure, maintenance, and higher upfront investment. On-premises is typically chosen by government agencies, defense contractors, and highly regulated industries. Jira Data Center and Microsoft Project Server are popular on-premises options.",
      },
    },
    {
      "@type": "Question",
      name: "What collaboration features should I look for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key collaboration features include real-time editing, comments and @mentions on tasks, file sharing with version history, shared calendars, whiteboards or mind maps, and native video/audio chat. Asana excels at cross-team collaboration with goals and portfolios. Monday.com offers the most visual team dashboards. ClickUp provides Docs with real-time collaboration. Notion combines docs, wikis, and PM in one workspace. Consider how your team communicates — some prefer task-centric comments, others want a separate chat tool integrated.",
      },
    },
    {
      "@type": "Question",
      name: "Can project management tools integrate with Slack and Microsoft Teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most major PM tools offer deep integrations with Slack and Microsoft Teams. Asana and Monday.com have native Slack apps that let you create tasks from messages, receive notifications, and update task status without leaving Slack. ClickUp offers two-way sync with Slack. Jira integrates with both Slack and Teams for developer workflows. Integration quality varies — look for bidirectional sync, slash commands, and notification filtering to avoid alert fatigue.",
      },
    },
    {
      "@type": "Question",
      name: "What should I consider when migrating between project management tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key migration considerations include: data export capabilities (CSV, JSON, API access), task history preservation, file attachment transfer, user adoption training, and potential downtime. Budget for at least 2–4 weeks of parallel running. Most vendors offer assisted migration — Asana has an importer from Trello and Jira, Monday.com offers automated migrations. The hardest part is usually user adoption, not data migration. Plan training sessions and designate champions in each team.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between task management and project management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Task management tools (like Todoist, TickTick, or Microsoft To Do) focus on individual to-do lists with basic organization. Project management software adds portfolio-level visibility, resource management, dependency tracking, timeline planning (Gantt charts), budgeting, and reporting. As your team grows beyond 5–10 people working on multiple projects simultaneously, you'll likely need to graduate from task management to full project management software for cross-project oversight.",
      },
    },
    {
      "@type": "Question",
      name: "How do I evaluate PM tool security and compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evaluate PM tool security by checking: SOC 2 Type II certification, data encryption at rest and in transit, GDPR/CCPA compliance, SSO/SAML support, data residency options, backup policies, and penetration testing frequency. Enterprise tools typically offer the strongest security posture. For regulated industries, look for HIPAA compliance (necessary for healthcare projects), FedRAMP authorization, or ISO 27001 certification. Review the vendor's security page and request their SOC 2 report before purchasing.",
      },
    },
    {
      "@type": "Question",
      name: "Can project management software help with remote team management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. PM tools are essential for remote and hybrid teams, providing async communication, transparent task ownership, progress visibility, and shared timelines. Look for features like workload view (to prevent burnout), time zone support, async video updates (like Loom integration), and status reporting. Tools like Asana and Monday.com offer dashboard views that give managers real-time visibility into team progress without micromanaging daily standups.",
      },
    },
  ],
};

const FAQ_ITEMS = FAQ_SCHEMA.mainEntity.map((item) => ({
  question: item.name,
  answer: item.acceptedAnswer.text,
}));

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0891B2] bg-[#162540] px-3 py-1.5 rounded-md mb-4">
            FAQ
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F0F2FE] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[#839BBE] text-lg">
            Everything you need to know about choosing the right project management software.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F1F2D] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[#F0F2FE] font-semibold text-sm pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#839BBE] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-[#839BBE] text-sm leading-relaxed border-t border-[#1E3A5F] pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import {
  BarChart3,
  ShieldCheck,
  MessageSquare,
  Users,
  CreditCard,
  Briefcase,
  Layers,
  Zap,
  Globe,
  Lock,
  Layout,
  FileText,
  LifeBuoy,
  Activity,
  PieChart,
  Palette,
  Camera,
  PhoneCall,
  Target,
  Search,
  TrendingUp,
  Eye,
  Settings,
  Code2,
  Box,
  GitBranch,
  BookOpen,
  Headphones,
  Share2,
  Mail,
  DollarSign,
  Server,
  Cloud,
  Database,
  Monitor,
  Link,
  ShoppingCart,
  Beaker,
  MousePointerClick,
  PenTool,
  Shield,
  Leaf,
  Droplet,
  Navigation,
  Train,
  ClipboardList,
  Calendar,
  CheckCircle,
  Grid,
  type LucideIcon,
} from "lucide-react";

export interface ToolData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingDetail: string;
  features: string[];
  useCase: string;
  websiteUrl: string;
  alternatives: string[];
  scoreBreakdown: {
    features: number;
    reviews: number;
    momentum: number;
    popularity: number;
  };
  userQuotes: {
    role: string;
    company: string;
    quote: string;
  }[];
}

export const ALL_TOOLS: ToolData[] = [
  {
    id: "asana",
    name: "Asana",
    category: "Project Management",
    rating: 4.6,
    reviewCount: 12480,
    icon: ClipboardList,
    description: "Asana is a leading work management platform that helps teams orchestrate their work from daily tasks to strategic initiatives with clarity and speed.",
    longDescription: "Asana enables teams to manage projects, track tasks, set timelines, and collaborate seamlessly. With features like Gantt charts, portfolios, goals, and automation rules, it serves as a central hub for cross-functional project coordination at scale.",
    pros: ["Excellent task organization and project views", "Powerful automation and workflow builder", "Strong portfolio and goal management features", "Intuitive UI with multiple project views (list, board, timeline, calendar)", "Rich integration ecosystem (Slack, Zoom, Microsoft 365)"],
    cons: ["Can be expensive for large teams at premium tiers", "Limited offline functionality", "Some advanced features have a learning curve"],
    pricing: "Freemium (Free, Premium $10.99/seat/mo, Business $24.99/seat/mo)",
    pricingDetail: "Free plan supports up to 15 users; paid tiers unlock unlimited dashboards, goals, portfolios, and advanced admin features.",
    features: ["Timeline (Gantt)", "Board View", "Portfolios", "Goals & OKRs", "Smart Workflows & Rules", "Workload Management"],
    useCase: "Enterprise project orchestration, marketing campaign management, product roadmapping, and cross-departmental initiative tracking",
    websiteUrl: "https://asana.com",
    alternatives: ["Monday.com", "ClickUp", "Jira Software"],
    scoreBreakdown: {
      features: 9.0,
      reviews: 9.2,
      momentum: 9.0,
      popularity: 9.5
    },
    userQuotes: [{"role": "PMO Director", "company": "FinTech Global Inc.", "quote": "Asana gave us a single source of truth for 200+ concurrent projects. Portfolio views alone saved us 10 hours of status reporting per week."}, {"role": "Marketing Manager", "company": "GrowthCo Media", "quote": "The automation rules eliminated 5 hours of manual task assignment across our 4 marketing squads."}]
  },
  {
    id: "jira",
    name: "Jira Software",
    category: "Project Management",
    rating: 4.5,
    reviewCount: 18450,
    icon: Code2,
    description: "Jira Software is Atlassian's industry-standard agile project management tool built for software teams, offering Scrum, Kanban, and DevOps integration.",
    longDescription: "Jira Software powers agile development with robust Scrum and Kanban boards, customizable workflows, roadmaps, and deep CI/CD integration. It scales from small teams to enterprise with Jira Align and Advanced Roadmaps for portfolio planning.",
    pros: ["Industry standard for agile development teams", "Deep customization with workflows and fields", "Powerful reporting and velocity tracking", "Extensive marketplace with 3000+ apps", "Rock-solid security and compliance certifications"],
    cons: ["Steep learning curve for administrators", "UI can feel cluttered compared to modern alternatives", "Cloud performance can lag for large instances"],
    pricing: "Freemium (Free up to 10 users, Standard $7.75/user/mo, Premium $15.25/user/mo)",
    pricingDetail: "Free plan includes Scrum and Kanban boards, backlog, and roadmaps. Enterprise (Data Center) available for self-managed deployments.",
    features: ["Scrum Boards", "Kanban Boards", "Advanced Roadmaps", "Custom Workflows", "Sprint Planning & Velocity Tracking", "DevOps Marketplace"],
    useCase: "Software development lifecycle management, agile sprint planning, bug tracking, and enterprise-scale product development",
    websiteUrl: "https://www.atlassian.com/software/jira",
    alternatives: ["Linear", "Shortcut", "Azure DevOps"],
    scoreBreakdown: {
      features: 9.5,
      reviews: 8.8,
      momentum: 8.5,
      popularity: 9.8
    },
    userQuotes: [{"role": "Engineering Director", "company": "DevShop Enterprise", "quote": "Jira's velocity tracking and custom dashboards give our 12 squads the predictability we need for quarterly planning."}, {"role": "Scrum Master", "company": "AgileTech Solutions", "quote": "After trying 3 other tools, Jira's workflow automation and reporting depth is unmatched for regulated software teams."}]
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Project Management",
    rating: 4.7,
    reviewCount: 9800,
    icon: Zap,
    description: "ClickUp is an all-in-one productivity platform that combines project management, collaboration, docs, goals, and more in a single customizable workspace.",
    longDescription: "ClickUp positions itself as 'one app to replace them all' — offering task management with 15+ views, native docs and whiteboards, chat collaboration, goals, time tracking, and CRM-like features. Highly customizable with custom fields, statuses, and automation for any workflow.",
    pros: ["Unmatched customization and views (15+ views)", "Excellent value for feature depth at every tier", "Native docs, whiteboards, and chat built in", "Powerful automations and no-code rules engine", "Strong goal and OKR tracking integration"],
    cons: ["UI can be overwhelming due to sheer feature density", "Performance can lag on workspaces with thousands of tasks", "Mobile experience trails desktop quality"],
    pricing: "Freemium (Unlimited $7/user/mo, Business $12/user/mo, Enterprise custom)",
    pricingDetail: "Free plan includes unlimited tasks and members; paid plans unlock integrations, dashboards, goals, and advanced automation.",
    features: ["15+ Views (List, Board, Gantt, Calendar, Mind Map)", "Docs & Whiteboards", "Goals & OKRs", "Automation & Custom Rules", "Native Time Tracking", "Dashboard & Reporting"],
    useCase: "All-in-one project and work management for teams wanting to consolidate multiple SaaS tools (docs, tasks, chat, goals) under one roof",
    websiteUrl: "https://clickup.com",
    alternatives: ["Asana", "Monday.com", "Notion"],
    scoreBreakdown: {
      features: 9.8,
      reviews: 9.0,
      momentum: 9.7,
      popularity: 9.0
    },
    userQuotes: [{"role": "VP of Operations", "company": "ScaleUp Ventures", "quote": "We replaced Trello, Google Docs, and our OKR tool with ClickUp. Our stack went from 8 tools down to 2."}, {"role": "Freelance Project Manager", "company": "IndiePM", "quote": "The mind map view alone is a game changer for sprint planning with distributed teams."}]
  },
  {
    id: "monday",
    name: "Monday.com",
    category: "Project Management",
    rating: 4.5,
    reviewCount: 11200,
    icon: Layout,
    description: "Monday.com is a visual, intuitive work operating system that teams use to manage projects, workflows, and everything in between.",
    longDescription: "Monday.com offers a highly visual and customizable platform with boards, timelines, Gantt views, and dashboards. Its Work Operating System (Work OS) approach includes CRM, dev, marketing, and HR templates. Strong automation engine and integrations with fine-grained permission controls.",
    pros: ["Visually intuitive and modern interface", "Highly flexible board-based system", "Strong automation recipes with no-code macros", "Excellent Gantt timeline and workload views", "Scalable from small teams to enterprise"],
    cons: ["Premium pricing for advanced features", "Search functionality could be improved", "Limited offline capabilities"],
    pricing: "Freemium (Basic $9/seat/mo, Standard $12/seat/mo, Pro $19/seat/mo, Enterprise custom)",
    pricingDetail: "Free plan has limited boards; paid plans unlock timeline, Gantt, calendar, and guest access. Enterprise includes advanced admin, security, and integrations.",
    features: ["Kanban Boards", "Timeline & Gantt Views", "Automations & Recipes", "Dashboards & Reporting", "Workload & Capacity Management", "Form Builder"],
    useCase: "Visual project management for creative and marketing teams, IT project tracking, and cross-departmental workflow management",
    websiteUrl: "https://monday.com",
    alternatives: ["Asana", "ClickUp", "Wrike"],
    scoreBreakdown: {
      features: 8.8,
      reviews: 9.1,
      momentum: 9.3,
      popularity: 9.2
    },
    userQuotes: [{"role": "Creative Director", "company": "BrandStudio Agency", "quote": "Monday.com's visual boards are a hit with our creative team. The timeline view gave us instant clarity on resource conflicts across 6 client projects."}, {"role": "IT Operations Lead", "company": "TechStack Inc.", "quote": "We manage 90+ internal IT projects on Monday.com. The workload view prevents burnout by highlighting overallocated team members."}]
  },
  {
    id: "notion",
    name: "Notion",
    category: "Project Management",
    rating: 4.4,
    reviewCount: 8700,
    icon: FileText,
    description: "Notion combines notes, docs, wikis, and project management into a flexible, all-in-one workspace for teams of all sizes.",
    longDescription: "Notion is a connected workspace where teams can write, plan, collaborate, and organize. It combines docs with databases, kanban boards, calendars, and wikis. Its block-based editor and templates provide extreme flexibility, making it popular with startups, tech teams, and knowledge workers.",
    pros: ["Extremely flexible and customizable workspace", "Excellent for documentation and wikis", "Powerful linked databases for relational data", "Great template marketplace", "Generous free plan"],
    cons: ["Database performance can lag with 1000+ entries", "No native Gantt chart view", "Limited native reporting and dashboards compared to PM-dedicated tools"],
    pricing: "Freemium (Plus $10/user/mo, Business $18/user/mo, Enterprise custom)",
    pricingDetail: "Free plan includes 7-day page history and file uploads up to 5MB. Plus adds unlimited blocks and guests; Business adds advanced permissions and team spaces.",
    features: ["Docs & Collaborative Editing", "Database & Spreadsheet Views", "Kanban Boards", "Calendar View", "Wiki & Knowledge Base", "Templates & Integrations"],
    useCase: "Internal knowledge management, lightweight project tracking, product requirements docs, and startup team workspace",
    websiteUrl: "https://notion.so",
    alternatives: ["Confluence", "Coda", "ClickUp"],
    scoreBreakdown: {
      features: 8.5,
      reviews: 9.0,
      momentum: 9.5,
      popularity: 9.3
    },
    userQuotes: [{"role": "Head of Product", "company": "SaaSLine", "quote": "Notion replaced our wiki, lightweight PM tool, and meeting notes — all in one. The database relations are a superpower for product specs."}, {"role": "Startup Founder", "company": "EarlyStage Labs", "quote": "We run our entire startup on Notion: product roadmap, hiring tracker, investor updates. One workspace, zero tool switching."}]
  },
  {
    id: "linear",
    name: "Linear",
    category: "Project Management",
    rating: 4.8,
    reviewCount: 4200,
    icon: Zap,
    description: "Linear is a sleek, fast issue tracking and project management tool designed for modern software teams who value speed and simplicity.",
    longDescription: "Linear focuses on delivering the fastest user experience for issue tracking and project management. With keyboard-first design, real-time collaboration, and powerful cycles/roadmaps, it has rapidly become the preferred tool for many startup and tech teams who prioritize velocity.",
    pros: ["Blazing fast performance and keyboard-first UX", "Beautiful, modern interface with minimalist design", "Excellent cycle and roadmap features", "Powerful issue triaging with auto-assign", "Great API and developer ecosystem"],
    cons: ["Limited customization compared to Jira or ClickUp", "No native Gantt chart view", "Smaller integration ecosystem than established players"],
    pricing: "Freemium (Team $8/user/mo, Business $13/user/mo, Enterprise custom)",
    pricingDetail: "Free plan includes unlimited issues, cycles, and docs. Paid plans add guest access, advanced workflow, and SSO.",
    features: ["Issue Tracking", "Cycles (Sprints)", "Roadmaps", "Auto Triage & Assign", "Keyboard Shortcuts", "API & Integrations"],
    useCase: "Software issue tracking, sprint management for fast-moving engineering teams, and startup project coordination",
    websiteUrl: "https://linear.app",
    alternatives: ["Jira Software", "Shortcut", "Height"],
    scoreBreakdown: {
      features: 9.0,
      reviews: 9.5,
      momentum: 9.8,
      popularity: 8.5
    },
    userQuotes: [{"role": "Engineering Manager", "company": "FastCo Tech", "quote": "Linear is 10x faster than Jira for daily use. Our team's issue resolution time dropped by 35% just because the tool doesn't get in the way."}, {"role": "CTO", "company": "YCombinator Startup", "quote": "We switched from Jira to Linear and our devs actually enjoy using the project tracker now. The cycle view is perfect for our 2-week sprints."}]
  },
  {
    id: "wrike",
    name: "Wrike",
    category: "Project Management",
    rating: 4.3,
    reviewCount: 5600,
    icon: BarChart3,
    description: "Wrike is an enterprise-grade project management and work management platform with powerful proofing, reporting, and cross-functional capabilities.",
    longDescription: "Wrike offers a comprehensive project management suite with custom workflows, interactive Gantt charts, advanced reporting, and dedicated modules for marketing, professional services, and operations. Its proofing and request forms streamline cross-departmental collaboration.",
    pros: ["Enterprise-grade security and compliance", "Powerful request forms and automation", "Excellent proofing and approval workflows", "Advanced cross-tagging and cross-project reporting", "Strong professional services automation module"],
    cons: ["Higher price point than most competitors", "UI feels less modern than newer tools", "Setup complexity for advanced workflows"],
    pricing: "Standard, Business ($24.80/user/mo), Enterprise, Pinnacle — all annual pricing",
    pricingDetail: "Pricing varies by plan. Business tier starts for marketing and creative teams; Enterprise adds advanced security; Pinnacle targets enterprise PMOs.",
    features: ["Interactive Gantt Charts", "Custom Workflows & Request Forms", "Proofing & Approvals", "Cross-Project Reporting", "Resource Management", "Project Blueprints"],
    useCase: "Enterprise marketing operations, professional services automation, and cross-departmental project portfolio management",
    websiteUrl: "https://www.wrike.com",
    alternatives: ["Asana", "Monday.com", "Smartsheet"],
    scoreBreakdown: {
      features: 8.8,
      reviews: 8.5,
      momentum: 7.8,
      popularity: 8.0
    },
    userQuotes: [{"role": "Marketing Operations Director", "company": "GlobalBrand", "quote": "Wrike's proofing workflow cut our creative review cycle from 5 days to 2. The request forms alone saved our ops team 20 hours per week."}, {"role": "PMO Manager", "company": "Enterprise Corp", "quote": "The cross-project reporting in Wrike is the only tool that gave our leadership real visibility into 150+ concurrent initiatives."}]
  },
  {
    id: "smartsheet",
    name: "Smartsheet",
    category: "Project Management",
    rating: 4.2,
    reviewCount: 7800,
    icon: Grid,
    description: "Smartsheet is a dynamic work management platform that combines the familiarity of spreadsheets with powerful project management and automation.",
    longDescription: "Smartsheet bridges the gap between spreadsheets and project management software. It offers spreadsheet-like flexibility with Gantt views, automations, dashboards, and reporting. Popular with operational teams, it supports portfolio management, resource tracking, and cross-functional workflows.",
    pros: ["Spreadsheet familiarity with PM superpowers", "Excellent for portfolio and resource management", "Powerful automation with conditional logic", "Strong reporting and dashboard capabilities", "Great for data-heavy operational workflows"],
    cons: ["UI can feel dated compared to visual-first tools", "Not ideal for creative or design-heavy teams", "Learning curve for advanced features"],
    pricing: "Pro $9/user/mo, Business $19/user/mo, Enterprise custom",
    pricingDetail: "Pro plan includes unlimited collaborators and dashboards; Business adds premium apps and admin controls; Enterprise has advanced security and dedicated support.",
    features: ["Gantt & Grid Views", "Automations & Alerts", "Dashboards & Reports", "Resource & Portfolio Management", "Forms & Data Collection", "Integrations & APIs"],
    useCase: "Operational project management, portfolio management, IT/ops workflows, and spreadsheet-centric teams transitioning to structured PM",
    websiteUrl: "https://www.smartsheet.com",
    alternatives: ["Wrike", "Airtable", "Microsoft Project"],
    scoreBreakdown: {
      features: 8.3,
      reviews: 8.4,
      momentum: 7.5,
      popularity: 8.5
    },
    userQuotes: [{"role": "Operations Manager", "company": "LogiCorp", "quote": "We moved from spreadsheets to Smartsheet without retraining our team. The Gantt view and automations made us 3x more efficient."}, {"role": "Portfolio Manager", "company": "InfraTech", "quote": "Smartsheet's portfolio dashboards give my exec team real-time resource allocation across 40+ capital projects."}]
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Project Management",
    rating: 4.4,
    reviewCount: 6500,
    icon: Database,
    description: "Airtable combines the flexibility of a spreadsheet with the power of a database, making it ideal for managing projects, content, and collaborative workflows.",
    longDescription: "Airtable is a low-code platform for building collaborative apps. Its relational database interface with spreadsheet-like familiarity allows teams to track projects, manage content, plan events, and build custom workflows without engineering support. Features include linked records, rich field types, and extensive automations.",
    pros: ["Relational database power with spreadsheet ease", "Rich field types (attachments, links, selectors)", "Excellent for content and editorial workflows", "Powerful interfaces for custom app building", "Strong template marketplace"],
    cons: ["Limited native Gantt chart (requires extension)", "Record limits on lower tiers (50K per base)", "Advanced features require significant setup"],
    pricing: "Freemium (Team $20/user/mo, Business $45/user/mo, Enterprise Scale custom)",
    pricingDetail: "Free plan includes unlimited bases but 50K records per base, 1GB attachments. Paid plans unlock interface designer, automations, and higher limits.",
    features: ["Database with Linked Records", "Multiple Views (Grid, Calendar, Kanban)", "Automations & Scripts", "Interface Designer", "Rich Field Types (Attachments, Links)", "Extensions Marketplace"],
    useCase: "Content and editorial project management, workflow automation, asset tracking, and low-code team app building",
    websiteUrl: "https://airtable.com",
    alternatives: ["Notion", "Smartsheet", "Coda"],
    scoreBreakdown: {
      features: 8.8,
      reviews: 8.7,
      momentum: 8.5,
      popularity: 8.8
    },
    userQuotes: [{"role": "Content Operations Lead", "company": "PublishMedia", "quote": "Airtable replaced 4 separate tools for editorial tracking, asset management, and content calendars. The linked records are a game-changer."}, {"role": "Product Manager", "company": "AppBuilder", "quote": "We built our entire feature request and release tracker in Airtable — without a single line of code. The interface designer is brilliant."}]
  },
  {
    id: "trello",
    name: "Trello",
    category: "Project Management",
    rating: 4.1,
    reviewCount: 15000,
    icon: Layout,
    description: "Trello is the original kanban-style project management tool offering simple, visual boards for organizing tasks and projects of any scale.",
    longDescription: "Trello provides an intuitive, card-based project management experience. Its simple boards, lists, and cards interface makes it accessible for any team. With Power-Ups (integrations), Butler (built-in automation), and customizable card fields, it scales from simple to-do lists to complex project workflows.",
    pros: ["Dead-simple interface with zero learning curve", "Excellent for personal task management and small teams", "Butler automation engine with no-code rules", "Generous free plan", "Huge Power-Up marketplace"],
    cons: ["Limited project views (primarily kanban)", "No native time tracking or Gantt charts", "Limited reporting and analytics capabilities"],
    pricing: "Freemium (Standard $5/user/mo, Premium $10/user/mo, Enterprise $17.50/user/mo)",
    pricingDetail: "Free plan: unlimited boards, 10MB attachments; Standard adds Butler automation and unlimited Power-Ups; Premium adds timeline, Gantt, dashboard, and calendar views.",
    features: ["Kanban Boards", "Butler Automation", "Power-Ups (Integrations)", "Calendar View", "Timeline View", "Checklists & Card Fields"],
    useCase: "Personal task management, small team collaboration, agile board for simple projects, and kanban workflow tracking",
    websiteUrl: "https://trello.com",
    alternatives: ["ClickUp", "Asana", "Notion"],
    scoreBreakdown: {
      features: 7.5,
      reviews: 8.5,
      momentum: 7.0,
      popularity: 9.5
    },
    userQuotes: [{"role": "Small Business Owner", "company": "Main Street Agency", "quote": "Trello is the only tool my entire team actually adopted without training. Butler automation handles the repetitive stuff."}, {"role": "Freelance Designer", "company": "DesignFlow Studio", "quote": "I track 15+ client projects on Trello boards. The simplicity keeps me focused — no features I don't need."}]
  },
  {
    id: "basecamp",
    name: "Basecamp",
    category: "Project Management",
    rating: 4.0,
    reviewCount: 3200,
    icon: MessageSquare,
    description: "Basecamp is a long-standing, flat-priced project management and team communication platform focused on simplicity and work-life balance.",
    longDescription: "Basecamp takes an opinionated approach to project management: message boards, to-dos, schedules, docs, and group chat — all in one place. It charges a flat monthly fee regardless of team size, making it unique in the PM space. The 'Hill Charts' provide a novel way to visualize project progress.",
    pros: ["Flat pricing (unlimited users per project)", "All-in-one (chat, tasks, docs, scheduling)", "Hill Charts for progress visualization", "Strong work-life balance philosophy", "Simple and easy to learn"],
    cons: ["Limited customization and views", "No native Gantt chart or kanban board", "Lacks advanced reporting and portfolio features"],
    pricing: "Basecamp $15/user/mo (unlimited projects) or Basecamp Pro $299/mo (unlimited users)",
    pricingDetail: "Basecamp (per-user): $15/user/mo with 1 TB storage. Basecamp Pro: flat $299/month for all features including unlimited users, 5 TB storage, and priority support.",
    features: ["Message Boards", "To-Do Lists", "Schedules & Timeline", "Docs & Files", "Hill Charts", "Group Chat (Campfire)"],
    useCase: "Small-to-midsize teams wanting a simple, all-in-one project communication and management tool without per-seat pricing anxiety",
    websiteUrl: "https://basecamp.com",
    alternatives: ["Trello", "Teamwork", "ClickUp"],
    scoreBreakdown: {
      features: 7.0,
      reviews: 8.0,
      momentum: 6.5,
      popularity: 8.0
    },
    userQuotes: [{"role": "Agency Owner", "company": "Creative Collective", "quote": "Basecamp's flat pricing means I never have to worry about per-seat costs as we scale. Hill Charts give clients a fresh view of project status."}, {"role": "Nonprofit Director", "company": "Community Impact Org", "quote": "The equal pricing regardless of team size is a godsend for nonprofits. Simple, effective, and no upsells."}]
  },
  {
    id: "shortcut",
    name: "Shortcut",
    category: "Project Management",
    rating: 4.2,
    reviewCount: 2100,
    icon: Target,
    description: "Shortcut (formerly Clubhouse) is a project management platform built for software development teams, combining docs, roadmaps, and issue tracking.",
    longDescription: "Shortcut offers a streamlined project management experience for software teams. It combines story-based issue tracking with docs, epics, milestones, and roadmaps. Its clean interface and focus on developer workflow make it a popular alternative to Jira for teams wanting less complexity.",
    pros: ["Clean, developer-friendly interface", "Integrated docs with code snippets", "Powerful epic and milestone tracking", "Good API and Git integrations", "Fast search and filtering"],
    cons: ["Less suitable for non-engineering teams", "Limited customization compared to Jira", "Smaller 3rd-party integration ecosystem"],
    pricing: "Freemium (Team $8.50/user/mo, Business $16.50/user/mo, Enterprise custom)",
    pricingDetail: "Free plan includes unlimited stories, epic, and milestones for up to 10 users. Paid plans add custom fields, priorities, and advanced permissions.",
    features: ["Story-based Issue Tracking", "Epics & Milestones", "Docs & Wikis", "Roadmaps", "Sprint Management", "Custom Fields & Workflows"],
    useCase: "Software development teams seeking a lightweight, modern alternative to Jira for sprint and story management",
    websiteUrl: "https://shortcut.com",
    alternatives: ["Linear", "Jira Software", "Pivotal Tracker"],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.5,
      momentum: 7.5,
      popularity: 7.0
    },
    userQuotes: [{"role": "VP of Engineering", "company": "StartupScale", "quote": "We switched from Jira to Shortcut and our devs stopped complaining about the tool. The story-based flow maps perfectly to how we think."}, {"role": "Product Manager", "company": "SaaSify", "quote": "Shortcut's close ties between docs and stories mean our engineering specifications are always linked to the actual work."}]
  },
  {
    id: "height",
    name: "Height",
    category: "Project Management",
    rating: 4.3,
    reviewCount: 1500,
    icon: Activity,
    description: "Height is a modern, AI-powered project management tool that automates routine tasks and adapts to your team's workflow.",
    longDescription: "Height leverages AI to automatically populate tasks, estimate effort, detect duplicates, and suggest assignees. It offers automated sprint planning, smart notifications, and a clean interface for software and product teams. It's designed to reduce administrative overhead so teams can focus on building.",
    pros: ["AI-powered task automation and estimation", "Auto-populated sprints and backlog triage", "Dupe detection and smart notifications", "Clean, modern interface", "Git integration with automatic task linking"],
    cons: ["Relatively new with smaller ecosystem", "AI features require usage patterns to become accurate", "Limited integrations compared to established players"],
    pricing: "Starter $6/user/mo, Business $12/user/mo, Enterprise custom",
    pricingDetail: "Starter includes unlimited projects, AI features, and Git integrations. Business adds custom roles, advanced permissions, and dedicated support.",
    features: ["AI-Powered Task Creation", "Automated Sprint Planning", "Smart Duplicate Detection", "Git & Code Integration", "Real-time Collaboration", "Custom Views & Filters"],
    useCase: "Tech-forward product teams wanting to reduce manual PM overhead through AI-powered automation and smart workflows",
    websiteUrl: "https://height.app",
    alternatives: ["Linear", "Shortcut", "Jira Software"],
    scoreBreakdown: {
      features: 8.5,
      reviews: 8.3,
      momentum: 9.2,
      popularity: 6.5
    },
    userQuotes: [{"role": "Engineering Manager", "company": "AI Native", "quote": "Height's AI auto-populated our entire sprint backlog from GitHub issues. Saved 4 hours of grooming per sprint."}, {"role": "Product Lead", "company": "TechForward", "quote": "The auto-assign and effort estimation features actually work — we've seen a 20% reduction in unplanned work since adopting."}]
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "Project Management",
    rating: 4.1,
    reviewCount: 2800,
    icon: Users,
    description: "Teamwork is a comprehensive project management platform designed for client-based teams and agencies with robust billing and resource management.",
    longDescription: "Teamwork offers project management specifically tailored for client-facing teams and agencies. It includes time tracking, billing, invoicing, retainer management, and client-specific portals. Its resource management and workload views are particularly strong for professional services organizations.",
    pros: ["Designed for client-based and agency workflows", "Integrated time tracking and invoicing", "Strong resource and workload management", "Client portal with shared access", "Retainer and project budget tracking"],
    cons: ["Geared primarily for agencies — less suitable for internal teams", "UI can feel cluttered vs. modern alternatives", "Mobile app experience lags behind"],
    pricing: "Freemium (Deliver $9.99/user/mo, Grow $17.99/user/mo, Scale custom)",
    pricingDetail: "Free plan includes 2 projects and 100 MB storage. Paid plans unlock unlimited projects, time tracking, invoicing, and Gantt charts.",
    features: ["Time Tracking & Billing", "Client Portals", "Resource Management", "Gantt Charts & Milestones", "Invoicing & Retainers", "Project Budgeting"],
    useCase: "Agencies, professional services firms, and client-based teams needing integrated project management with time tracking and billing",
    websiteUrl: "https://www.teamwork.com",
    alternatives: ["Wrike", "Monday.com", "Function Fox"],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.2,
      momentum: 7.0,
      popularity: 7.5
    },
    userQuotes: [{"role": "Agency Partner", "company": "CreativeWorks Agency", "quote": "Teamwork's integrated billing and retainer management saves us 15 hours of admin work per week. Our clients love the portal."}, {"role": "Operations Lead", "company": "Digital Services Co", "quote": "Resource management across 50+ client projects is finally manageable. The workload view prevents overbooking."}]
  },
];

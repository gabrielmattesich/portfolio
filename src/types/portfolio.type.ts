export type Language = "es" | "en";

export interface QuickMetric {
  value: string;
  label: string;
  accent?: "emerald" | "cyan" | "white";
}

export interface ArchitecturePillar {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: "layers" | "activity" | "cloud" | "cpu";
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  scopeBadge?: string;
  description: string;
  highlights: string[];
  tools: string[];
}

export interface StackCategory {
  title: string;
  accentColor: "emerald" | "cyan" | "purple" | "amber" | "pink" | "green";
  items: string[];
}

export interface CertificationItem {
  issuer: string;
  date: string;
  title: string;
  skills: string;
  certId: string;
  link?: string;
  dateAccent?: "emerald" | "cyan" | "dim";
}

export interface PortfolioContent {
  nav: {
    pillars: string;
    experience: string;
    stack: string;
    credentials: string;
    contact: string;
  };
  hero: {
    roleBadge: string;
    scopeBadge: string;
    headline: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
    description: string;
    copyEmail: string;
    emailCopied: string;
    viewExperience: string;
    githubLinkText: string;
    metrics: QuickMetric[];
  };
  pillars: {
    sectionTag: string;
    title: string;
    description: string;
    items: ArchitecturePillar[];
  };
  experience: {
    sectionTag: string;
    title: string;
    description: string;
    items: WorkExperience[];
  };
  stack: {
    sectionTag: string;
    title: string;
    description: string;
    categories: StackCategory[];
    showCalendarButton?: string;
    hideCalendarButton?: string;
    calendarTitle?: string;
  };
  credentials: {
    sectionTag: string;
    title: string;
    description: string;
    items: CertificationItem[];
  };
  contact: {
    sectionTag: string;
    title: string;
    description: string;
    copyEmail: string;
    linkedinCta: string;
    metaInfo: string;
  };
  footer: {
    tagline: string;
    backToTop: string;
  };
}


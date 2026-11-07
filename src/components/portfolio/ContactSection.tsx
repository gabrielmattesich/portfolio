"use client";

import React from "react";
import { Copy, ExternalLink } from "lucide-react";
import { PortfolioContent } from "@/types/portfolio.type";

interface ContactSectionProps {
  content: PortfolioContent["contact"];
  onCopyEmail: () => void;
}

export default function ContactSection({
  content,
  onCopyEmail,
}: ContactSectionProps) {
  return (
    <section id="contacto" className="scroll-mt-24">
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-bg border border-brand-border relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            {content.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-slate-950 font-semibold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-lg shadow-brand-accent/20"
            >
              <Copy className="w-4 h-4" />
              <span>{content.copyEmail}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/gabriel-mattesich"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-borderLight bg-brand-surface px-5 py-3 rounded-lg text-sm font-medium text-slate-200 transition-all hover:bg-brand-card"
            >
              <span>{content.linkedinCta}</span>
              <ExternalLink className="w-4 h-4 text-brand-dim" />
            </a>
          </div>

          <div className="pt-2 text-xs font-mono text-brand-dim">
            {content.metaInfo}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { Copy, ChevronDown, ExternalLink } from "lucide-react";
import { PortfolioContent } from "@/types/portfolio.type";

interface HeroSectionProps {
  content: PortfolioContent["hero"];
  onCopyEmail: () => void;
}

export default function HeroSection({ content, onCopyEmail }: HeroSectionProps) {
  return (
    <section className="space-y-8 max-w-4xl pt-4">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface/90 backdrop-blur-sm text-xs font-mono text-slate-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
        </span>
        <span>{content.roleBadge}</span>
        <span className="text-brand-dim">/</span>
        <span className="text-brand-muted">{content.scopeBadge}</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
          {content.headline.prefix}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            {content.headline.highlight}
          </span>
          {content.headline.suffix}
        </h1>
        <p className="text-base sm:text-lg text-brand-muted max-w-3xl leading-relaxed font-normal">
          {content.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onCopyEmail}
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-slate-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
        >
          <Copy className="w-4 h-4" />
          <span>{content.copyEmail}</span>
        </button>

        <a
          href="#trayectoria"
          className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-borderLight bg-brand-surface hover:bg-brand-card text-slate-200 font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
        >
          <span>{content.viewExperience}</span>
          <ChevronDown className="w-4 h-4 text-brand-dim" />
        </a>

        <a
          href="https://github.com/gabrielmattesich"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-borderLight bg-brand-surface/60 hover:bg-brand-card text-brand-muted hover:text-slate-200 font-mono text-xs px-4 py-2.5 rounded-lg transition-all"
        >
          <span>{content.githubLinkText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-brand-border/60">
        {content.metrics.map((metric, index) => {
          let valueClass = "text-white";
          if (metric.accent === "emerald") valueClass = "text-brand-accent";
          if (metric.accent === "cyan") valueClass = "text-cyan-400";

          return (
            <div key={index} className="space-y-1">
              <div className={`font-mono text-2xl font-bold tracking-tight ${valueClass}`}>
                {metric.value}
              </div>
              <div className="text-xs text-brand-dim uppercase tracking-wider font-mono">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


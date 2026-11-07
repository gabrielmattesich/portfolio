"use client";

import React from "react";
import { Layers, Zap, Cloud, Cpu } from "lucide-react";
import { ArchitecturePillar, PortfolioContent } from "@/types/portfolio.type";

interface PillarsSectionProps {
  content: PortfolioContent["pillars"];
}

export default function PillarsSection({ content }: PillarsSectionProps) {
  const getPillarIcon = (iconName: ArchitecturePillar["icon"]) => {
    switch (iconName) {
      case "layers":
        return <Layers className="w-5 h-5" />;
      case "activity":
        return <Zap className="w-5 h-5" />;
      case "cloud":
        return <Cloud className="w-5 h-5" />;
      case "cpu":
        return <Cpu className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const getIconStyles = (index: number) => {
    switch (index) {
      case 0:
        return "bg-brand-accentDim text-brand-accent border-brand-accent/20";
      case 1:
        return "bg-cyan-950/40 text-cyan-400 border-cyan-800/30";
      case 2:
        return "bg-emerald-950/40 text-emerald-400 border-emerald-800/30";
      case 3:
        return "bg-indigo-950/40 text-indigo-400 border-indigo-800/30";
      default:
        return "bg-brand-accentDim text-brand-accent border-brand-accent/20";
    }
  };

  return (
    <section id="pilares" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <span className="text-xs font-mono text-brand-accent uppercase tracking-widest font-semibold">
          {content.sectionTag}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {content.title}
        </h2>
        <p className="text-sm text-brand-muted max-w-2xl">
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {content.items.map((pillar, index) => (
          <div
            key={pillar.id}
            className="p-6 rounded-xl bg-brand-surface border border-brand-border card-hover-border space-y-3"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center border ${getIconStyles(
                index
              )}`}
            >
              {getPillarIcon(pillar.icon)}
            </div>
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {pillar.description}
            </p>
            <div className="pt-2 font-mono text-xs text-brand-dim flex flex-wrap gap-2">
              {pillar.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


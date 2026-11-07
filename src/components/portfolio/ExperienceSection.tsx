"use client";

import React from "react";
import { PortfolioContent } from "@/types/portfolio.type";

interface ExperienceSectionProps {
  content: PortfolioContent["experience"];
}

export default function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="trayectoria" className="space-y-8 scroll-mt-24">
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

      <div className="relative border-l border-brand-border/80 ml-3 sm:ml-4 space-y-12">
        {content.items.map((job, index) => {
          const isCurrent = index === 0;

          return (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Dot Marker */}
              {isCurrent ? (
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-surface border-2 border-brand-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                </div>
              ) : (
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-surface border-2 border-slate-600" />
              )}

              <div className="p-6 rounded-xl bg-brand-surface border border-brand-border card-hover-border space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-brand-border/40 pb-3">
                  <div>
                    <span
                      className={`text-xs font-mono ${
                        isCurrent
                          ? "text-brand-accent font-semibold"
                          : "text-brand-dim"
                      }`}
                    >
                      {job.period}
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {job.company}
                      {job.scopeBadge && (
                        <span className="text-xs px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-normal">
                          {job.scopeBadge}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {job.role}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-brand-dim self-start sm:self-center">
                    {job.location}
                  </div>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {job.description}
                </p>

                {job.highlights && job.highlights.length > 0 && (
                  <ul className="text-xs text-slate-300 space-y-2 list-none">
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <span className="text-brand-accent mt-0.5 flex-shrink-0">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {job.tools && job.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px] text-slate-300">
                    {job.tools.map((tool, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-0.5 rounded bg-brand-card border border-brand-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


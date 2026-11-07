"use client";

import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { GitCommit, Calendar } from "lucide-react";
import { PortfolioContent, StackCategory } from "@/types/portfolio.type";

interface StackSectionProps {
  content: PortfolioContent["stack"];
}

export default function StackSection({ content }: StackSectionProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const getTitleColorClass = (accent: StackCategory["accentColor"]) => {
    switch (accent) {
      case "emerald":
        return "text-brand-accent";
      case "cyan":
        return "text-cyan-400";
      case "green":
        return "text-emerald-400";
      case "purple":
        return "text-purple-400";
      case "amber":
        return "text-amber-400";
      case "pink":
        return "text-pink-400";
      default:
        return "text-brand-accent";
    }
  };

  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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

        {/* Live GitHub Calendar Toggle */}
        <button
          type="button"
          onClick={() => setShowCalendar((prev) => !prev)}
          className="self-start sm:self-auto inline-flex items-center gap-2 border border-brand-border hover:border-brand-accent/50 bg-brand-surface px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
        >
          <GitCommit className="w-3.5 h-3.5 text-brand-accent" />
          <span>
            {showCalendar
              ? content.hideCalendarButton || "Ocultar Actividad"
              : content.showCalendarButton || "Ver Actividad GitHub"}
          </span>
        </button>
      </div>

      {/* GitHub Calendar Container if expanded */}
      {showCalendar && (
        <div className="p-6 rounded-xl bg-brand-surface border border-brand-border space-y-4 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-accent">
            <Calendar className="w-4 h-4" />
            <span>{content.calendarTitle || "GitHub Contributions"}</span>
          </div>
          <div className="flex justify-center min-w-[700px] py-2">
            <GitHubCalendar
              username="gabrielmattesich"
              colorScheme="dark"
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>
        </div>
      )}

      {/* Stack Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.categories.map((category, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-brand-surface border border-brand-border card-hover-border space-y-3"
          >
            <div
              className={`text-xs font-mono uppercase tracking-wider font-semibold ${getTitleColorClass(
                category.accentColor
              )}`}
            >
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-brand-card border border-brand-border text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { PortfolioContent, CertificationItem } from "@/types/portfolio.type";

interface CredentialsSectionProps {
  content: PortfolioContent["credentials"];
}

export default function CredentialsSection({
  content,
}: CredentialsSectionProps) {
  const getDateColorClass = (accent?: CertificationItem["dateAccent"]) => {
    switch (accent) {
      case "emerald":
        return "text-brand-accent";
      case "cyan":
        return "text-cyan-400";
      case "dim":
      default:
        return "text-brand-dim";
    }
  };

  // Duplicating the items for a seamless infinite loop along the X axis
  const marqueeItems = [...content.items, ...content.items];

  return (
    <section id="credenciales" className="space-y-6 scroll-mt-24 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
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

        <span className="text-[11px] font-mono text-brand-dim hidden sm:inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 animate-pulse" />
          Pausar al pasar el cursor
        </span>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-brand-bg to-transparent z-10" />

        {/* Marquee Track moving along X */}
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {marqueeItems.map((cert, index) => {
            const CardTag = cert.link ? "a" : "div";
            const linkProps = cert.link
              ? {
                  href: cert.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardTag
                key={`${cert.certId}-${index}`}
                {...linkProps}
                className={`w-[290px] sm:w-[330px] flex-shrink-0 p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/60 card-hover-border transition-all flex flex-col justify-between group block ${
                  cert.link ? "cursor-pointer" : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
                    <span className="font-medium text-slate-300">{cert.issuer}</span>
                    <span className={getDateColorClass(cert.dateAccent)}>
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors flex items-start justify-between gap-1.5 leading-snug">
                    <span className="line-clamp-2">{cert.title}</span>
                    {cert.link && (
                      <ExternalLink className="w-3.5 h-3.5 text-brand-dim group-hover:text-brand-accent flex-shrink-0 mt-0.5 transition-colors" />
                    )}
                  </h3>
                  <p className="text-xs text-brand-muted line-clamp-2">
                    {cert.skills}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-brand-dim pt-3 border-t border-brand-border/40 flex items-center justify-between mt-3">
                  <span className="truncate max-w-[190px]">ID: {cert.certId}</span>
                  {cert.link && (
                    <span className="text-brand-accent group-hover:underline text-[10px] font-mono flex-shrink-0">
                      Verificar ↗
                    </span>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

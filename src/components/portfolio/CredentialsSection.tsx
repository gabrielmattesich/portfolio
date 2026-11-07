"use client";

import React from "react";
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

  return (
    <section id="credenciales" className="space-y-8 scroll-mt-24">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.items.map((cert, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-brand-surface border border-brand-border hover:border-brand-borderLight transition-all space-y-2"
          >
            <div className="flex items-center justify-between text-xs font-mono text-brand-dim">
              <span>{cert.issuer}</span>
              <span className={getDateColorClass(cert.dateAccent)}>
                {cert.date}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
            <p className="text-xs text-brand-muted">{cert.skills}</p>
            <div className="text-[10px] font-mono text-brand-dim pt-1">
              ID: {cert.certId}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


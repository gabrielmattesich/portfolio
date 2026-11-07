"use client";

import React from "react";
import { PortfolioContent } from "@/types/portfolio.type";

interface FooterProps {
  content: PortfolioContent["footer"];
}

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-brand-border/60 bg-brand-bg/90 py-8 text-xs font-mono text-brand-dim">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© {currentYear} Gabriel Mattesich.</span>
          <span>•</span>
          <span>{content.tagline}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/gabrielmattesich"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-mattesich"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mattesichgabriel@gmail.com"
            className="hover:text-slate-200 transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            onClick={scrollToTop}
            className="hover:text-brand-accent transition-colors"
          >
            {content.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}


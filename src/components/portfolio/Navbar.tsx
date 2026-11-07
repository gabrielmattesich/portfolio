"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Menu, X, ArrowRight } from "lucide-react";
import { Language, PortfolioContent } from "@/types/portfolio.type";
import profileImg from "@/assets/profile.png";

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  content: PortfolioContent["nav"];
  onCopyEmail: () => void;
}

export default function Navbar({
  language,
  onLanguageChange,
  content,
  onCopyEmail,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-bg/85 border-b border-brand-border/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo / Avatar Identifier */}
        <Link href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative flex-shrink-0">
            {/* Avatar image with rounded clip */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-accent/50 bg-brand-surface p-[1px] group-hover:border-brand-accent group-hover:scale-105 transition-all shadow-sm shadow-brand-accent/20">
              <Image
                src={profileImg}
                alt="Gabriel Mattesich"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            {/* Animated status dot pulse clearly on top */}
            <span className="absolute -bottom-0.5 -right-0.5 z-20 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent ring-2 ring-brand-bg" />
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-none">
            <span className="font-mono text-xs sm:text-sm tracking-tight font-semibold text-slate-100 group-hover:text-brand-accent transition-colors leading-tight">
              gabriel.mattesich<span className="text-brand-dim">()</span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-brand-dim group-hover:text-brand-muted transition-colors mt-0.5 sm:mt-0">
              <span className="hidden sm:inline">| </span>Since 1996<span className="hidden sm:inline"> |</span>
            </span>
          </div>
        </Link>

        {/* Quick Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium uppercase tracking-wider text-brand-muted">
          <a href="#pilares" className="hover:text-slate-100 transition-colors">
            {content.pillars}
          </a>
          <a
            href="#trayectoria"
            className="hover:text-slate-100 transition-colors"
          >
            {content.experience}
          </a>
          <a href="#stack" className="hover:text-slate-100 transition-colors">
            {content.stack}
          </a>
          <a
            href="#credenciales"
            className="hover:text-slate-100 transition-colors"
          >
            {content.credentials}
          </a>
        </nav>

        {/* Right side items: Language switcher, desktop socials, contact, hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Integrated Language Switcher */}
          <div
            className="flex items-center rounded-lg border border-brand-border bg-brand-surface p-0.5 text-xs font-mono"
            role="group"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              onClick={() => onLanguageChange("es")}
              aria-pressed={language === "es"}
              className={`px-2 py-1 rounded transition-colors text-[11px] sm:text-xs font-semibold ${language === "es"
                  ? "bg-brand-accent text-slate-950 shadow-sm"
                  : "text-brand-dim hover:text-slate-200"
                }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              aria-pressed={language === "en"}
              className={`px-2 py-1 rounded transition-colors text-[11px] sm:text-xs font-semibold ${language === "en"
                  ? "bg-brand-accent text-slate-950 shadow-sm"
                  : "text-brand-dim hover:text-slate-200"
                }`}
            >
              EN
            </button>
          </div>

          {/* Social Links (Desktop / Tablet) */}
          <a
            href="https://www.linkedin.com/in/gabriel-mattesich"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-accent transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/gabrielmattesich"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-accent transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Contact Direct button (Desktop / Tablet) */}
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center text-xs font-mono font-medium border border-brand-borderLight hover:border-brand-accent bg-brand-surface px-3 py-1.5 rounded-md transition-all text-slate-200"
          >
            {content.contact}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-brand-border bg-brand-surface text-slate-300 hover:text-brand-accent hover:border-brand-accent transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-brand-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <a
              href="#pilares"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-brand-surface transition-colors"
            >
              <span>{"//"} 01. {content.pillars}</span>
              <ArrowRight className="w-4 h-4 text-brand-dim" />
            </a>
            <a
              href="#trayectoria"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-brand-surface transition-colors"
            >
              <span>{"//"} 02. {content.experience}</span>
              <ArrowRight className="w-4 h-4 text-brand-dim" />
            </a>
            <a
              href="#stack"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-brand-surface transition-colors"
            >
              <span>{"//"} 03. {content.stack}</span>
              <ArrowRight className="w-4 h-4 text-brand-dim" />
            </a>
            <a
              href="#credenciales"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-brand-surface transition-colors"
            >
              <span>{"//"} 04. {content.credentials}</span>
              <ArrowRight className="w-4 h-4 text-brand-dim" />
            </a>
            <a
              href="#contacto"
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-3 rounded-lg text-brand-accent font-semibold bg-brand-accentDim border border-brand-accent/20 transition-colors"
            >
              <span>{"//"} 05. {content.contact}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Social Links & Direct Email Action */}
          <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between px-2 text-xs font-mono">
            <div className="flex items-center gap-3 text-brand-muted">
              <a
                href="https://www.linkedin.com/in/gabriel-mattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href="https://github.com/gabrielmattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onCopyEmail();
                closeMobileMenu();
              }}
              className="text-brand-accent hover:underline font-semibold"
            >
              {language === "es" ? "Copiar Email" : "Copy Email"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

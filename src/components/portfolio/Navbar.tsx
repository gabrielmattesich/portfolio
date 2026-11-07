"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

  const navLinks = [
    { href: "#pilares", label: content.pillars, num: "01" },
    { href: "#trayectoria", label: content.experience, num: "02" },
    { href: "#stack", label: content.stack, num: "03" },
    { href: "#credenciales", label: content.credentials, num: "04" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-bg/85 border-b border-brand-border/60 transition-all"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo / Avatar Identifier */}
        <Link href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <motion.div
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Avatar image with rounded clip */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-accent/50 bg-brand-surface p-[1px] group-hover:border-brand-accent transition-colors shadow-sm shadow-brand-accent/20">
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
          </motion.div>

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-slate-100 transition-colors group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right side items: Language switcher, desktop socials, contact, hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Integrated Language Switcher with animated pill */}
          <div
            className="relative flex items-center rounded-lg border border-brand-border bg-brand-surface p-0.5 text-xs font-mono"
            role="group"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              onClick={() => onLanguageChange("es")}
              aria-pressed={language === "es"}
              className={`relative z-10 px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs font-semibold ${
                language === "es"
                  ? "text-slate-950 font-bold"
                  : "text-brand-dim hover:text-slate-200"
              }`}
            >
              {language === "es" && (
                <motion.span
                  layoutId="activeLangPill"
                  className="absolute inset-0 bg-brand-accent rounded shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              aria-pressed={language === "en"}
              className={`relative z-10 px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs font-semibold ${
                language === "en"
                  ? "text-slate-950 font-bold"
                  : "text-brand-dim hover:text-slate-200"
              }`}
            >
              {language === "en" && (
                <motion.span
                  layoutId="activeLangPill"
                  className="absolute inset-0 bg-brand-accent rounded shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              EN
            </button>
          </div>

          {/* Social Links (Desktop / Tablet) */}
          <motion.a
            href="https://www.linkedin.com/in/gabriel-mattesich"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-accent transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="https://github.com/gabrielmattesich"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-accent transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          {/* Contact Direct button (Desktop / Tablet) */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center text-xs font-mono font-medium border border-brand-borderLight hover:border-brand-accent bg-brand-surface px-3 py-1.5 rounded-md transition-all text-slate-200 hover:text-white"
          >
            {content.contact}
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-brand-border bg-brand-surface text-slate-300 hover:text-brand-accent hover:border-brand-accent transition-colors focus:outline-none focus:ring-1 focus:ring-brand-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-brand-border bg-brand-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-2xl"
          >
            <nav className="flex flex-col space-y-1 text-sm font-medium">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-brand-surface transition-colors"
                >
                  <span>
                    {"//"} {link.num}. {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-dim" />
                </motion.a>
              ))}

              <motion.a
                href="#contacto"
                onClick={closeMobileMenu}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18 }}
                className="flex items-center justify-between p-3 rounded-lg text-brand-accent font-semibold bg-brand-accentDim border border-brand-accent/20 transition-colors"
              >
                <span>{"//"} 05. {content.contact}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </nav>

            {/* Mobile Social Links & Direct Email Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="pt-3 border-t border-brand-border/60 flex items-center justify-between px-2 text-xs font-mono"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

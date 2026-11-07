"use client";

import React, { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const desktopNavLinks = [
    { href: "#pilares", id: "pilares", label: content.pillars, num: "01" },
    { href: "#trayectoria", id: "trayectoria", label: content.experience, num: "02" },
    { href: "#stack", id: "stack", label: content.stack, num: "03" },
    { href: "#credenciales", id: "credenciales", label: content.credentials, num: "04" },
  ];

  const allNavLinks = [
    ...desktopNavLinks,
    { href: "#contacto", id: "contacto", label: content.contact, num: "05" },
  ];

  // Active section scroll detection using getBoundingClientRect
  useEffect(() => {
    const sectionIds = ["pilares", "trayectoria", "stack", "credenciales", "contacto"];

    const handleScroll = () => {
      // If near the top
      if (window.scrollY < 160) {
        setActiveSection("");
        return;
      }

      // If reached the bottom of the page, activate contact section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contacto");
        return;
      }

      // Check section bounding rect relative to viewport
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top is near the navbar and bottom is still visible
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Guaranteed smooth scroll handler with sticky header offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    if (href === "#") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      window.history.pushState(null, "", "/");
      setActiveSection("");
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementPosition - navOffset);

      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 50);

      window.history.pushState(null, "", href);
      setActiveSection(targetId);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-bg/85 border-b border-brand-border/60 transition-all"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo / Avatar Identifier */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-2.5 group flex-shrink-0 cursor-pointer"
        >
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
        </a>

        {/* Quick Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium uppercase tracking-wider text-brand-muted">
          {desktopNavLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors group ${
                  isActive ? "text-brand-accent font-semibold" : "hover:text-slate-100"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-300 rounded-full ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
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
            onClick={(e) => handleNavClick(e, "#contacto")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden sm:inline-flex items-center text-xs font-mono font-medium border px-3 py-1.5 rounded-md transition-all ${
              activeSection === "contacto"
                ? "border-brand-accent bg-brand-accent text-slate-950 font-bold"
                : "border-brand-borderLight hover:border-brand-accent bg-brand-surface text-slate-200 hover:text-white"
            }`}
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

      {/* Mobile Slide-down Navigation Menu as Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay: closes menu on outside tap without shifting layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm -z-10"
              aria-hidden="true"
            />

            {/* Dropdown panel positioned as absolute overlay */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-full left-0 right-0 w-full border-b border-brand-border bg-brand-bg/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <nav className="flex flex-col space-y-1 text-sm font-medium">
                {allNavLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                          isActive
                            ? "text-brand-accent font-semibold bg-brand-accentDim border border-brand-accent/30"
                            : "text-slate-300 hover:text-brand-accent hover:bg-brand-surface border border-transparent"
                        }`}
                      >
                        <span>
                          {"//"} {link.num}. {link.label}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 ${
                            isActive ? "text-brand-accent" : "text-brand-dim"
                          }`}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Social Links & Direct Email Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
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
                  className="text-brand-accent hover:underline font-semibold cursor-pointer"
                >
                  {language === "es" ? "Copiar Email" : "Copy Email"}
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

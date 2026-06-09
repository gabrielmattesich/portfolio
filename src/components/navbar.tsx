"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

interface NavbarProps {
  language: "es" | "en";
  onLanguageChange: (lang: "es" | "en") => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = {
    es: [
      { id: "inicio", label: "Inicio" },
      { id: "sobre-mi", label: "Sobre Mí" },
      { id: "stack", label: "Stack" },
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos", label: "Proyectos" },
      { id: "educacion", label: "Educación" },
      { id: "contacto", label: "Contacto" },
    ],
    en: [
      { id: "inicio", label: "Home" },
      { id: "sobre-mi", label: "About Me" },
      { id: "stack", label: "Stack" },
      { id: "experiencia", label: "Experience" },
      { id: "proyectos", label: "Projects" },
      { id: "educacion", label: "Education" },
      { id: "contacto", label: "Contact" },
    ],
  }[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider">
              GM
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer focus:outline-none relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-white/10" />

            {/* Theme Toggle */}
            <ThemeToggle language={language} />

            {/* Language Selector */}
            <div className="flex space-x-1 glass-container p-1">
              <button
                onClick={() => onLanguageChange("es")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer",
                  language === "es"
                    ? "bg-cyan-500/80 text-white"
                    : "text-slate-300 hover:bg-white/10"
                )}
              >
                🇦🇷 ES
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer",
                  language === "en"
                    ? "bg-cyan-500/80 text-white"
                    : "text-slate-300 hover:bg-white/10"
                )}
              >
                🌎 EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg glass-container hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-2 mb-4 space-y-4 rounded-2xl glass-container p-4 border border-white/10">
                {/* Navigation Links Mobile */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        closeMobileMenu();
                      }}
                      className="text-left w-full px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all font-medium cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="h-[1px] bg-white/10 w-full" />

                {/* Theme Toggle Mobile */}
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm text-slate-300">
                    {language === "es" ? "Tema" : "Theme"}
                  </span>
                  <ThemeToggle language={language} />
                </div>

                {/* Language Selector Mobile */}
                <div className="flex flex-col gap-2 px-2">
                  <span className="text-sm text-slate-300 mb-1">
                    {language === "es" ? "Idioma" : "Language"}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onLanguageChange("es");
                        closeMobileMenu();
                      }}
                      className={cn(
                        "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer",
                        language === "es"
                          ? "bg-cyan-500/80 text-white"
                          : "glass-container text-slate-300 hover:bg-white/10"
                      )}
                    >
                      🇦🇷 Español
                    </button>
                    <button
                      onClick={() => {
                        onLanguageChange("en");
                        closeMobileMenu();
                      }}
                      className={cn(
                        "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer",
                        language === "en"
                          ? "bg-cyan-500/80 text-white"
                          : "glass-container text-slate-300 hover:bg-white/10"
                      )}
                    >
                      🌎 English
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}


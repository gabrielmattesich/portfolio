"use client";

import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

interface NavbarProps {
  language: "es" | "en";
  onLanguageChange: (lang: "es" | "en") => void;
  onCVDownload: () => void;
}

export default function Navbar({ language, onLanguageChange, onCVDownload }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              GM
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle language={language} />

            {/* Language Selector */}
            <div className="flex space-x-1 glass-container p-1">
              <button
                onClick={() => onLanguageChange("es")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
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
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                  language === "en"
                    ? "bg-cyan-500/80 text-white"
                    : "text-slate-300 hover:bg-white/10"
                )}
              >
                🌎 EN
              </button>
            </div>

            {/* CV Download Button */}
            <Button
              onClick={onCVDownload}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-4 py-2 text-xs md:text-sm rounded-xl shadow-lg border border-white/20"
            >
              <FileDown className="mr-2 h-4 w-4" />
              {language === "es" ? "Descargar CV" : "Download CV"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg glass-container hover:bg-white/10 transition-colors"
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
              <div className="py-4 space-y-4">
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
                        "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
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
                        "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                        language === "en"
                          ? "bg-cyan-500/80 text-white"
                          : "glass-container text-slate-300 hover:bg-white/10"
                      )}
                    >
                      🌎 English
                    </button>
                  </div>
                </div>

                {/* CV Download Button Mobile */}
                <div className="px-2">
                  <Button
                    onClick={() => {
                      onCVDownload();
                      closeMobileMenu();
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-4 py-3 text-sm rounded-xl shadow-lg border border-white/20"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    {language === "es" ? "Descargar CV" : "Download CV"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

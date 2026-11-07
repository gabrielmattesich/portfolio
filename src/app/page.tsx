"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types/portfolio.type";
import { portfolioContent } from "@/lib/portafolio-data";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import PillarsSection from "@/components/portfolio/PillarsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import StackSection from "@/components/portfolio/StackSection";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Toast from "@/components/portfolio/Toast";
import InitialLoader from "@/components/portfolio/InitialLoader";

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = portfolioContent[language];

  const handleCopyEmail = useCallback(() => {
    const email = "mattesichgabriel@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(
        () => {
          setToastMessage(content.hero.emailCopied);
          setTimeout(() => setToastMessage(null), 2800);
        },
        () => {
          fallbackCopyText(email);
        }
      );
    } else {
      fallbackCopyText(email);
    }

    function fallbackCopyText(text: string) {
      const tempInput = document.createElement("input");
      tempInput.style.position = "absolute";
      tempInput.style.left = "-9999px";
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        setToastMessage(content.hero.emailCopied);
      } catch {
        setToastMessage(email);
      } finally {
        document.body.removeChild(tempInput);
        setTimeout(() => setToastMessage(null), 2800);
      }
    }
  }, [content.hero.emailCopied]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative flex flex-col font-sans bg-brand-bg text-slate-100 selection:bg-brand-accent selection:text-black scroll-smooth">
      {/* Initial Boot Sequence Loader */}
      <InitialLoader />

      {/* Background Grids & Radial Hero Glow */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-[640px] hero-glow pointer-events-none z-0" />

      {/* Floating Toast Notification */}
      <Toast message={toastMessage} />

      {/* Navigation Bar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        content={content.nav}
        onCopyEmail={handleCopyEmail}
      />

      {/* Main Page Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-28 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection
            content={content.hero}
            onCopyEmail={handleCopyEmail}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <PillarsSection content={content.pillars} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ExperienceSection content={content.experience} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <StackSection content={content.stack} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <CredentialsSection content={content.credentials} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <ContactSection
            content={content.contact}
            onCopyEmail={handleCopyEmail}
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer content={content.footer} />
    </div>
  );
}

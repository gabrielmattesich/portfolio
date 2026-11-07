"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitialLoaderProps {
  onComplete?: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "> initializing distributed runtime...", threshold: 25 },
    { text: "> verifying bounded contexts [OK]", threshold: 50 },
    { text: "> connecting regional nodes (AR / PY) [ONLINE]", threshold: 75 },
    { text: "> system ready: gabriel.mattesich()", threshold: 95 },
  ];

  useEffect(() => {
    // Check if loader has already been shown during this session
    const hasLoaded = sessionStorage.getItem("portfolio_booted");
    if (hasLoaded) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Lock body scroll during boot sequence
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic increment
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 45);

    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        sessionStorage.setItem("portfolio_booted", "true");
        document.body.style.overflow = "unset";
        onComplete?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  // Update current terminal step based on progress
  useEffect(() => {
    if (progress >= 95) setCurrentStep(3);
    else if (progress >= 75) setCurrentStep(2);
    else if (progress >= 50) setCurrentStep(1);
    else if (progress >= 25) setCurrentStep(0);

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("portfolio_booted", "true");
        document.body.style.overflow = "unset";
        onComplete?.();
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("portfolio_booted", "true");
    document.body.style.overflow = "unset";
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0.98,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-bg select-none px-4"
        >
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative z-10 w-full max-w-lg p-6 rounded-2xl bg-brand-surface/90 border border-brand-border shadow-2xl backdrop-blur-xl space-y-6">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
              </div>
              <span className="font-mono text-xs text-brand-dim">
                gabriel.mattesich() ~ boot_sequence
              </span>
              <button
                type="button"
                onClick={handleSkip}
                className="text-[11px] font-mono text-brand-dim hover:text-brand-accent transition-colors"
              >
                [Esc / Skip]
              </button>
            </div>

            {/* Boot Console Output */}
            <div className="font-mono text-xs sm:text-sm space-y-2 min-h-[96px] text-slate-300">
              {steps.map((step, idx) => {
                if (idx > currentStep) return null;
                const isLatest = idx === currentStep;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-2 ${
                      isLatest ? "text-brand-accent" : "text-brand-muted"
                    }`}
                  >
                    <span>{step.text}</span>
                    {isLatest && progress < 100 && (
                      <span className="inline-block w-2 h-3.5 bg-brand-accent animate-pulse" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-1.5 pt-2 border-t border-brand-border/40">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-brand-dim">Initializing environment</span>
                <span className="text-brand-accent font-semibold">
                  {progress}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-brand-card rounded-full overflow-hidden border border-brand-border/60">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

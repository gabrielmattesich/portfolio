"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-surface border border-brand-accent/40 text-white px-4 py-3 rounded-lg shadow-2xl backdrop-blur-md"
        >
          <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


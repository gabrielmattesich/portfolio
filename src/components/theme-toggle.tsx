"use client";

import { useTheme } from "@/contexts/theme-context";
import { Moon, Sun, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  language: "es" | "en";
}

export default function ThemeToggle({ language }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: "dark" as const,
      icon: Moon,
      label: language === "es" ? "Oscuro" : "Dark",
      gradient: "from-slate-700 to-slate-900",
      activeGradient: "from-slate-600 to-slate-800",
    },
    {
      id: "light" as const,
      icon: Sun,
      label: language === "es" ? "Claro" : "Light",
      gradient: "from-amber-400 to-orange-500",
      activeGradient: "from-amber-300 to-orange-400",
    },
    {
      id: "tech" as const,
      icon: Zap,
      label: language === "es" ? "Tech" : "Tech",
      gradient: "from-cyan-500 to-purple-600",
      activeGradient: "from-cyan-400 to-purple-500",
    },
  ];

  return (
    <div className="glass-container p-1.5 flex gap-1">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;

        return (
          <motion.button
            key={t.id}
            onClick={() => setTheme(t.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-3 py-2 rounded-lg transition-all duration-300
              ${
                isActive
                  ? `bg-gradient-to-r ${t.activeGradient} text-white shadow-lg`
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              }
            `}
            title={t.label}
          >
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-medium hidden sm:inline">
                {t.label}
              </span>
            </div>

            {/* Active indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-lg border-2 border-white/30"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

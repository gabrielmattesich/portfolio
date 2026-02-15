"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeCounterProps {
  language: "es" | "en";
}

export default function TimeCounter({ language }: TimeCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date("2017-03-10");
      const now = new Date();
      
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const daysInPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeElapsed({ years, months, days });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-slate-300">
      <Clock size={16} className="text-emerald-400" />
      <span className="text-sm">
        {language === "es" 
          ? `${timeElapsed.years} años, ${timeElapsed.months} meses, ${timeElapsed.days} días de contribuciones`
          : `${timeElapsed.years} years, ${timeElapsed.months} months, ${timeElapsed.days} days of contribution`
        }
      </span>
    </div>
  );
}
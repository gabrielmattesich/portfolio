"use client";

import { useState, useEffect } from "react";
import CodeParticles from "./code-particles";

export default function AnimatedBackground() {
  const [animation, setAnimation] = useState<"code" | "flow">("flow");

  useEffect(() => {
    // Switch animation every 30 seconds
    const interval = setInterval(() => {
      setAnimation((prev) => (prev === "code" ? "flow" : "code"));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <CodeParticles />
    </div>
  );
}

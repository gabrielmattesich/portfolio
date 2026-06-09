"use client";

import CodeParticles from "./code-particles";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden animate-fade-in">
      <CodeParticles />
    </div>
  );
}

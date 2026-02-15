"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface CodeParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  direction: number;
  character: string;
  rotationSpeed: number;
  rotation: number;
}

export default function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CodeParticle[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const createParticle = (): CodeParticle => {
      const codeChars = ['{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-', '*', '&', '#', '@', '$'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 16 + 8,
        color: getThemeColor(),
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        direction: Math.random() * Math.PI * 2,
        character: codeChars[Math.floor(Math.random() * codeChars.length)],
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        rotation: 0,
      };
    };

    const getThemeColor = () => {
      const platformColors = [
        'rgba(0, 212, 255, 0.6)',    // Primary cyan (--primary)
        'rgba(124, 58, 237, 0.6)',   // Purple (--glass-secondary)
        'rgba(16, 185, 129, 0.6)',   // Green (--secondary/--glass-accent)
        'rgba(255, 183, 77, 0.6)',   // Gold (--glass-highlight)
        'rgba(156, 163, 175, 0.4)',  // Muted gray
        'rgba(99, 102, 241, 0.6)',   // Indigo accent
      ];
      return platformColors[Math.floor(Math.random() * platformColors.length)];
    };

    const updateParticle = (particle: CodeParticle) => {
      particle.x += Math.cos(particle.direction) * particle.speed;
      particle.y += Math.sin(particle.direction) * particle.speed;
      particle.rotation += particle.rotationSpeed;

      if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.x > canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = canvas.height + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;

      const pulse = Math.sin(Date.now() * 0.002 + particle.x * 0.01) * 0.1;
      particle.opacity = Math.max(0.05, Math.min(0.4, particle.opacity + pulse));
    };

    const drawParticle = (particle: CodeParticle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      ctx.font = `${particle.size}px 'Monaco', 'Menlo', 'Ubuntu Mono', monospace`;
      ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 8;
      ctx.fillText(particle.character, 0, 0);
      
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.fillStyle = 'rgba(15, 20, 25, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      
    </div>
  );
}

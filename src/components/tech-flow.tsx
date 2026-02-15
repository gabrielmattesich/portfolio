"use client";

import { useEffect, useRef } from "react";

interface FlowParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  connections: FlowParticle[];
  color: string;
}

export default function TechFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<FlowParticle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7; // 70% of viewport height
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          connections: [],
          color: getRandomColor(0.6),
        });
      }
    };

    const getRandomColor = (opacity: number) => {
      const colors = [
          `rgba(167, 139, 250, ${opacity})`, // lime-400
          `rgba(139, 92, 246, ${opacity})`, // lime-500
        `rgba(101, 163, 13, ${opacity})`, // indigo-600
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const findConnections = () => {
      const connectionDistance = Math.min(canvas.width, canvas.height) * 0.15;
      
      particlesRef.current.forEach(particle => {
        particle.connections = [];
        
        particlesRef.current.forEach(otherParticle => {
          if (particle === otherParticle) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            particle.connections.push(otherParticle);
          }
        });
      });
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Mouse interaction
        if (mouseRef.current.isActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.speedX -= (dx / distance) * force * 0.02;
            particle.speedY -= (dy / distance) * force * 0.02;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw connections
        particle.connections.forEach(connectedParticle => {
          const dx = particle.x - connectedParticle.x;
          const dy = particle.y - connectedParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - (distance / (canvas.width * 0.15));
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(connectedParticle.x, connectedParticle.y);
          ctx.strokeStyle = `rgba(101, 163, 13, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });
      
      // Find new connections
      findConnections();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
}

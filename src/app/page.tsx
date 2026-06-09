"use client";
import portafolio from "../../package.json";
import profile from "@/assets/profile.png";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Compass,
  X,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  ChartCandlestick,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { pageData, timeCounter } from "@/lib/portafolio-data";
import AnimatedBackground from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import TimeCounter from "@/components/time-counter";
import SkillsSection from "@/components/skills-section";
import Navbar from "@/components/navbar";

export default function Portfolio() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [metadata, setMetadata] = useState(pageData[language]);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMetadata(pageData[language]);
  }, [language]);

  // Intercept vertical wheel events and translate them to horizontal scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Si el usuario hace scroll vertical (rueda del ratón), lo convertimos a horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // passive: false permite usar e.preventDefault()
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-background mesh-gradient text-white">
      {/* Navbar fija en la parte superior */}
      <Navbar language={language} onLanguageChange={changeLanguage} />

      {/* 
        Contenedor principal nativo horizontal.
        No hay scroll vertical en toda la página.
      */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex flex-row scroll-smooth custom-scrollbar relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Panel 1: Inicio (Hero) */}
        <section id="inicio" className="relative h-full w-screen flex items-center justify-center flex-shrink-0 snap-start">
              {/* Animated Background */}
              <AnimatedBackground />

              <div className="container mx-auto px-6 py-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative order-1"
                  >
                    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-1">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={profile.src}
                          alt="Gabriel Mattesich"
                          width={300}
                          height={300}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    </div>

                    {/* Decorative gradient blur */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left order-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="inline-block mb-3">
                        <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 text-xs backdrop-blur-md">
                          <span className="animate-pulse mr-2">●</span>
                          {language === "es" ? "Disponible para proyectos" : "Available for projects"}
                        </Badge>
                      </div>

                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 via-purple-200 to-emerald-300 leading-tight">
                        Gabriel Mattesich
                      </h1>

                      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 mb-4 flex items-center justify-center md:justify-start gap-2">
                        <span className="text-cyan-400">{"<"}</span>
                        Software Developer
                        <span className="text-cyan-400">{"/>"}</span>
                      </h2>

                      <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center gap-2 text-slate-300 justify-center md:justify-start text-base">
                          <MapPin size={18} className="text-emerald-400" />
                          <span>{metadata.location}</span>
                        </div>
                        <TimeCounter language={language} />
                      </div>

                      {/* CTA Button */}
                      <div className="flex justify-center md:justify-start">
                        <Button
                          onClick={() => window.open("mailto:mattesichgabriel@gmail.com", "_blank")}
                          className="glass-button text-white px-6 py-5 text-sm md:text-base rounded-xl font-semibold hover:bg-white/20 border-cyan-500/30 flex items-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          {language === "es" ? "Contactar" : "Contact Me"}
                        </Button>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        <a
                          href="https://github.com/gabrielmattesich"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={22} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/gabriel-mattesich"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={22} />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 2: Sobre Mí */}
            <section
              id="sobre-mi"
              className="horizontal-section relative overflow-hidden flex items-center justify-center bg-black/10 w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 py-6 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Summary Bio */}
                  <div className="lg:col-span-7">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                          <Star className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                          {language === "es" ? "Sobre Mí" : "About Me"}
                        </h2>
                      </div>

                      <div className="prose prose-invert max-w-none max-h-[30vh] lg:max-h-[50vh] overflow-y-auto pr-3">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {metadata.summary}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Stats / Highlights */}
                  <div className="lg:col-span-5">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="grid grid-cols-1 gap-4"
                    >
                      <div className="glass-card p-5 hover:border-cyan-500/30 transition-all group flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                            {timeCounter()}+ {language === "es" ? "años" : "years"}
                          </p>
                          <p className="text-xs text-slate-400">
                            {language === "es" ? "Experiencia en software" : "Software experience"}
                          </p>
                        </div>
                      </div>

                      <div className="glass-card p-5 hover:border-emerald-500/30 transition-all group flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                          <Code2 className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                            15+
                          </p>
                          <p className="text-xs text-slate-400">
                            {language === "es" ? "Tecnologías dominadas" : "Technologies mastered"}
                          </p>
                        </div>
                      </div>

                      <div className="glass-card p-5 hover:border-purple-500/30 transition-all group flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
                          <ChartCandlestick className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                            10+ {language === "es" ? "proyectos" : "projects"}
                          </p>
                          <p className="text-xs text-slate-400">
                            {language === "es" ? "Soluciones completadas" : "Completed solutions"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 3: Stack Tecnológico */}
            <section
              id="stack"
              className="horizontal-section relative overflow-hidden flex items-center justify-center w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 py-6 relative z-10 max-w-6xl max-h-[85vh] overflow-y-auto">
                <SkillsSection language={language} />
              </div>
            </section>

            {/* Panel 4: Experiencia (Timeline Horizontal) */}
            <section
              id="experiencia"
              className="horizontal-section relative overflow-hidden flex items-center justify-center bg-black/10 w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 py-6 relative z-10 max-w-6xl w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                      <Briefcase className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                      {language === "es" ? "Experiencia Profesional" : "Professional Experience"}
                    </h2>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm">
                    {language === "es"
                      ? "Mi trayectoria en el desarrollo de software (desliza o scroll para ver más)"
                      : "My journey in software development (swipe or scroll to see more)"}
                  </p>
                </motion.div>

                {/* Horizontal Timeline */}
                <div className="relative mt-6">
                  {/* Timeline background line */}
                  <div className="timeline-horizontal-line" />

                  <div className="timeline-horizontal-container no-scrollbar gap-6 snap-x snap-mandatory">
                    {metadata.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="w-[300px] md:w-[380px] flex-shrink-0 snap-start select-none z-10"
                      >
                        {/* Node Header */}
                        <div className="flex items-center gap-3 mb-3 relative">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs bg-slate-950",
                              index === 0
                                ? "border-green-400 text-green-400 shadow-md shadow-green-400/20"
                                : "border-cyan-400 text-cyan-400"
                            )}
                          >
                            {index + 1}
                          </div>
                          <span className="text-xs text-slate-300 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {exp.period}
                          </span>
                        </div>

                        {/* Card container */}
                        <Card className="glass-card h-[320px] overflow-hidden flex flex-col justify-between border-white/15 hover:border-cyan-500/20 transition-all duration-300">
                          <CardContent className="p-4 flex flex-col h-full justify-between gap-3">
                            <div className="flex-shrink-0">
                              <div className="flex items-center gap-2">
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight">
                                  {exp.company}
                                </h4>
                                {index === 0 && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[9px] px-1.5 py-0.5">
                                    {language === "es" ? "Actual" : "Current"}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-cyan-400 text-xs font-semibold mt-1">{exp.role}</p>
                            </div>

                            {/* Description points */}
                            <ul className="space-y-1 text-slate-300 text-xs overflow-y-auto flex-1 pr-1 scrollbar-thin">
                              {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-cyan-400 mt-0.5">▹</span>
                                  <span className="leading-normal">{desc}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tools Badges */}
                            {exp.tools && (
                              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/10 flex-shrink-0">
                                {exp.tools.slice(0, 4).map((tool) => (
                                  <Badge
                                    key={tool}
                                    variant="outline"
                                    className="text-[9px] bg-white/5 py-0 px-1.5 text-slate-300"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 5: Proyectos & GitHub */}
            <section
              id="proyectos"
              className="horizontal-section relative overflow-hidden flex items-center justify-center w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 py-6 relative z-10 max-w-6xl max-h-[85vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Projects List */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                          <ChartCandlestick className="h-5 w-5 text-orange-400" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                          {language === "es" ? "Proyectos" : "Projects"}
                        </h2>
                      </div>
                      <p className="text-slate-400 text-xs">
                        {language === "es"
                          ? "Proyectos personales y profesionales destacados"
                          : "Featured personal and professional projects"}
                      </p>
                    </motion.div>

                    {metadata.projects.map((project, index) => (
                      <motion.div
                        key={project.key || index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-5 flex flex-col border-white/15 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h4>
                          <Badge
                            className={cn(
                              "text-[10px] px-2 py-0.5",
                              project.status === "building"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse"
                                : project.status === "running"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                            )}
                          >
                            {project.status === "building"
                              ? language === "es" ? "En construcción" : "Building"
                              : project.status === "running"
                              ? language === "es" ? "En ejecución" : "Running"
                              : project.status}
                          </Badge>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {project.technologies && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {project.demoAvailable && (
                          <Button
                            disabled
                            className="w-full text-xs py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30 cursor-not-allowed opacity-60"
                          >
                            {language === "es" ? "Solicitar demo" : "Request demo"}
                          </Button>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* GitHub Activity */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <Github className="text-cyan-400" size={20} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                          {language === "es" ? "Actividad en GitHub" : "GitHub Activity"}
                        </h2>
                      </div>
                      <p className="text-slate-400 text-xs">
                        {language === "es"
                          ? "Historial de contribuciones del último año"
                          : "Contribution history from the last year"}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="glass-card p-5 max-w-full overflow-hidden"
                    >
                      <div className="overflow-x-auto pb-2 overflow-y-hidden max-w-full">
                        <div className="min-w-[700px] text-xs">
                          <GitHubCalendar
                            username="gabrielmattesich"
                            colorScheme="dark"
                            hideColorLegend={false}
                            hideMonthLabels={false}
                            blockSize={12}
                            blockMargin={3}
                          />
                        </div>
                      </div>

                      {/* GitHub Quick Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                        <div>
                          <div className="text-base md:text-lg font-bold text-cyan-400">{timeCounter()}+</div>
                          <div className="text-[10px] text-slate-400">
                            {language === "es" ? "Años de Exp." : "Years of Exp."}
                          </div>
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-bold text-purple-400">15+</div>
                          <div className="text-[10px] text-slate-400">
                            {language === "es" ? "Proyectos" : "Projects"}
                          </div>
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-bold text-emerald-400">15+</div>
                          <div className="text-[10px] text-slate-400">
                            {language === "es" ? "Tecnologías" : "Tech Stack"}
                          </div>
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-bold text-yellow-400">100%</div>
                          <div className="text-[10px] text-slate-400">
                            {language === "es" ? "Compromiso" : "Commitment"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Panel 6: Educación */}
            <section
              id="educacion"
              className="horizontal-section relative overflow-hidden flex items-center justify-center bg-black/10 w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 py-6 relative z-10 max-w-6xl max-h-[85vh] overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-center"
                >
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                      <GraduationCap className="h-5 w-5 text-purple-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                      {language === "es" ? "Educación y Certificaciones" : "Education & Certifications"}
                    </h2>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm">
                    {language === "es"
                      ? "Formación académica y cursos especializados"
                      : "Academic background and specialized courses"}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {metadata.education.map((eduSection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="glass-card p-4 flex flex-col justify-between border-white/10"
                    >
                      <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1.5 leading-tight">
                        {eduSection.center}
                      </h4>
                      <div className="space-y-2 flex-1 flex flex-col justify-center">
                        {eduSection.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start justify-between gap-3 text-xs"
                          >
                            <div className="flex-1">
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-cyan-300 hover:text-cyan-200 transition-colors underline decoration-dotted"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <span className="text-slate-300">{item.name}</span>
                              )}
                            </div>
                            {item.completed !== undefined && (
                              <Badge
                                className={cn(
                                  "text-[9px] px-1.5 py-0 flex-shrink-0 cursor-default",
                                  item.completed
                                    ? "bg-green-600/20 text-green-400 border border-green-500/30"
                                    : "bg-gray-100/10 text-gray-400 border border-gray-500/20"
                                )}
                              >
                                {item.completed
                                  ? language === "es" ? "Completado" : "Completed"
                                  : language === "es" ? "Cursando" : "Incomplete"}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Panel 7: Contacto / Footer */}
            <section
              id="contacto"
              className="horizontal-section relative overflow-hidden flex flex-col justify-between pt-12 pb-6 bg-black/30 w-screen flex-shrink-0 snap-start"
            >
              <div className="container mx-auto px-6 max-w-4xl flex-1 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-6 md:p-8 text-center max-w-2xl mx-auto border-white/15"
                >
                  <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 inline-block mb-4">
                    <Mail size={32} />
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
                    {language === "es" ? "¿Hablamos?" : "Let's connect!"}
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                    {language === "es"
                      ? "Si tienes alguna consulta, propuesta o simplemente quieres charlar sobre desarrollo de software, puedes contactarme directamente."
                      : "If you have any questions, job proposals, or simply want to chat about software development, feel free to reach out."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <Button
                      onClick={() => window.open("mailto:mattesichgabriel@gmail.com", "_blank")}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white font-semibold px-6 py-5 rounded-xl text-sm"
                    >
                      mattesichgabriel@gmail.com
                    </Button>
                    <Button
                      onClick={() => window.open("https://www.linkedin.com/in/gabriel-mattesich", "_blank")}
                      className="glass-button text-white hover:bg-white/10 font-semibold px-6 py-5 rounded-xl border border-white/20 text-sm"
                    >
                      LinkedIn
                    </Button>
                  </div>

                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                    <MapPin size={12} className="text-emerald-400" />
                    <span>{metadata.location}</span>
                  </p>
                </motion.div>
              </div>

              {/* Footer inside the final section */}
              <footer className="w-full mt-8 border-t border-white/10 pt-6 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
                  <p>© {new Date().getFullYear()} Gabriel Mattesich. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
                  <div className="flex items-center gap-4">
                    <span>{language === "es" ? "Versión" : "Version"} {portafolio.version}</span>
                    <span>•</span>
                    <span>Made with Next.js & Tailwind CSS</span>
                  </div>
                </div>
              </footer>
            </section>
      </div>

      {/* Floating Quick Actions Menu - Responsive */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 items-end mb-2"
            >
              {/* Navigation Section Links */}
              {[
                { id: "inicio", label: language === "es" ? "Inicio" : "Home", icon: Star, color: "bg-cyan-600/80 hover:bg-cyan-600" },
                { id: "sobre-mi", label: language === "es" ? "Sobre Mí" : "About Me", icon: Briefcase, color: "bg-orange-600/80 hover:bg-orange-600" },
                { id: "stack", label: language === "es" ? "Stack" : "Stack", icon: Code2, color: "bg-emerald-600/80 hover:bg-emerald-600" },
                { id: "experiencia", label: language === "es" ? "Experiencia" : "Experience", icon: Calendar, color: "bg-purple-600/80 hover:bg-purple-600" },
                { id: "proyectos", label: language === "es" ? "Proyectos" : "Projects", icon: ChartCandlestick, color: "bg-yellow-600/80 hover:bg-yellow-600" },
                { id: "educacion", label: language === "es" ? "Educación" : "Education", icon: GraduationCap, color: "bg-pink-600/80 hover:bg-pink-600" },
                { id: "contacto", label: language === "es" ? "Contacto" : "Contact", icon: Mail, color: "bg-blue-600/80 hover:bg-blue-600" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative p-3 rounded-full ${item.color} text-white shadow-lg transition-all duration-300 border border-white/20 flex items-center justify-center cursor-pointer`}
                    aria-label={item.label}
                  >
                    <IconComponent size={20} />
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/95 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Action Button Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 border border-white/30 z-50 flex items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Compass size={24} className="animate-spin-slow" />}
        </motion.button>
      </div>
    </div>
  );
}


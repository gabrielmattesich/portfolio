"use client";
import portafolio from "../../package.json";
import profile from "@/assets/profile.png";
import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  ChartCandlestick,
  Dot,
  Code2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { pageData } from "@/lib/portafolio-data";
import AnimatedBackground from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import CVDownloadDialog from "@/components/cv-download";
import TimeCounter from "@/components/time-counter";
import SkillsSection from "@/components/skills-section";
import Navbar from "@/components/navbar";

export default function Portfolio() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [metadata, setMetadata] = useState(pageData[language]);
  const [mounted, setMounted] = useState(false);
  const [showCVDialog, setShowCVDialog] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMetadata(pageData[language]);
  }, [language]);

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  const handleCVDownload = () => {
    setShowCVDialog(true);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen mesh-gradient text-white">
      {/* Navbar Component */}
      <Navbar
        language={language}
        onLanguageChange={changeLanguage}
        onCVDownload={handleCVDownload}
      />

      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Profile Image - Moved to left for better visual flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative order-1 md:order-1"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={profile.src}
                    alt="Gabriel Mattesich"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Decorative gradient blur */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>

            {/* Text Content - Enhanced */}
            <div className="flex-1 text-center md:text-left order-2 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block mb-4"
                >
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 text-sm backdrop-blur-md">
                    <span className="animate-pulse mr-2">●</span>
                    {language === "es" ? "Disponible para proyectos" : "Available for projects"}
                  </Badge>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 via-purple-200 to-emerald-300 leading-tight">
                  Gabriel Mattesich
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200 mb-6 flex items-center justify-center md:justify-start gap-3">
                  <span className="text-cyan-400">{"<"}</span>
                  Software Developer
                  <span className="text-cyan-400">{"/>"}</span>
                </h2>

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-2 text-slate-300 justify-center md:justify-start text-lg">
                    <MapPin size={20} className="text-emerald-400" />
                    <span>{metadata.location}</span>
                  </div>
                  <TimeCounter language={language} />
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                 

                  <Button
                    onClick={() => window.open("mailto:mattesichgabriel@gmail.com", "_blank")}
                    className="glass-button text-white px-8 py-6 text-base md:text-lg rounded-xl font-semibold hover:bg-white/20"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {language === "es" ? "Contactar" : "Contact Me"}
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4 mt-8 justify-center md:justify-start"
                >
                  <a
                    href="https://github.com/gabrielmattesich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabriel-mattesich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity - Enhanced */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <Github className="text-cyan-400" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {language === "es" ? "Actividad en GitHub" : "GitHub Activity"}
              </h2>
            </div>
            <p className="text-slate-400 text-lg">
              {language === "es"
                ? "Historial de contribuciones del último año"
                : "Contribution history from the last year"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 max-w-5xl mx-auto"
          >
            <div className="overflow-x-auto overflow-y-hidden pb-4">
              <div className="min-w-[800px]">
                <GitHubCalendar
                  username="gabrielmattesich"
                  colorScheme="light"
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  blockSize={14}
                  blockMargin={4}
                />
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {language === "es" ? "7+" : "7+"}
                </div>
                <div className="text-xs md:text-sm text-slate-400">
                  {language === "es" ? "Años de experiencia" : "Years of experience"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  {language === "es" ? "15+" : "15+"}
                </div>
                <div className="text-xs md:text-sm text-slate-400">
                  {language === "es" ? "Proyectos" : "Projects"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">
                  {language === "es" ? "15+" : "15+"}
                </div>
                <div className="text-xs md:text-sm text-slate-400">
                  {language === "es" ? "Tecnologías" : "Technologies"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                  {language === "es" ? "100%" : "100%"}
                </div>
                <div className="text-xs md:text-sm text-slate-400">
                  {language === "es" ? "Dedicación" : "Dedication"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection language={language} />

      {/* Main Content */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
              {language === "es" ? "Sobre Mí" : "About Me"}
            </h2>
            <p className="text-slate-400 text-lg">
              {language === "es"
                ? "Explora mi trayectoria profesional y académica"
                : "Explore my professional and academic journey"}
            </p>
          </motion.div>

          <Tabs defaultValue="summary" className="max-w-6xl mx-auto">
            {/* Modern Segmented Control Tabs */}
            <div className="flex justify-center mb-10">
              <TabsList className="inline-flex p-1.5 glass-container gap-1">
                <TabsTrigger
                  value="summary"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 transition-all duration-300 rounded-xl px-6 py-3 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span className="hidden sm:inline font-medium">
                      {language === "es" ? "Presentación" : "Summary"}
                    </span>
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 rounded-xl px-6 py-3 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="hidden sm:inline font-medium">
                      {language === "es" ? "Experiencia" : "Experience"}
                    </span>
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 transition-all duration-300 rounded-xl px-6 py-3 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="hidden sm:inline font-medium">
                      {language === "es" ? "Educación" : "Education"}
                    </span>
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-orange-500/25 transition-all duration-300 rounded-xl px-6 py-3 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <ChartCandlestick className="h-4 w-4" />
                    <span className="hidden sm:inline font-medium">
                      {language === "es" ? "Proyectos" : "Projects"}
                    </span>
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content Area */}
            <div className="relative">
              <TabsContent value="summary" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Summary Text Card */}
                  <div className="glass-card p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <Star className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {language === "es" ? "Presentación" : "Summary"}
                      </h3>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {metadata.summary}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="glass-card p-6 hover:border-cyan-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-cyan-500/20">
                          <Briefcase className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h4 className="font-semibold text-white">
                          {language === "es" ? "Experiencia" : "Experience"}
                        </h4>
                      </div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-1">
                        7+ {language === "es" ? "años" : "years"}
                      </p>
                      <p className="text-sm text-slate-400">
                        {language === "es" ? "Desarrollando software" : "Building software"}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="glass-card p-6 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                          <Code2 className="h-5 w-5 text-emerald-400" />
                        </div>
                        <h4 className="font-semibold text-white">
                          {language === "es" ? "Tecnologías" : "Technologies"}
                        </h4>
                      </div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-1">
                        15+
                      </p>
                      <p className="text-sm text-slate-400">
                        {language === "es" ? "Stacks dominados" : "Stacks mastered"}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="glass-card p-6 hover:border-purple-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <ChartCandlestick className="h-5 w-5 text-purple-400" />
                        </div>
                        <h4 className="font-semibold text-white">
                          {language === "es" ? "Proyectos" : "Projects"}
                        </h4>
                      </div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-1">
                        50+
                      </p>
                      <p className="text-sm text-slate-400">
                        {language === "es" ? "Completados" : "Completed"}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="experience" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Experience Header Card */}
                  <div className="glass-card p-6 md:p-8 text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                        <Briefcase className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                        {language === "es"
                          ? "Experiencia Profesional"
                          : "Professional Experience"}
                      </h3>
                    </div>
                    <p className="text-slate-400">
                      {language === "es"
                        ? "Mi trayectoria en el desarrollo de software"
                        : "My journey in software development"}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="relative space-y-6">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

                    {metadata.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-12 md:pl-20"
                      >
                        {/* Timeline dot */}
                        <div className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full border-2 ${
                          index === 0
                            ? "bg-green-400 border-green-400 animate-pulse shadow-lg shadow-green-400/50"
                            : "bg-cyan-500 border-cyan-500"
                        }`} />

                        <Card className="glass-card hover:border-white/30 transition-all duration-300">
                          <CardContent className="p-5 md:p-6">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="text-xl md:text-2xl font-bold text-white">
                                    {exp.company}
                                  </h4>
                                  {index === 0 && (
                                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                                      {language === "es" ? "Actual" : "Current"}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-cyan-400 font-semibold text-lg">
                                  {exp.role}
                                </p>
                              </div>

                              <div className="flex flex-col gap-1 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="h-3.5 w-3.5" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="h-3.5 w-3.5" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <ul className="space-y-2 text-slate-300 mb-4">
                              {exp.description.slice(0, 3).map((desc, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1.5 text-xs">▹</span>
                                  <span className="text-sm leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Technologies */}
                            {exp.tools && (
                              <div className="pt-4 border-t border-white/10">
                                <div className="flex flex-wrap gap-2">
                                  {exp.tools.map((tool: string) => (
                                    <Badge
                                      key={tool}
                                      variant="outline"
                                      className="text-xs bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                      {tool}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Conclusion */}
                            {exp.conclusion && (
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-slate-300 text-sm italic border-l-2 border-cyan-400 pl-4 py-2 bg-cyan-500/5 rounded-r-lg">
                                  {exp.conclusion}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Education Header Card */}
                  <div className="glass-card p-6 md:p-8 text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                        <GraduationCap className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        {language === "es"
                          ? "Educación y Certificaciones"
                          : "Education & Certifications"}
                      </h3>
                    </div>
                    <p className="text-slate-400">
                      {language === "es"
                        ? "Formación académica y cursos especializados"
                        : "Academic background and specialized courses"}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {metadata.education.map((eduSection, index) => (
                      <div key={index} className="glass-card p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/20 pb-2">
                          {eduSection.center}
                        </h4>
                        <div className="space-y-3">
                          {eduSection.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start justify-between gap-4"
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
                                  <span className="text-slate-300">
                                    {item.name}
                                  </span>
                                )}
                              </div>
                              {item.completed !== undefined && (
                                <Badge
                                  variant={
                                    item.completed ? "default" : "secondary"
                                  }
                                  className={
                                    item.completed
                                      ? "bg-green-600/80 text-white bg-green-500"
                                      : "bg-gray-100/80 text-gray-900 hover:bg-gray-300"
                                  }
                                >
                                  {item.completed
                                    ? language === "es"
                                      ? "Completado"
                                      : "Completed"
                                    : language === "es"
                                    ? "Incompleto"
                                    : "Incomplete"}
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="projects" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Projects Header Card */}
                  <div className="glass-card p-6 md:p-8 text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                        <ChartCandlestick className="h-6 w-6 text-orange-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                        {language === "es" ? "Proyectos" : "Projects"}
                      </h3>
                    </div>
                    <p className="text-slate-400">
                      {language === "es"
                        ? "Proyectos personales y profesionales destacados"
                        : "Featured personal and professional projects"}
                    </p>
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {metadata.projects.map((project, index) => (
                      <motion.div
                        key={project.key || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 flex flex-col h-full group hover:border-orange-500/30 transition-all"
                      >
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {project.title}
                            </h4>
                          </div>
                          <Badge
                            className={
                              project.status === "building"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse"
                                : project.status === "running"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                            }
                          >
                            {project.status === "building"
                              ? language === "es"
                                ? "En construcción"
                                : "Building"
                              : project.status === "running"
                              ? language === "es"
                                ? "En ejecución"
                                : "Running"
                              : project.status}
                          </Badge>
                        </div>

                        {/* Project Description */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                          {project.description}
                        </p>

                        {/* Project Meta */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 pb-4 border-b border-white/10">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {language === "es" ? "Iniciado:" : "Started:"}{" "}
                            {project.started}
                          </span>
                        </div>

                        {/* Technologies */}
                        {project.technologies && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-slate-300 hover:text-white transition-all"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Button */}
                        {project.demoAvailable && (
                          <Button
                            disabled
                            className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 text-orange-400 border border-orange-500/30"
                          >
                            {language === "es"
                              ? "Solicitar demo"
                              : "Request demo"}
                          </Button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Quick Contact - Fixed Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="glass-container mx-4 mb-4 p-3 rounded-2xl">
          <div className="flex items-center justify-around gap-2">
            <a
              href="https://www.linkedin.com/in/gabriel-mattesich"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 transition-all duration-300 border border-blue-500/30"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mattesichgabriel@gmail.com"
              className="p-3 rounded-xl bg-green-600/20 hover:bg-green-600/40 text-green-400 transition-all duration-300 border border-green-500/30"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
          </div>
        </div>
      </div>

      {/* Floating Quick Actions - Desktop */}
      <div className="fixed right-6 bottom-6 z-50 hidden md:flex flex-col gap-3">
        <AnimatePresence>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.1 }}
            href="https://www.linkedin.com/in/gabriel-mattesich"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full bg-blue-600/80 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 border border-white/20"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.2 }}
            href="mailto:mattesichgabriel@gmail.com"
            className="group relative p-4 rounded-full bg-green-600/80 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 border border-white/20"
            aria-label="Email"
          >
            <Mail size={22} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {language === "es" ? "Contactar" : "Contact"}
            </span>
          </motion.a>

          
        </AnimatePresence>
      </div>


      {/* CV Download Dialog */}
      <CVDownloadDialog
        open={showCVDialog}
        onOpenChange={setShowCVDialog}
        language={language}
      />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-black/40 backdrop-blur-md border-t border-white/10 mt-20 mb-20 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Left - About */}
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-3">
                  Gabriel Mattesich
                </h3>
                <p className="text-slate-400 text-sm">
                  {language === "es"
                    ? "Desarrollador de Software con más de 7 años de experiencia creando soluciones innovadoras."
                    : "Software Developer with over 7 years of experience creating innovative solutions."}
                </p>
              </div>

              {/* Center - Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  {language === "es" ? "Enlaces Rápidos" : "Quick Links"}
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/gabrielmattesich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-cyan-400">→</span>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabriel-mattesich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-cyan-400">→</span>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right - Contact */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  {language === "es" ? "Contacto" : "Contact"}
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:mattesichgabriel@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    mattesichgabriel@gmail.com
                  </a>
                  <p className="text-slate-400 text-sm">
                    📍 {metadata.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Gabriel Mattesich. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>{language === "es" ? "Versión" : "Version"} {portafolio.version}</span>
                <span>•</span>
                <span>Made with Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

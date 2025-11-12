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

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [metadata, setMetadata] = useState(pageData[language]);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCVDialog, setShowCVDialog] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMetadata(pageData[language]);
  }, [language]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };
  const handleCVDownload = () => {
    setShowCVDialog(true);
    // Close the floating menu when opening the CV dialog
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen mesh-gradient text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-16 relative z-10 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left  ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 via-purple-200 to-emerald-300">
                  Gabriel Mattesich
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
                  Software Developer
                </h2>
                <div className="flex flex-col gap-2 justify-center md:justify-start mb-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={16} className="text-lime-400" />
                    <span>{metadata.location}</span>
                  </div>
                  <TimeCounter language={language} />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-black/25 backdrop-blur-sm bg-white/5">
                <Image
                  src={profile.src}
                  alt="Gabriel Mattesich"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-10 bottom-2 right-2 sm:bottom-4 sm:right-4 glass-container p-3">
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => changeLanguage("es")}
                      className={cn(
                        "px-3 py-1 rounded-l-xl text-xs font-medium transition-all duration-300",
                        language === "es"
                          ? "bg-cyan-500/80 text-white backdrop-blur-md"
                          : "glass-button text-slate-300"
                      )}
                    >
                      🇦🇷 ES
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={cn(
                        "px-3 py-1 rounded-r-xl text-xs font-medium transition-all duration-300",
                        language === "en"
                          ? "bg-cyan-500/80 text-white backdrop-blur-md"
                          : "glass-button text-slate-300"
                      )}
                    >
                      🌎 EN
                    </button>
                  </div>

                  {/* <Button
                    onClick={handleCVDownload}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-4 py-2 text-xs md:text-sm mt-2 md:mt-0 rounded-xl backdrop-blur-md shadow-lg"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    {language === "es" ? "Descargar CV" : "Download CV"}
                  </Button> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-flex items-center">
              <Github className="mr-2 text-cyan-400" size={24} />
              {language === "es" ? "Actividad en GitHub" : "GitHub Activity"}
            </h2>
            <p className="text-slate-400">
              {language === "es"
                ? "Mi historial de contribuciones"
                : "My contribution history"}
            </p>
          </div>
          <div className="glass-container p-6 max-w-4xl mx-auto overflow-x-auto">
            <GitHubCalendar
              username="gabrielmattesich"
              colorScheme="light"
              hideColorLegend
              hideMonthLabels={false}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="summary" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger
                value="summary"
                onClick={() => setActiveSection("summary")}
              >
                <span className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Presentación" : "Summary"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                onClick={() => setActiveSection("experience")}
              >
                <span className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Experiencia" : "Experience"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                onClick={() => setActiveSection("education")}
              >
                <span className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Educación" : "Education"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                onClick={() => setActiveSection("projects")}
              >
                <span className="flex items-center">
                  <ChartCandlestick className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Proyectos" : "Projects"}
                  </span>
                </span>
              </TabsTrigger>
            </TabsList>

            <div className="glass-container p-6">
              <TabsContent value="summary" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                    {language === "es" ? "Presentación" : "Summary"}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 whitespace-pre-line">
                      {metadata.summary}
                    </p>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="experience" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                    {language === "es"
                      ? "Experiencia Profesional"
                      : "Professional Experience"}
                  </h3>

                  <div className="space-y-8">
                    {metadata.experience.map((exp, index) => (
                      <Card key={index} className="glass-card">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white">
                                {exp.company}
                              </h4>
                              <p className="text-cyan-400 font-medium">
                                {exp.role}
                              </p>
                              {exp.tools && (
                                <div className="mt-6">
                                  <hr className="text-primary mt-3 mb-3" />

                                  {exp.tools.map((tool: string) => (
                                    <Badge key={tool} className="ml-1 mr-1">
                                      {tool}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-start md:items-end text-sm text-slate-400">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <MapPin className="mr-1 h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 text-slate-300 list-disc list-inside">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="pl-2">
                                <span className="text-slate-300">{desc}</span>
                              </li>
                            ))}
                          </ul>

                          {exp.conclusion && (
                            <div className="mt-6">
                              <hr className="text-primary" />

                              <p className="mt-4 text-slate-300 italic border-l-2 border-cyan-400 pl-4">
                                {exp.conclusion}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                    {language === "es"
                      ? "Educación y Certificaciones"
                      : "Education & Certifications"}
                  </h3>

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
                >
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                    {language === "es" ? "Proyectos" : "Projects"}
                  </h3>

                  <div className="space-y-6">
                    {metadata.projects.map((project, index) => (
                      <Card key={project.key || index} className="glass-card">
                        <CardContent className="p-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <h4 className="text-xl font-bold text-white">
                                    {project.title}
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className={
                                      project.status === "building"
                                        ? "bg-yellow-600/80 text-white animate-pulse"
                                        : project.status === "running"
                                        ? "bg-green-600/80 text-white"
                                        : "bg-gray-600/80 text-white"
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
                                <p className="text-slate-300 text-base leading-relaxed mb-4">
                                  {project.description}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                                  <div className="flex items-center">
                                    <Calendar className="mr-1 h-4 w-4" />
                                    <span>
                                      {language === "es"
                                        ? "Iniciado:"
                                        : "Started:"}{" "}
                                      {project.started}
                                    </span>
                                  </div>
                                </div>

                                {project.technologies && (
                                  <div className="mb-4">
                                    <h5 className="text-sm font-medium text-cyan-400 mb-2">
                                      {language === "es"
                                        ? "Tecnologías:"
                                        : "Technologies:"}
                                    </h5>
                                    <div className="flex flex-wrap gap-1">
                                      {project.technologies.map((tech) => (
                                        <Badge
                                          key={tech}
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {project.demoAvailable && (
                                  <Button className=" to-cyan-500/30  hover:to-cyan-600/30 text-white cursor-pointer" disabled>
                                    {language === "es"
                                      ? "Solicitar demo"
                                      : "Request demo"}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <AnimatePresence>
          <motion.button
            key="menu-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
            className="bg-gradient-to-r from-cyan-500/30 to-purple-600/30 text-white p-4 backdrop-blur-md rounded-full shadow-2xl shadow-black/25 hover:from-cyan-600/30 hover:to-purple-700/30 transition-all duration-300  border border-white/20"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                href="https://www.linkedin.com/in/gabriel-mattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/80 text-white p-3 rounded-full shadow-2xl shadow-black/25 hover:bg-blue-700/90 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="mailto:mattesichgabriel@gmail.com"
                className="bg-green-600/80 text-white p-3 rounded-full shadow-2xl shadow-black/25 hover:bg-green-700/90 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="https://github.com/gabrielmattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/80 text-white p-3 rounded-full shadow-2xl shadow-black/25 hover:bg-gray-700/90 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleCVDownload}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-full shadow-2xl shadow-black/25 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20"
                aria-label="Download CV"
              >
                <FileDown size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 glass-overlay z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* CV Download Dialog */}
      <CVDownloadDialog
        open={showCVDialog}
        onOpenChange={setShowCVDialog}
        language={language}
      />

      {/* Footer */}
      <footer className="py-8 bg-black/30 backdrop-blur-md border-t border-white/10 rounded-tr-full rounded-tl-full">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Gabriel Mattesich 🇦🇷
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {language === "es" ? "Versión" : "Version"}: {portafolio.version}
          </p>
        </div>
      </footer>
    </div>
  );
}

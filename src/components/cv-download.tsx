"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileDown,
  FileText,
  Download,
  Check,
  X,
  FileType,
  Eye,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import cv from "@/assets/portfolio.jpg";

interface CVDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: "es" | "en";
}

export default function CVDownloadDialog({
  open,
  onOpenChange,
  language,
}: CVDownloadDialogProps) {
  const [downloadState, setDownloadState] = useState<
    "idle" | "downloading" | "success" | "error"
  >("idle");
  const [progress, setProgress] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "docx" | "jpg">(
    "pdf"
  );

  const translations = {
    es: {
      title: "Descargar Curriculum Vitae",
      description:
        "Obtén una copia de mi CV actualizado para conocer más sobre mi experiencia y habilidades.",
      preview: "Vista previa",
      download: "Descargar",
      downloading: "Descargando...",
      success: "¡Descarga completada!",
      error: "Error en la descarga",
      retry: "Reintentar",
      close: "Cerrar",
      pdf: "PDF",
      docx: "Word",
      selectFormat: "Selecciona el formato",
      fileSize: "Tamaño: 1.2 MB",
      lastUpdated: "Última actualización: Abril 2025",
    },
    en: {
      title: "Download Curriculum Vitae",
      description:
        "Get a copy of my updated CV to learn more about my experience and skills.",
      preview: "Preview",
      download: "Download",
      downloading: "Downloading...",
      success: "Download completed!",
      error: "Download error",
      retry: "Retry",
      close: "Close",
      pdf: "PDF",
      docx: "Word",
      selectFormat: "Select format",
      fileSize: "Size: 1.2 MB",
      lastUpdated: "Last updated: April 2025",
    },
  };

  const t = translations[language];

  const handleDownload = () => {
    setDownloadState("downloading");
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadState("success");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    const fileSrc =
      selectedFormat === "jpg"
        ? cv.src
        : selectedFormat === "pdf"
        ? "https://gabrielmattesich.github.io/portafolio/portfolio.pdf"
        : null;

    if (!fileSrc) {
      console.error("No hay una fuente válida para descargar.");
      return;
    }
    // In a real implementation, you would use something like:
    const link = document.createElement("a");
    link.href = fileSrc;
    link.download = `gabriel-mattesich-cv.${selectedFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadState("idle");
  };

  const resetDownload = () => {
    setDownloadState("idle");
    setProgress(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-5/6 overflow-y-auto glass-container text-white border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-cyan-400">
            <FileText className="h-6 w-6" />
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="preview">
              <Eye className="mr-2 h-4 w-4" />
              {t.preview}
            </TabsTrigger>
            <TabsTrigger value="download">
              <FileDown className="mr-2 h-4 w-4" />
              {t.download}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-0">
            <div className="relative aspect-[3/4] w-full glass-card overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={cv.src}
                  alt="CV Preview"
                  width={600}
                  height={800}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 flex items-end justify-center pb-8">
                  <Button
                    variant="outline"
                    className="glass-button border-cyan-400 hover:border-cyan-300"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {t.preview}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="download" className="mt-0">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-medium mb-4">{t.selectFormat}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedFormat("pdf")}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                      selectedFormat === "pdf"
                        ? "border-red-500 bg-lime-500/10"
                        : "border-white/20 hover:border-white/30"
                    }`}
                  >
                    <div className="w-12 h-12 bg-red-500/90 rounded-full flex items-center justify-center">
                      <FileType className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium">PDF</span>
                  </button>
                  {/* 
                  <button
                    onClick={() => setSelectedFormat("docx")}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                      selectedFormat === "docx" 
                        ? "border-blue-500 bg-lime-500/10" 
                        : "border-white/20 hover:border-white/30"
                    }`}
                  >
                    <div className="w-12 h-12 bg-blue-500/90 rounded-full flex items-center justify-center">
                      <FileType className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium">Word</span>
                  </button> */}

                  <button
                    onClick={() => setSelectedFormat("jpg")}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                      selectedFormat === "jpg"
                        ? "border-green-500 bg-lime-500/10"
                        : "border-white/20 hover:border-white/30"
                    }`}
                  >
                    <div className="w-12 h-12 bg-green-500/90 rounded-full flex items-center justify-center">
                      <FileType className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium">Image</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between text-sm text-slate-400">
                <span>{t.fileSize}</span>
                <span>{t.lastUpdated}</span>
              </div>

              <AnimatePresence mode="wait">
                {downloadState === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                      onClick={handleDownload}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {t.download} {selectedFormat.toUpperCase()}
                    </Button>
                  </motion.div>
                )}

                {downloadState === "downloading" && (
                  <motion.div
                    key="downloading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <Progress value={progress} className="h-2 bg-white/10" />
                    <p className="text-center text-sm text-slate-300">
                      {t.downloading} {progress}%
                    </p>
                  </motion.div>
                )}

                {downloadState === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4"
                  >
                    <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-green-400 font-medium">{t.success}</p>
                    <Button
                      variant="outline"
                      className="glass-button"
                      onClick={() => resetDownload()}
                    >
                      {t.close}
                    </Button>
                  </motion.div>
                )}

                {downloadState === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4"
                  >
                    <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                      <X className="h-8 w-8 text-red-500" />
                    </div>
                    <p className="text-red-400 font-medium">{t.error}</p>
                    <div className="flex gap-2 justify-center">
                      <Button
                        variant="outline"
                        className="glass-button"
                        onClick={resetDownload}
                      >
                        {t.retry}
                      </Button>
                      <Button
                        variant="outline"
                        className="glass-button"
                        onClick={() => resetDownload()}
                      >
                        {t.close}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

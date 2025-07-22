"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  title: string;
  onCTAClick?: () => void;
}

export function HeroSection({ name: fullName, onCTAClick }: HeroSectionProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/jg_almeida_cv.pdf";
    link.download = "JonasGabrielAlmeida_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {fullName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 w-full mx-auto sm:flex-row sm:justify-center sm:gap-4"
          >
            <Button
              size="lg"
              onClick={onCTAClick}
              className="w-full sm:w-auto cursor-pointer"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto cursor-pointer"
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

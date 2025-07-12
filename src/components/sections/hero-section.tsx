"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  onCTAClick?: () => void;
}

export function HeroSection({
  name: fullName,
  title,
  bio,
  onCTAClick,
}: HeroSectionProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/jg_almeida_cv.pdf";
    link.download = "JonasGabrielAlmeida_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="100vh flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              className={`text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {fullName}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-zinc-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function HeroContent() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth motion
      },
    },
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Freelance & Hires
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl  md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white font-sans"
        >
          Building digital <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-100 to-neutral-500">
            experiences
          </span>{" "}
          that matter.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed font-mono"
        >
          I am Samiul, a MERN Stack Developer. I blend artistic direction with
          technical engineering to create products that live on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button
            onClick={() => scrollToSection("work")}
            className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-linear-to-r cursor-pointer from-neutral-200 to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              View Projects{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-white/5 cursor-pointer text-white border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Socials - Example Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 mt-12 text-neutral-500"
        >
          {/* Replace href="#" with your real links */}
          <a
            href="https://github.com/samiul-alam-shanto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors hover:scale-110 transform"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/samiul-alam-shanto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:samiulalam220@gmail.com"
            className="hover:text-white transition-colors hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

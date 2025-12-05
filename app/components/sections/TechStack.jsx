"use client";

import { motion } from "framer-motion";
// Importing reliable SVG components
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGithub,
  SiReactrouter,
  SiVercel,
  SiPostgresql,
} from "react-icons/si";

// Array of Tech Objects
const technologies = [
  { name: "HTML5", icon: SiHtml5, color: "hover:text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "hover:text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "hover:text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-cyan-400" },
  { name: "React", icon: SiReact, color: "hover:text-cyan-400" },
  { name: "Router", icon: SiReactrouter, color: "hover:text-red-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500" },
  { name: "Express", icon: SiExpress, color: "hover:text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:text-green-500" },
  { name: "Figma", icon: SiFigma, color: "hover:text-purple-400" },
  { name: "GitHub", icon: SiGithub, color: "hover:text-white" },
  { name: "Vercel", icon: SiVercel, color: "hover:text-white" },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 bg-transparent border-t border-white/5 overflow-hidden "
    >
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white font-sans text-center opacity-80">
          Powered by <span className="text-neutral-500">Modern Tech</span>
        </h2>
      </div>

      <div className="flex w-full mask-linear-fade">
        <MarqueeItem duration={40} />
        <MarqueeItem duration={40} />
      </div>
    </section>
  );
}

function MarqueeItem({ duration }) {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex shrink-0 gap-12 py-12 md:gap-24 px-6 md:px-12 items-center"
    >
      {technologies.map((tech, i) => {
        const Icon = tech.icon;

        return (
          <div
            key={i}
            className="relative group flex flex-col items-center justify-center gap-4 cursor-pointer"
          >
            {/* ICON CONTAINER */}
            <div
              className={`relative transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_currentColor] text-neutral-500 ${tech.color}`}
            >
              <Icon size={50} />
            </div>

            {/* TOOLTIP (Name reveals on hover) */}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono uppercase tracking-widest text-neutral-400  whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  i,
  range,
  targetScale,
  progress,
}) {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[70vh] flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 35}px)`,
        }}
        className={cn(
          "relative flex flex-col md:flex-row gap-8 w-full max-w-[1100px] h-[70vh] rounded-4xl p-6 md:p-10 origin-top",
          "border border-white/10",
          "bg-neutral-900",
          "backdrop-blur-3xl"
        )}
      >
        <div className="absolute inset-0 rounded-4xl bg-linear-to-b from-white/10 to-white/0 pointer-events-none z-0" />
        <div className="absolute inset-0 rounded-4xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between w-full md:w-1/2 h-full py-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-3 h-3 rounded-full bg-linear-to-r ${project.color}`}
              />
              <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                {project.category}
              </span>
            </div>

            {/*  Title */}
            <Link href={`/work/${project.id}`} className="group inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans tracking-tight group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h2>
              <p className="hidden 2xl:block">{project.description1}</p>
            </Link>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 text-xs font-medium text-neutral-300 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            {/* Main CTA */}
            <Link href={`/work/${project.id}`}>
              <button className="group flex items-center gap-2 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
                View Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>

            <Link href={`${project.github}`}>
              {" "}
              <button className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors">
                <Github size={18} /> Code
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image  */}
        <Link
          href={`/work/${project.id}`}
          className="relative w-full md:w-1/2 h-[300px] md:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group cursor-pointer"
        >
          <div className="absolute inset-0 z-10 bg-linear-to-t from-neutral-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          <Image
            fill
            src={project.image}
            alt={project.title}
            className="object-cover  transition-transform duration-700 group-hover:scale-105 opacity-90"
          />
        </Link>
      </motion.div>
    </div>
  );
}

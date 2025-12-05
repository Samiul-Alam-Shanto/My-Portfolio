"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { projects } from "./data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectGallery() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="work" ref={container} className="relative z-20  ">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6  pt-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans">
          Selected <br />
          <span className="text-neutral-500">Works.</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-lg">
          A curation of projects that push the boundaries of design and
          engineering.
        </p>
      </div>

      {/* Stacked Cards */}
      <div className="flex flex-col gap-10 pb-[20vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <ProjectCard
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    year: "Present",
    title: "MERN Stack Developer",
    place: "Programming-Hero",
    description:
      "Learning and building full-stack web applications using the MERN ecosystem. Focused on writing clean code, mastering modern frontend patterns, and delivering real-world projects.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2023 - 2025",
    title: "Planning Supervisor",
    place: "Impress-Newtex Composite Textile Ltd.",
    description:
      "Oversaw production planning using statistical analysis to improve forecasting accuracy and reduce delays. Collaborated closely with clients to understand requirements, communicate timelines, and maintain smooth operational workflows.",

    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2017 - 2022",
    title: "Bachelor of Science (Statistics)",
    place: "University Of Chittagong",
    description:
      "Completed a rigorous program in statistics and problem-solving. Gained strong analytical thinking, data interpretation skills, and a foundation that now strengthens my engineering approach.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2015",
    title: "(Higher Secondary Certificate (H.S.C)",
    place: "Shahid Syed Nazrul Islam College, Mymensingh",
    description:
      "Studied science with a strong focus on mathematics and analytical subjects, building the logical mindset.",

    icon: Briefcase,
    color: "bg-emerald-500",
  },
  {
    year: "2013",
    title: "Secondary School Certificate (S.S.C)",
    place: "Haluaghat Model High School, Haluaghat",
    description:
      "Completed secondary education in the science track with strong academic performance and early interest in technology.",

    icon: GraduationCap,
    color: "bg-emerald-500",
  },
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative py-32 px-6 " ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-sans text-center">
          The <span className="text-neutral-500">Journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2" />

          {/* The Line */}
          <motion.div
            style={{ height }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />

          <div className="space-y-24">
            {timelineData.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row-reverse" : ""
      } md:justify-between group`}
    >
      <div className="hidden md:block w-5/12" />

      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border border-neutral-700 flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-white transition-all duration-300">
        <div
          className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}
        />
      </div>

      <div className="w-full md:w-5/12 pl-20 md:pl-0">
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors">
          <span
            className={`inline-block px-3 py-1 mb-3 text-xs font-mono rounded-full bg-white/5 border border-white/10 ${
              isEven ? "text-blue-400" : "text-purple-400"
            }`}
          >
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-sm text-neutral-400 font-mono mb-2">
            {item.place}
          </p>
          <p className="text-neutral-500 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

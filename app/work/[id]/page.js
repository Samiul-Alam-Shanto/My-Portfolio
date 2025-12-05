"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/components/sections/data/projects";
import Footer from "@/app/components/layout/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.id.toString() === id) || projects[0];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <span className="font-mono text-sm hidden md:block">
          {project.title}
        </span>
      </nav>

      {/* Hero Image  */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-linear-to-b ${project.color} opacity-20 z-10`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#030303] to-transparent z-20" />

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-30">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl font-bold font-sans"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-12">
        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <h3 className="text-neutral-500 font-mono text-xs uppercase mb-2">
              Category
            </h3>
            <p className="text-xl">{project.category}</p>
          </div>
          <div>
            <h3 className="text-neutral-500 font-mono text-xs uppercase mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href={`${project.link}`}
              className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              Live Site <ExternalLink size={18} />
            </Link>
            <Link
              href={`${project.github}`}
              className="flex items-center justify-between px-6 py-4 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-colors"
            >
              Source Code <Github size={18} />
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="text-lg md:text-xl text-neutral-300 leading-relaxed space-y-6">
          <p>{project.description1}</p>
          <p>{project.description2}</p>
          <h3 className="text-2xl font-bold text-white mt-8">The Challenge</h3>
          <p>{project.challenges}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

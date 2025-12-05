"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Zap,
  ArrowUpRight,
  Headphones,
  Globe,
  Code,
} from "lucide-react";
import Image from "next/image";
import SpotlightCard from "../ui/SpotlightCard";

export default function BentoGrid() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
            Beyond the <span className="text-neutral-500">Code</span>
          </h2>
          <p className="text-neutral-400 max-w-xl text-lg">
            I build performant, interactive web experiences—focusing on smooth
            motion, clean architecture, and scalable systems.
          </p>
        </motion.div>

        {/* The New Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Card 1: The Philosophy  */}
          <SpotlightCard className="md:col-span-2 p-8 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <Zap className="text-yellow-400" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                The Philosophy
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-lg">
                I write code that feels good to use. I balance engineering
                precision with thoughtful UI decisions to build interfaces that
                are fast, fluid, and quietly powerful.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-1 w-20 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 animate-pulse" />
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                Average Client Project Optimization: 98%
              </span>
            </div>
          </SpotlightCard>

          {/* Card 2: THE PORTRAIT  */}
          <SpotlightCard className="md:row-span-2 relative overflow-hidden group p-0">
            {/* Replace '/me.jpg' with your actual photo in public folder */}
            <div className="absolute inset-0 bg-neutral-800">
              <Image
                src="/Me.jpg"
                alt="Samiul"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 h-full min-h-72 flex flex-col justify-end p-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest">
                  Available
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Samiul Alam Shanto
              </h3>
              <p className="text-neutral-400 text-sm">MERN Stack Developer</p>
            </div>
          </SpotlightCard>

          {/* Card 3: Location / Map */}
          <SpotlightCard className="relative overflow-hidden p-6 flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop"
                alt="Map Background"
                fill
                className="object-cover rounded-2xl opacity-50 grayscale contrast-125 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent hover:scale-110 hover:opacity-30 transition-all duration-700" />
            </div>

            {/* 3. The Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <div className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                </div>

                <div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-white font-mono tracking-widest uppercase">
                  GMT+6
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1 opacity-80">
                  <MapPin className="text-emerald-400" size={16} />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Base of Ops
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Mymensingh</h3>
                <p className="text-neutral-400 text-sm">Bangladesh</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 4: Tech Stack Snapshot */}
          <SpotlightCard className="p-6 flex flex-col justify-between group hover:bg-neutral-800/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <Code className="text-blue-400" size={24} />
              </div>
              <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider mb-1">
                  Frontend
                </p>
                <p className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                  Next.js • React • Tailwind • JavaScript(ES6) • HTML • CSS •
                  FireBase • NextAuth
                </p>
              </div>

              <div>
                <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider mb-1">
                  Backend & Database
                </p>
                <p className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                  Node.js • Express.Js • MongoDB
                </p>
              </div>

              <div>
                <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider mb-1">
                  Tools
                </p>
                <p className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                  Git • GitHub • npm • Vercel • Thunder Client • Vite
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

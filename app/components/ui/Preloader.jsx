"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Lock scroll
    document.body.style.overflow = "hidden";

    // 2. Simulate Loading Progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random "hacker" increments
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    // 3. End loading after progress hits 100
    if (progress === 100) {
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 800);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <>
          {/* TOP SHUTTER */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed top-0 left-0 w-full h-[50vh] bg-[#050505] z-9999 border-b border-white/10 flex items-end justify-center pb-4"
          >
            {/* Percentage Text (Top Half) */}
            <motion.div
              exit={{ opacity: 0 }}
              className="text-white font-mono text-xs md:text-sm tracking-[0.2em] mb-8 overflow-hidden"
            >
              LOADING PORTFOLIO
            </motion.div>
          </motion.div>

          {/* BOTTOM SHUTTER */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#050505] z-9999 border-t border-white/10 flex items-start justify-center pt-4"
          >
            {/* Progress Bar (Center Line) */}
            <div className="relative w-64 h-px bg-neutral-800 -mt-px">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>

          {/* CENTER CONTENT (The Counter) */}
          <motion.div
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-10000 flex items-center justify-center pointer-events-none mix-blend-difference"
          >
            <h1 className="text-6xl md:text-9xl font-bold text-white font-sans tabular-nums tracking-tighter">
              {progress}
            </h1>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

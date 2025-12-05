"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030303] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-[10vw] md:text-[5vw] font-bold text-neutral-800 leading-none select-none hover:text-neutral-700 transition-colors">
            SAMIUL
          </h2>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:items-end gap-6">
          <div className="flex gap-8 text-neutral-400 font-mono text-sm">
            <a
              href="https://www.linkedin.com/in/samiul-alam-shanto"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com/Samiul-Alam-Shanto"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              GITHUB
            </a>
            <a
              href="https://web.facebook.com/S.A.Shant0"
              className="hover:text-white transition-colors"
              target="_blank"
            >
              FACEBOOK
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>

          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Samiul Alam Shanto
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Code, Layers, Mail, Download } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", icon: Home, href: "/#hero" },
  { name: "About", icon: User, href: "/#about" },
  { name: "Work", icon: Layers, href: "/#work" },
  { name: "Stack", icon: Code, href: "/#stack" },
  { name: "Contact", icon: Mail, href: "/#contact" },
];

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/work/")) {
    return null;
  }

  return (
    <div className="fixed bottom-8 inset-x-0 mx-auto w-fit z-999 px-4 max-w-full">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "flex items-center gap-3 py-3",
          "bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5",
          "overflow-x-auto md:overflow-visible no-scrollbar w-auto"
        )}
      >
        {/* Navigation Items */}
        {navItems.map((item, index) => (
          <div key={item.name} className={cn(index === 0 ? "pl-4" : "")}>
            <DockIcon mouseX={mouseX} item={item} />
          </div>
        ))}

        {/* Divider */}
        <div className="h-8 w-px bg-white/10 mx-1 shrink-0" />

        {/* CV Download Button */}
        <div className="pr-4">
          <DockIcon
            mouseX={mouseX}
            item={{
              name: "RESUME",
              icon: Download,
              href: "/samiul-alam-shanto-resume.pdf",
              isDownload: true,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function DockIcon({ mouseX, item }) {
  // ... keep existing code ...
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconScale = useTransform(widthTransform, [40, 80], [1, 1.5]);

  const handleClick = (e) => {
    if (item.href.includes("#")) {
      const id = item.href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const Content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center rounded-full transition-colors duration-200",
        "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20",
        item.isDownload
          ? "bg-white text-black hover:bg-neutral-200 border-transparent"
          : "text-neutral-400 hover:text-white"
      )}
    >
      <motion.div
        style={{ scale: iconScale }}
        className="flex items-center justify-center"
      >
        <item.icon className="w-5 h-5" strokeWidth={2} />
      </motion.div>

      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: "-50%" }}
          animate={{ opacity: 1, y: -15, x: "-50%" }}
          exit={{ opacity: 0, y: 0, x: "-50%" }}
          className={cn(
            "absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-1000 pointer-events-none text-[10px] font-bold uppercase tracking-widest",
            item.isDownload
              ? "bg-white text-black border border-neutral-200"
              : "bg-neutral-900 text-white border border-white/20"
          )}
        >
          {item.name}
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45",
              item.isDownload
                ? "bg-white"
                : "bg-neutral-900 border-r border-b border-white/20"
            )}
          />
        </motion.div>
      )}
    </motion.div>
  );

  if (item.isDownload) {
    return (
      <a
        href={item.href}
        download="samiul-alam-shanto-resume.pdf"
        className="shrink-0 flex items-center justify-center"
      >
        {Content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={handleClick}
      className="shrink-0 flex items-center justify-center"
    >
      {Content}
    </Link>
  );
}

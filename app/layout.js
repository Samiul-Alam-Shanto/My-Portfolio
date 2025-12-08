import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./components/providers/SmoothScrollProvider";
import Cursor from "./components/ui/Cursor";
import Dock from "./components/layout/Dock";
import Preloader from "./components/ui/Preloader"; // 1. Import Preloader

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "Samiul Alam Shanto | MERN Stack Developer",
  description: "Building digital experiences that exist on the edge of time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-transparent text-white`}
      >
        <Preloader />
        {/* --- GLOBAL VIDEO BACKGROUND --- */}
        <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden bg-[#030303]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="/space.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        <Cursor />
        <Dock />

        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

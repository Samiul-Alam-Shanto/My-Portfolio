// app/layout.js
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./components/providers/SmoothScrollProvider"; // We will create this next
import Cursor from "./components/ui/Cursor";
import Dock from "./components/layout/Dock";
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
  title: "Samiul | MERN Developer",
  description: "Building digital experiences that exist on the edge of time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-transparent `}
      >
        <div className="fixed inset-0   w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline // Crucial for iPhone not to go fullscreen
            className="w-full h-full object-cover opacity-100"
          >
            {/* Ensure 'space.mp4' is in your 'public' folder */}
            <source src="/galaxy.mp4" type="video/mp4" />
          </video>

          {/* Black overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        <Cursor /> {/* Add this line */}
        {/* The Noise Overlay for Texture */}
        <div className="noise-overlay" />
        <Dock />
        {/* The Smooth Scroll Wrapper */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

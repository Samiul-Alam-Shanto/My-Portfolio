/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Force Resend to run on the server only (Fixes the svix error)
  serverExternalPackages: ["resend"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

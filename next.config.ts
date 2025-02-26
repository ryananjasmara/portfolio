import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.shields.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

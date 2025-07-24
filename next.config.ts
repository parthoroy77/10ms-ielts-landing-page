import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "cdn.10minuteschool.com" }],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "cdn.10minuteschool.com" }, { hostname: "s3.ap-southeast-1.amazonaws.com" }],
  },
};

export default nextConfig;

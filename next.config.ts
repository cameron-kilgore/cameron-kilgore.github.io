import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
  // Compression and optimization
  compress: true,
  // Disable source maps in production for smaller bundle
  productionBrowserSourceMaps: false,
};

export default nextConfig;
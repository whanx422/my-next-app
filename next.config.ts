import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "memory", // Use memory cache instead of filesystem cache
    };
    return config;
  },
};

export default nextConfig;

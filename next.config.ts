import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.qq.com',
      },
      {
        protocol: 'https',
        hostname: '**.y.qq.com',
      },
      {
        protocol: 'https',
        hostname: '**.music.qq.com',
      },
    ],
  },
};

export default nextConfig;

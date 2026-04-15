import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

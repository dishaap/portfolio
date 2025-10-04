import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,   // optional but recommended
  swcMinify: true,         // faster builds
  output: undefined,       // let Vercel handle SSR/static automatically
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        pathname: "/api/v1/image/assets%2F58a9cc1dcd0440bdb175065f02a9e1fa%2F7b331d3c67444dd9ba2251103596b901",
      },
    ],
  },
};

export default nextConfig;

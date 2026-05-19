import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bono-web',
  assetPrefix: '/bono-web',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

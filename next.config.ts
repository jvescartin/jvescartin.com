import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;

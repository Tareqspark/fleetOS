import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@fleetos/shared"],
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.API_ORIGIN ?? "http://localhost:4100"}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;

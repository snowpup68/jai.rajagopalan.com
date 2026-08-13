import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no server, no container. Deployed to Firebase Hosting.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

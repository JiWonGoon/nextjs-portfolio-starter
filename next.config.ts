import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-portfolio-starter" : "",
  trailingSlash: true,
};

export default nextConfig;

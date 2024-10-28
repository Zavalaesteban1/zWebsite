/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js.ts",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Service worker configuration
    if (!isServer) {
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    }
    return config;
  },
};

module.exports = nextConfig;

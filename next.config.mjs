// await import("./src/env.js");
// import WithPWA from "next-pwa";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,

//   // Add webpack configuration
//   webpack: (config, { isServer }) => {
//     // Service worker configuration
//     if (!isServer) {
//       config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
//     }
//     return config;
//   },
// };

// const withPWA = WithPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   scope: "/",
//   sw: "service-worker.js", // Changed to .js as Next.js will handle the compilation
//   // You might also want to add these options for better control
//   runtimeCaching: [
//     {
//       urlPattern: /^https?.*/,
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "offlineCache",
//         expiration: {
//           maxEntries: 200,
//           maxAgeSeconds: 24 * 60 * 60, // 24 hours
//         },
//       },
//     },
//   ],
// });

// // Export the combined configuration
// export default withPWA(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

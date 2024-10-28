/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',  // Remove basePath for local development
  assetPrefix: '',  // Remove assetPrefix for local development
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add publicRuntimeConfig
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/zWebsite' : '',
  },
}

module.exports = nextConfig

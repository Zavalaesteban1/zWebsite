/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/zWebsite' : '',  // Changed to match your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zWebsite/' : '',  // Changed to match your repo name
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

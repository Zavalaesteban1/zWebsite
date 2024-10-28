/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/zWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zWebsite/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

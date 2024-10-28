/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/developer-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/developer-portfolio/' : '',
}

module.exports = nextConfig

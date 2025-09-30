/** @type {import('next').Config} */
const nextConfig = {
  // Optimize images for production
  images: {
    unoptimized: false,
    domains: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  poweredByHeader: false,
  // Compression
  compress: true,
}

module.exports = nextConfig

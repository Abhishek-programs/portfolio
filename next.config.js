/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable faster refresh
  experimental: {
    // Optimize for faster HMR
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;

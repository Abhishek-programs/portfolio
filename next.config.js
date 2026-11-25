/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lives on its own site. Not permanent, so this address can become a page here later.
  async redirects() {
    return [
      {
        source: '/apps/bicha-ma-bhetam',
        destination: 'https://bicha-ma-bhetam.vercel.app/',
        permanent: false,
      },
    ];
  },
  // Enable faster refresh
  experimental: {
    // Optimize for faster HMR
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;

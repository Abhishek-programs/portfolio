/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // These live elsewhere. Not permanent, so the addresses can become pages here later.
  async redirects() {
    return [
      {
        source: '/apps/bicha-ma-bhetam',
        destination: 'https://bicha-ma-bhetam.vercel.app/',
        permanent: false,
      },
      {
        source: '/apps/fullopen',
        destination: 'https://github.com/Abhishek-programs/FullOpen',
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

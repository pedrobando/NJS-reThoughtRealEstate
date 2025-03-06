/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return String(process.env.GIT_HASH);
  },
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './app/_libs/CloudFlareLoader.js',
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.homejunction.com',
        pathname: '/mlswis/**',
        port: '',
      },{
        protocol: 'https',
        hostname: '**.rethought-realestate.com',
        port: '',
        pathname: '/wp-uploads/**',
      },{
        protocol: 'https',
        hostname: '**.futurecdn.net',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'rethought.studio',
        port: '',
        pathname: '/**',
      },]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

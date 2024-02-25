/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return String(process.env.GIT_HASH);
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //loader: 'custom',
    //loaderFile: './app/_libs/CloudFlareLoader.js',
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
  env: {
    HOMEJUNCTION_TOKEN: process.env.HOMEJUNCTION_TOKEN,
    HOMEJUNCTION_RE_LITINGS_URI: process.env.HOMEJUNCTION_RE_LITINGS_URI,
    HOMEJUNCTION_RE_LITING_URI: process.env.HOMEJUNCTION_RE_LITING_URI,
    fubapikey: process.env.fubapikey,
    NEXT_PUBLIC_mapbox_token: process.env.NEXT_PUBLIC_mapbox_token,
    apininja: process.env.apininja,
    google: process.env.google,
    NEXT_PUBLIC_lightGallery: process.env.NEXT_PUBLIC_lightGallery,
    VERCEL_URL: process.env.NEXTVERCEL_URL,
    HOMEJUNCTION_RE_API_URI:process.env.HOMEJUNCTION_RE_API_URI,
    CLOUDFLARE_IMAGES:process.env.CLOUDFLARE_IMAGES
  },
};

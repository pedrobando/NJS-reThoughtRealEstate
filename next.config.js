/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return String(process.env.GIT_HASH);
  },
  reactStrictMode: true,
  swcMinify:true,
  images:{
    domains:['listing-images.homejunction.com', 'rethought-realestate.com']
  };

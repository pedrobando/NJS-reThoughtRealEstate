/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return String(process.env.GIT_HASH);
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['listing-images.homejunction.com', 'rethought-realestate.com', 'cdn.mos.cms.futurecdn.net','lh3.googleusercontent.com']
  },
  env: {
    HOMEJUNCTION_TOKEN: process.env.HOMEJUNCTION_TOKEN,
    HOMEJUNCTION_RE_LITINGS_URI: process.env.HOMEJUNCTION_RE_LITINGS_URI,
    HOMEJUNCTION_RE_LITING_URI: process.env.HOMEJUNCTION_RE_LITING_URI,
    fubapikey: process.env.fubapikey,
    NEXT_PUBLIC_mapbox_token: process.env.NEXT_PUBLIC_mapbox_token,
    apininja: process.env.apininja,
    google: process.env.google,
  },
};

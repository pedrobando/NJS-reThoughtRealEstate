// Docs: https://developers.cloudflare.com/images/url-format
export default function cloudflareLoader({ src, width, quality }) {
    const params = [`width=1280`, `quality=${quality || 75}`, 'format=auto']
    return `https://rethought.studio/cdn-cgi/image/${params.join(',')}/${src}`
  }
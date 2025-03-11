/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static exports
};

module.exports = nextConfig;

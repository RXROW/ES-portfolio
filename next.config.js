const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, 
  // Enable source maps in production
  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = 'source-map'; // Enables source maps for client-side code
    }
    return config;
  },

  // Image optimization configuration
  images: {
    unoptimized: false, // Set to false if you want Next.js to optimize images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
    ],
  },

  // Sass options configuration
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;

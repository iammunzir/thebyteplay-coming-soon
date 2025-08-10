/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better performance
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_WAITLIST_WEBHOOK: process.env.NEXT_PUBLIC_WAITLIST_WEBHOOK || '',
  },
};

module.exports = nextConfig;

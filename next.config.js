/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for performance
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports (optional)
  // output: 'export',
}

module.exports = nextConfig
import type { NextConfig } from 'next';
const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ['176.9.41.136', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31_536_000,
  },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
  async headers() {
    return [
      { source: '/(.*)', headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
      ]},
    ];
  },
  typescript: { ignoreBuildErrors: false },
};
export default config;

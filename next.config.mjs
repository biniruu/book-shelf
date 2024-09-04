/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  distDir: '.next',
  // Added eslint option because Next.js doesn't support eslint v9 and later
  // If Next.js supports eslint v9 in the future, this option can be removed
  // https://nextjs.org/docs/pages/api-reference/next-config-js/eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    tsconfigPath: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
  },
};

export default nextConfig;

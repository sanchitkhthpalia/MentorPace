/** @type {import('next').NextConfig} */

// Configure Next.js for Vercel (SSR). No static export/basePath.

const nextConfig = {
  // Always use standard .next directory for compatibility with Vercel
  // .next-cache was causing routes-manifest.json issues on Vercel
  distDir: '.next',
  // Ensure Next.js treats this folder as the workspace root
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

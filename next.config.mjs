/** @type {import('next').NextConfig} */

// Configure Next.js for Vercel (SSR). No static export/basePath.

const nextConfig = {
  // Use default .next directory for Vercel deployment
  // Custom .next-cache was for local development to avoid OneDrive locks
  distDir: process.env.VERCEL ? '.next' : '.next-cache',
  // Ensure Next.js treats this folder as the workspace root
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

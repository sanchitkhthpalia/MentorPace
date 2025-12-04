/** @type {import('next').NextConfig} */

// Configure Next.js for Vercel (SSR). No static export/basePath.

const nextConfig = {
  // Use a custom build directory to avoid OneDrive file locks on .next
  distDir: '.next-cache',
  // Ensure Next.js treats this folder as the workspace root
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/venus-nextjs` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Use a custom build directory to avoid OneDrive file locks on .next
  distDir: '.next-cache',
  // Ensure Next.js treats this folder as the workspace root
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

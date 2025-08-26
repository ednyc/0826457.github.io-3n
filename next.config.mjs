/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: isProd ? '/0826457.github.io-3n' : '',
  assetPrefix: isProd ? '/0826457.github.io-3n/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

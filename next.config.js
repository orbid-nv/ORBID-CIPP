/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [];
  },
};

module.exports = config;

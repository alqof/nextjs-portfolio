/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
      };
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

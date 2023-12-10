/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // for import TwitterIcon from "./twitter-icon.svg";
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

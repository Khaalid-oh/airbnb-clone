/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.airbnb.com'],
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.airbnb.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

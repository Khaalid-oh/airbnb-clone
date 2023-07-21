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
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

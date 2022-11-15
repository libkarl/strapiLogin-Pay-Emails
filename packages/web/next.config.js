/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  experimental: {
    urlImports: ["https://localhost:1337"],
  },
};

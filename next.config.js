/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   swcPlugins: [['typewind/swc', {}]],
  // },
};

module.exports = config;

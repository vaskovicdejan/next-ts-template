const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
  experimental: {
    //   swcPlugins: [['typewind/swc', {}]],
  },
};

module.exports = withBundleAnalyzer(config);

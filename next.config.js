/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      esmExternals: true,
    }
  }
);

module.exports = config;

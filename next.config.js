/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  {
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    experimental: {
      modern: true,
    }
  }
);

module.exports = config;

const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    cleanDistDir: true,
    compiler: {
      emotion: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    productionBrowserSourceMaps: true,
  }
);

module.exports = config;

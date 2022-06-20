/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withBundleAnalyzer from '@next/bundle-analyzer';
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export const config = withPlugins([
  [analyzer],
],
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

export default config;
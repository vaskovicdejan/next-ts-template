/** @type {import('next').NextConfig} */
module.exports = {
    webpack5: true,
    reactStrictMode: true,
    experimental: {
        esmExternals: true,
        swcLoader: true,
        swcMinify: true,
    },
}

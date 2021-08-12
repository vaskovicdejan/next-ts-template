const withLinaria = require('next-linaria');

module.exports = withLinaria({
    webpack5: true,
    reactStrictMode: true,
    // webpack: {
    //     rules: [
    //         {
    //         test: /\.m?js$/,
    //         exclude: /(node_modules|bower_components)/,
    //         use: {
    //             // `.swcrc` can be used to configure swc
    //             loader: "swc-loader"
    //         }
    //         }
    //     ]
    // },
});

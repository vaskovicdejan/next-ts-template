//// aws-amplify-react を使う場合などは以下のコメントアウトを有効にする
// const withCSS = require('@zeit/next-css')
// if (typeof require !== "undefined") {
//   require.extensions[".less"] = () => { };
//   require.extensions[".css"] = (file) => { };
// }

// const resolve = require('resolve')
// global.navigator = () => null
// const config = {
//   webpack(config, options) {
//     const { dir, isServer } = options
//     config.externals = []
//     if (isServer) {
//       config.externals.push((context, request, callback) => {
//         resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
//           if (err) {
//             return callback()
//           }
//           if (
//             res.match(/node_modules[/\\].*\.css/)
//             && !res.match(/node_modules[/\\]webpack/)
//             && !res.match(/node_modules[/\\]@aws-amplify/)
//           ) {
//             return callback(null, `css ${request}`)
//           }

//           callback()
//         })
//       })
//     }

//     return config
//   }
// }

// module.exports = withCSS(config)

module.exports = {}
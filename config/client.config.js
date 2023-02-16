/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-14 11:21:40
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-16 22:26:47
 * @FilePath: \SSR\01_node-server\config\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let path = require('path')
// let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')
let { DefinePlugin } = require('webpack')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin(),
  // 去除警告
  // runtime-core.esm-bundler.js:5086 Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined. 
  // You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.
  new DefinePlugin({
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false
  })],
  resolve: {
    // 添加扩展名，项目中导包就不需要编写相应的后缀
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  }
}
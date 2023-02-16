/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-14 11:21:40
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-14 19:52:51
 * @FilePath: \SSR\01_node-server\config\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
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
  plugins: [new VueLoaderPlugin()],
  resolve: {
    // 添加扩展名，项目中导包就不需要编写相应的后缀
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  },
  externals: [nodeExternals()] // 排除node_module中的依赖排除掉 针对node环境
}
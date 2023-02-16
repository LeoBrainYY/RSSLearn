/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-12 22:17:38
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-16 19:51:49
 * @FilePath: \SSR\01_node-server\src\server\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import createApp from '../app'
import { renderToString } from '@vue/server-renderer'

let express = require('express')
let server = express()

// 部署打包资源文件
server.use(express.static('build'))

server.get('/', async (req, res) => {
  let app = createApp()
  let appStringHtml = await renderToString(app)
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Vue3 SSR SERVER RENDER</h1>
      <div id="app">
        ${appStringHtml}
      </div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `
    // 使用nodemon时 打包和服务必须同时启动，才会同步监听文件的改变
    // webpack使用的是 --watch 去监听文件变化进行打包
  )
})

server.listen(3000, () => {
  console.log('start nodemon server on 3000')
})
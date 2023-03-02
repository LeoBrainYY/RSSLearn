/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-16 13:45:17
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 10:06:24
 * @FilePath: \SSR\01_node-server\src\client\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// 客户端使用createWebHistory
import { createWebHistory } from 'vue-router'
import App from '../App.vue'
import createRouter from '../router'
import { createPinia } from 'pinia'

let app = createApp(App)

// 安装路由插件
let router = createRouter(createWebHistory())
app.use(router)

// 安装pinia
let pinia = createPinia()
app.use(pinia)

// 需要等待服务器渲染完成 再去挂载
router.isReady().then(() => {
  app.mount('#app')
})

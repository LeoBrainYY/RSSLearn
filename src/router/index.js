/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-01 22:34:35
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-01 22:51:14
 * @FilePath: \SSR\01_node-server\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  }
]

// 路由模式  需要传参 createMemoryHistory
export default function (history) {
  return createRouter({
    history,
    routes
  })
}
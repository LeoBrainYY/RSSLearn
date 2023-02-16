/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-14 14:10:28
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-14 14:41:41
 * @FilePath: \SSR\01_node-server\src\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from 'vue'
import App from './App.vue'

// 通过函数来返回App示例 可以保证每个请求都会返回一个新的App实例 避免跨请求状态的污染
export default function createApp () {
  return createSSRApp(App)
}
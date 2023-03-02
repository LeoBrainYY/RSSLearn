<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-14 14:07:02
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 10:34:18
 * @FilePath: \SSR\01_node-server\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app" style="border: 5px solid green">
    <h2>Home</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // 解构响应式数据
  import { storeToRefs } from 'pinia'
  import { useHomeStore } from '../store/home'
  let homeStore = useHomeStore()
  let { count } = storeToRefs(homeStore)
  console.log(count)
  // const count = ref(200)
  function addCounter () {
    count.value++
  }
</script>
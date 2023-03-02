<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-14 14:07:02
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 10:26:28
 * @FilePath: \SSR\01_node-server\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app" style="border: 10px solid blue">
    <h2>About</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useHomeStore } from '../store/home'
  let homeStore = useHomeStore()
  let { count } = storeToRefs(homeStore)
  console.log(count)
  function addCounter () {
    count.value++
  }
</script>
<!--
 * @Author: willian126@126.com
 * @Description: 文件描述
 * @Date: 2021-11-04 13:55:27
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-04 16:59:19
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      // name: 'willian',
    }
  },
  setup(props, { slots, attrs, emit }) {
    return {
      name: 'gethin',
    }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

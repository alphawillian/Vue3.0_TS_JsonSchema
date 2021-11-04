<!--
 * @Author: willian126@126.com
 * @Description: 文件描述
 * @Date: 2021-11-04 13:55:27
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-04 16:44:50
-->
<template>
  <div class="hello">{{ age }} {{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
} as const

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  mounted() {
    this.age
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

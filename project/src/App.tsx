/*
 * @Author: willian126@126.com
 * @Description: 文件描述
 * @Date: 2021-11-04 17:38:52
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-04 17:57:18
 */
import { createApp, defineComponent, h, createVNode, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const img = require('./assets/logo.png') // eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'jokcy',
    })
    const numberRef = ref(1)
    // const number = ref(numberRef.value)
    setInterval(() => {
      // state.name += '1'
      numberRef.value += 1
    }, 1000)
    return () => {
      const number = numberRef.value
      return (
      <div id="app">
        <img src={img} alt="vue logo"></img>
        <p>{state.name + number}</p>
        <input type="text" v-model={state.name} />
        <HelloWorld age={1}></HelloWorld>
      </div>
      )
    }
  },
})

/*
 * @Author: willian126@126.com
 * @Description: 文件描述
 * @Date: 2021-11-04 17:38:52
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-09 17:32:29
 */
import { createApp, defineComponent, h, createVNode, reactive, ref } from 'vue'

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
        <p>{state.name + number}</p>
        <input type="text" v-model={state.name} />
      </div>
      )
    }
  },
})

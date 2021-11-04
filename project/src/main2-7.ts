import { createApp, defineComponent, h, createVNode, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const img = require('./assets/logo.png') // eslint-disable-line
// import App from './App.vue'

const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'jokcy',
    })
    const numberRef = ref(1)
    // const number = ref(numberRef.value)
    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)
    return () => {
      const number = numberRef.value
      return h('div', { id: 'app' }, [
        createVNode('img', {
          alt: 'Vue logo',
          src: img,
        }),
        h(HelloWorld, {
          msg: 'hello',
          age: 12,
        }),
        h('p', state.name + '  ' + numberRef.value + '    ' + number),
      ])
    }
  },
})

createApp(App).mount('#app')

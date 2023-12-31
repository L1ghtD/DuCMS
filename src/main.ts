import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import regesterStore from '@/store'

import 'normalize.css'
import './assets/css/index.less'

// 全局导入
// import ArcoVue from '@arco-design/web-vue'
// import '@arco-design/web-vue/dist/arco.less'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

const app = createApp(App)
app.use(ArcoVueIcon)
app.use(regesterStore)
app.use(router)
app.mount('#app')

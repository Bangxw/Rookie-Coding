import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './main.css'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import layout from './components/Basic/layout.vue'
import container from './components/Basic/container.vue'
import color from './components/Basic/color.vue'
import vueIcon from './components/Basic/icon.vue'
import button from './components/Basic/button.vue'
import radio from './components/Form/radio.vue'
import checkbox from './components/Form/checkbox.vue'
import input from './components/Form/input.vue'
import inputNumber from './components/Form/inputNumber.vue'
import select from './components/Form/select.vue'
import cascader from './components/Form/cascader.vue'
import switchVue from './components/Form/switch.vue'
import slider from './components/Form/slider.vue'
import timePicker from './components/Form/timerPicker.vue'
import datePicker from './components/Form/datePicker.vue'
import datetimePicker from './components/Form/datetimePicker.vue'
import upload from './components/Form/upload.vue'
import colorpicker from './components/Form/colorpicker.vue'
import transfer from './components/Form/transfer.vue'
import form from './components/Form/form.vue'
import table from './components/Data/table.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

// 定义路由
const routes = [
  {path: '/', component: HelloWorld},
  {path: '/HelloWorld', component: HelloWorld},
  {path: '/layout', component: layout},
  {path: '/container', component: container},
  {path: '/color', component: color},
  {path: '/vueIcon', component: vueIcon},
  {path: '/button', component: button},
  {path: '/radio', component: radio},
  {path: '/checkbox', component: checkbox},
  {path: '/input', component: input},
  {path: '/inputNumber', component: inputNumber},
  {path: '/select', component: select},
  {path: '/cascader', component: cascader},
  {path: '/switch', component: switchVue},
  {path: '/slider', component: slider},
  {path: '/time-picker', component: timePicker},
  {path: '/date-picker', component: datePicker},
  {path: '/datetime-picker', component: datetimePicker},
  {path: '/upload', component: upload},
  {path: '/color-picker', component: colorpicker},
  {path: '/transfer', component: transfer},
  {path: '/form', component: form},
  {path: '/table', component: table}
]

const router = new VueRouter({// 创建路由实例
  routes
})

Vue.prototype.$axios = axios

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

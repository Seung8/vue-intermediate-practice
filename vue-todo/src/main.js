import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

new Vue({
  el: '#app',
  // ES6 향상된 객체 리터럴 객체 속성 축약 적용
  store,
  render: h => h(App)
})

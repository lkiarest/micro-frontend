import Vue from 'vue'
import VueRouter from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import Page3 from './views/Page3'

Vue.config.productionTip = false

// vue router
const router = new VueRouter({
  mode: 'history',
  routes: [{ // internal page
    name: 'c',
    path: '/c',
    component: Page3
  }]
})

// qiankun router
registerMicroApps([
  { // external page
    name: 'a',
    entry: '/app1', // remote html entry
    container: '#subapp',
    activeRule: '/a',
    props: { containerId: '#subapp', baseRoute: '/a' }
  },
  { // external page
    name: 'b',
    entry: '/app2', // remote html entry
    container: '#subapp',
    activeRule: '/b',
    props: { containerId: '#subapp', baseRoute: '/b' }
  },
])

start()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

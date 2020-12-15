import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Page1 from './views/Page1'
import Page2 from './views/Page2'

Vue.config.productionTip = false

let vm = null

const render = (baseRoute) => {
  const router = new VueRouter({
    mode: 'history',
    base: baseRoute,
    routes: [{
      name: 'page1',
      path: '/page1',
      component: Page1,
    }, {
      name: 'page2',
      path: '/page2',
      component: Page2,
    }]
  })

  vm = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app2')
}

export async function bootstrap() {
  console.log('app2 bootstraped');
}

export async function mount(props) {
  render(props.baseRoute)
}

export async function unmount() {
  if (vm) {
    vm.$destroy()
    vm = null
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
  ]
})

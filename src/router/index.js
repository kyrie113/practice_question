import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import animation from '@/components/animation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/animation',
      name: 'animation',
      component: animation
    }
  ]
})

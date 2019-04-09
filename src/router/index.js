import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import animation from '@/pages/animation'
import sonPage from '@/pages/animations/sonPage'

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
      component: animation,
      children: [{ path: '/' }, { path: 'sonPage', component: sonPage }]
    }
  ]
})

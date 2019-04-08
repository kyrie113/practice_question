import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import animation from '@/components/animation'
import sonPage from '@/components/animations/sonPage'

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

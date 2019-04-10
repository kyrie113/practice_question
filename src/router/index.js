import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import bilibili from '@/pages/bilibili'
import animation from '@/pages/animation'
import sonPage from '@/pages/animations/sonPage'
import firstPage from '@/pages/animations/firstPage'
import table from '@/pages/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bilibili',
      name: 'bilibili',
      component: bilibili,
      children: [
        {
          path: '/animation',
          name: 'animation',
          component: animation,
          children: [
            { path: 'firstPage', component: firstPage },
            { path: 'sonPage', component: sonPage }
          ]
        },
        { path: 'main', name: 'main', component: main }
      ]
    },

    {
      path: '/table',
      name: table,
      component: table
    }
  ]
})

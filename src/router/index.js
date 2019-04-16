import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/bilibili/main'
import bilibili from '@/pages/bilibili/bilibiliHeader'
import animation from '@/pages/bilibili/animation'
import channel from '@/pages/bilibili/animations/channel'
import recommend from '@/pages/bilibili/animations/recommend'
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
            { path: 'recommend', component: recommend },
            { path: 'channel', component: channel }
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

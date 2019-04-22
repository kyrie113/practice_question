// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/my-mint.scss'
import {
  Option,
  Select,
  Button,
  DatePicker,
  Upload,
  Card,
  Icon
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Mint)
Vue.use(Option)
Vue.use(Select)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Card)
Vue.use(Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})

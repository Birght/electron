import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/style/common.scss'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) { Vue.use(require('vue-electron')) }
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
Vue.use(Element, { size: 'mini', zIndex: 3000 })
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

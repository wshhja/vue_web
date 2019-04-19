// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import * as MutationTypes from './store/mutations'
import * as ActionTypes from './store/actions-types'

Vue.config.productionTip = false

Vue.prototype.$mutation = MutationTypes
Vue.prototype.$action = ActionTypes

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import homepage from '@/components/pages/homepage'
import company from '@/components/pages/company'
import contact from '@/components/pages/contact'
import product from '@/components/pages/product'
import service from '@/components/pages/service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        {
          path: '/company',
          name: 'company',
          component: company
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        },
        {
          path: '/product',
          name: 'product',
          component: product
        },
        {
          path: '/service',
          name: 'service',
          component: service
        }
      ]
    }
  ]
})

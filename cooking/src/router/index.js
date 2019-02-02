import Vue from 'vue'
import Router from 'vue-router'

import homeRoute from './homeRouter'
import categoryRoute from './categoryRouter'
import discountRouter from './discountRouter'
import cartRoute from './cartRouter'
import mineRoute from './mineRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    homeRoute,
    categoryRoute,
    discountRouter,
    cartRoute,
    mineRoute,
    {
      path:"/",
      redirect:"/home"
    }
  ]
})

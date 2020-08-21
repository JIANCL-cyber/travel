import Vue from 'vue'
import Router from 'vue-router'
import Homej from '@/pages/homej/Homej.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homej',
      component: Homej
    }
  ]
})

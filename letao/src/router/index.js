import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

import Goods from '@/views/Goods.vue'

import First from '@/views/First.vue'

import Second from '@/views/Second.vue'

import Users from '@/views/Users.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: '/first',
          name: 'First',
          component: First
        },
        {
          path: '/second',
          name: 'Second',
          component: Second
        },
        {
          path: '/users',
          name: 'Users',
          component: Users
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/chinese',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/chinese',
        name: 'Chinese',
        component: () => import(/* webpackChunkName: "about" */ '../views/Chinese/Chinese.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

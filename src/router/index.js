import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/football',
    name: 'home',
    component: home,
    children: [
      {
        path: '/football',
        name: 'football',
        component: () => import(/* webpackChunkName: "about" */ '../views/football/index.vue'),
      },
      {
        path: '/basketball',
        name: 'basketball',
        component: () => import(/* webpackChunkName: "about" */ '../views/basketball/index.vue'),
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

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/films/HomeView.vue'),
    children:[
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/films/FilmsDetail.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/films/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

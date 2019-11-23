import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newAbout',
    name: 'newAbout',
    beforeEnter: (to, from, next) => {
      console.log('newAbout独享的前置守卫')
      debugger
      next()
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('全局前置守卫')
  console.log(to)
  console.log(from)
  console.log(next)
  debugger
  // 如果注释下面的方法，则导航不会正确跳转过去
  next()
})

router.afterEach((to, from) => {
  console.log('全局后置钩子')
  console.log(to)
  console.log(from)
  debugger
})

export default router

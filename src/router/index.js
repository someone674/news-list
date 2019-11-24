import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    showHeader: true,
    requiresAuth: false
  }
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: {
    showHeader: false,
    requiresAuth: true
  }
},
{
  path: '/newAbout',
  name: 'newAbout',
  beforeEnter: (to, from, next) => {
    console.log('newAbout独享的前置守卫')
    debugger
    next()
  },
  component: () => import(/* webpackChunkName: "about" */ '../views/newAbout.vue'),
  meta: {
    showHeader: false,
    requiresAuth: true
  }
},
{
  path: '/login',
  name: 'login',
  beforeEnter: (to, from, next) => {
    console.log('login独享的前置守卫')
    debugger
    next()
  },
  component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
  meta: {
    showHeader: false,
    requiresAuth: false
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('全局前置守卫')
  debugger
  console.log(to)
  console.log(from)
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (store.state.logined) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  console.log('全局后置钩子')
  console.log(to)
  console.log(from)
  debugger
})

export default router

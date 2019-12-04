import Vue from 'vue'
import VueRouter from 'vue-router'
import newsList from '../views/newsList'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'newsList',
  component: newsList,
  meta: {
    showHeader: true,
    requiresAuth: false
  }
},
{
  path: '/login',
  name: 'login',
  beforeEnter: (to, from, next) => {
    console.log('login独享的前置守卫')
    // debugger
    next()
  },
  component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
  meta: {
    showHeader: false,
    requiresAuth: false
  }
},
{
  path: '/detail',
  name: 'newsDetail',
  component: () => import(/* webpackChunkName: "about" */ '../views/newsDetail.vue'),
  meta: {
    showHeader: true,
    requiresAuth: true
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('全局前置守卫')
  // // debugger
  // console.log(to)
  // console.log(to.path)
  // console.log(from)
  let loginStatus = localStorage.getItem('logined')
  if (to.path === '/login' && loginStatus) {
    next('/')
  } else if (to.matched.some(r => r.meta.requiresAuth)) {
    if (loginStatus) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // console.log('全局后置钩子')
  // console.log(to)
  // console.log(from)
  // debugger
})

export default router

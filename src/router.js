import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Addresslist from './views/AddressList.vue'
import Add from './views/Add.vue'
import axiosutil from './utils/axiosutil.js'
import store from './store/index.js'
import Register from './views/Register.vue'

Vue.use(Router)

function nextTick(to, from, next){
  if (axiosutil.checkSession()) {
    store.dispatch('setUserId', {user_id: axiosutil.checkSession()})
    next()
  } else next('/')
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: Addresslist,
      beforeEnter: (to, from, next) => nextTick(to,from,next)
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      beforeEnter: (to, from, next) => nextTick(to,from,next)
    },
    {
      path: '/edit/:address_id',
      name: 'edit',
      component: Add,
      beforeEnter: (to, from, next) => nextTick(to,from,next)
    }
  ]
})

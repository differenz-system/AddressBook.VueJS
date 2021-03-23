import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Addresslist from '@/views/AddressList.vue'
import AddAddress from '@/views/AddAddress.vue'
import axiosutil from '@/utils/axiosutil.js'
import store from '@/store/index.js'
Vue.use(VueRouter)
function nextTick(to, from, next){
  if (axiosutil.checkSession()) {
    store.dispatch('setUserId', axiosutil.checkSession() )
    next()
  } else next('/')
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addresslist',
    name: 'Addresslist',
   component: Addresslist,
    beforeEnter: (to, from, next) => nextTick(to,from,next)
  },
  
  {
    path: '/add',
    name: 'AddAddress',
    component: AddAddress,
    beforeEnter: (to, from, next) => nextTick(to,from,next)
  },
  {
    path: '/edit/:address_id',
    name: 'edit',
    component: AddAddress,
    beforeEnter: (to, from, next) => nextTick(to,from,next)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

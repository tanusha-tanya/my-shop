import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Auth/Login'
import Register from '@/views/Auth/Register'
import NewProduct from '@/views/Products/NewProduct'
import Product from '@/views/Products/Product'
import ProductList from '@/views/Products/ProductList'
import Checkout from '@/views/User/Checkout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '',
      name: 'home',
      component: Home
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
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/list',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/new',
      name: 'newProduct',
      component: NewProduct
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})

export default router

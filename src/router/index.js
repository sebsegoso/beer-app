import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cervezas',
    name: 'Cervezas',
    component: () => import(/* webpackChunkName: "Cervezas" */ '../views/Cervezas.vue'),


  },
  {
    path: '/cervezas/:cerveceria',
    name: 'Cerveceria',
    component: () => import(/* webpackChunkName: "Carro" */ '../views/Cerveceria.vue')
  },
  {
    path: '/cervezas/:cerveceria/:detallecerveza',
    name: 'DetalleCerveza',
    props: true,
    component: () => import(/* webpackChunkName: "Carro" */ '../views/DetalleCerveza.vue')
  },
  {
    path: '/carro',
    name: 'Carro',
    component: () => import(/* webpackChunkName: "Carro" */ '../views/Carro.vue')
  },
  {
    path: '/pedido-realizado',
    name: 'Pedido-realizado',
    component: () => import(/* webpackChunkName: "Pedido-realizado" */ '../views/Pedido-realizado.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/')
  },
  {
    path: '/admin/comentarios',
    name: 'Comentarios',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/Comentarios.vue')
  },
  {
    path: '/admin/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/Pedidos.vue')
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

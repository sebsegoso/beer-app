import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

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
    props: true,
    component: () => import(/* webpackChunkName: "Cerveceria" */ '../views/Cerveceria.vue')
  },
  {
    path: '/cervezas/:cerveceria/:detallecerveza',
    name: 'DetalleCerveza',
    props: true,
    component: () => import(/* webpackChunkName: "DetalleCerveza" */ '../views/DetalleCerveza.vue')
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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')

  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/')
  },
  {
    path: '/admin/comentarios',
    name: 'Comentarios',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "Comentarios" */ '../views/Admin/Comentarios.vue')
  },
  {
    path: '/admin/pedidos',
    name: 'Pedidos',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "Pedidos" */ '../views/Admin/Pedidos.vue')
  },
  {
    path: '/admin/crear-usuario',
    name: 'CrearUsuario',
    meta: {
      login: true
    },
    component: () => import(/* webpackChunkName: "CrearUsuario" */ '../views/Admin/CrearUsuario.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// router.beforeEach((to, from, next) => {
//   let user = firebase.auth().currentUser;
//   let authRequired = to.matched.some(route => route.meta.login);

//   if (!user && authRequired) {
//     next({ name: 'Login' })
//   }
//   else {
//     next()
//   }
// })

router.scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

export default router

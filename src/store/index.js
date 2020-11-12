import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import Admin from './admin'
import Products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    Admin , Products
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import Admin from './admin'
import Products from './products'
import Cart from './cart'
import Feedback from './feedback'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    LOADING(state) {
      state.loading = true;
    },
    NOT_LOADING(state) {
      state.loading = false;
    }
  },
  actions: {

  },
  getters: {
    precioEnMiles: () => (numero) => {
      return numero
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  modules: {
    Admin, Products, Cart, Feedback
  }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import titleMixin from './mixins/titleMixin'
var firebaseConfig = {
  apiKey: "AIzaSyAvjGBPdRFGfyCH2kE9Tm_MKZ43pnkY5II",
  authDomain: "beer-app-2020.firebaseapp.com",
  databaseURL: "https://beer-app-2020.firebaseio.com",
  projectId: "beer-app-2020",
  storageBucket: "beer-app-2020.appspot.com",
  messagingSenderId: "506440871574",
  appId: "1:506440871574:web:b2f220b7ddf0607cd8dcb7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false
Vue.mixin(titleMixin)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

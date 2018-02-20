// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import push from './push'

let config = {
  apiKey: 'AIzaSyBcfdE58drFZoUemF2K12S_-wGwqWYS6vQ',
  authDomain: 'consultorarapido.firebaseapp.com',
  databaseURL: 'https://consultorarapido.firebaseio.com',
  projectId: 'consultorarapido',
  storageBucket: 'consultorarapido.appspot.com',
  messagingSenderId: '759777202783'
}

firebase.initializeApp(config)

push()

Vue.use(Vuefire)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

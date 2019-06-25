import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './Routes/Router'
import {config} from './Config/Firebase'
import store from './Store/Store'

window.axios = require('axios');

Vue.use(VueRouter)

Vue.config.productionTip = false

// Initialize vuex, loading var with true;

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        axios.get(api('user/get/'+user.uid)).then(res => {
          if(res.data.role > 0) {
            user = res.data;
            console.log(user);
            // Store this user to vuex store
            store.commit('user', user)
            // Set loading to false
            store.commit('loading', false)
          } else {
            // Show No Access Page

            // Set loading to false
            store.commit('loading', false)
          }
        })
      } else {
        // Show No Access Page

        // Set loading to false
        store.commit('loading', false)
      }
    })
  },
  render: h => h(App),
}).$mount('#app')

window.api = (url) => {
  return `https://chaipaan.tk/api/v1/${url}`;
}

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './Routes/Router'
import {config} from './Config/Firebase'

window.axios = require('axios');

Vue.use(VueRouter)

Vue.config.productionTip = false

// Initialize vuex, loading var with true;

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        axios.get(api('user/get/'+user.uid)).then(res => {
          if(res.data.role > 0) {
            user = res.data;
            console.log(user);
            // Store this user to vuex store
            // Set loading to false
          } else {
            // Show No Access Page
            // Set loading to false
          }
        })
      } else {
        // Show No Access Page
        // Set loading to false
      }
    })
  },
  render: h => h(App),
}).$mount('#app')

window.api = (url) => {
  return `https://chaipaan.tk/api/v1/${url}`;
}

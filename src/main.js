import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './Routes/Router'
import {config} from './Config/Firebase'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$router.push('/dashboard')
      }
      else{
        this.$router.push('/')
      }
    })
  },
  render: h => h(App),
}).$mount('#app')

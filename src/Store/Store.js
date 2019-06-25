import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: '',
        loading:true
    },
    mutations:{
        user:(state, user) =>{
            state.user = user
        },
        loading:(state, loading) =>{
            state.loading = loading
        }
    },
    actions:{

    }
})
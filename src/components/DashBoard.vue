<template>
    <div class="container">
        <div v-if="userRole == true">
        <h2>
            Hello World:(
        </h2>
        <br>
        <button class="btn btn-danger pull-right"  @click='logOut'> Logout </button> <br><br>
        <pre>
            {{user}}
        </pre>
        <p class="text-primary">
            {{userId}}
        </p>
        </div>
        <div v-else>
            <h2 class="text-danger">
                You are not valid permission to serve this page.
            </h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'dashboard',
    data() {
        return {
            user: '',
            userId: '',
            userRole:''
        }
    },
    mounted() {
      
    },
    methods: {
        logOut(){
            firebase.auth().signOut();
        }
    }
}
</script>

<template>
    <div class="container">
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
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
    name: 'dashboard',
    data() {
        return {
            user: '',
            userId: ''
        }
    },
    mounted() {
        this.user = firebase.auth().currentUser;
        if(this.user) {
            axios 
            .get(`https://chaipaan.tk/api/v1/user/get/${this.user.uid}`)
            .then(res => {
                console.log(res.data)
            })
        }
    },
    methods: {
        logOut(){
            firebase.auth().signOut();
        }
    }
}
</script>

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
export default {
    name: 'dashboard',
    data() {
        return {
            user: '',
            userId: ''
        }
    },
    created() {
        this.user = firebase.auth().currentUser;
        if(this.user) {
            this.userId  = this.user.uid
        }
    },
    methods: {
        logOut(){
            firebase.auth().signOut();
        }
    }
}
</script>

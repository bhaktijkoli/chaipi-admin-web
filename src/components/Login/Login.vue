<template>
    <div class="my-5">
    <h1 class="text-center my-4">Login</h1>
    <div id="firebaseui-auth-container"></div>
    </div>
</template>


<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {config} from '../../Config/Firebase'
export default {
    name: 'login',
    mounted() {
        let uiConfig = {
            signInSuccessUrl: '/dashboard',
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID,    
            ]
        }
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>

import VueRouter from 'vue-router'

import Login from '../components/Login/Login'
import DashBoard from '../components/DashBoard'
import MainBody from '../components/MainBody'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/dashboard',
            component: DashBoard
        },
        {
            path: '/dashboard',
            component: MainBody
        }
        
    ],
    mode: 'history'
})

export default router;
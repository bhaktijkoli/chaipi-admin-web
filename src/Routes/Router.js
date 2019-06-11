import VueRouter from 'vue-router'

import Login from '../components/login/Login'
import DashBoard from '../components/DashBoard'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/dashboard',
            component: DashBoard
        }
    ],
    mode: 'history'
})

export default router;
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../view/Login/Login.vue'
import PhoneLogin from '../view/Login/PhoneLogin/PhoneLogin.vue'
import PhoneLoginPassword from '../view/Login/PhoneLogin/PhoneLoginPassword.vue'
import ScanLogin from '../view/Login/PhoneLogin/ScanLogin.vue'
import HomePage from '../components/HomePage.vue'
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/Login/PhoneLogin',
        component: PhoneLogin
    },
    {
        name: 'PhoneLoginPassword',
        path: '/Login/PhoneLoginPassword',
        component: PhoneLoginPassword
    },
    {
        path: '/Login/ScanLogin',
        component: ScanLogin
    },
    {
        path: '/HomePage',
        component: HomePage
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
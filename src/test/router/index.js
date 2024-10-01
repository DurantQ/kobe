import { createRouter, createWebHistory } from 'vue-router'
import login from '../login.vue'
import home from '../home.vue'
import test from '../test.vue'
const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/test',
        component: test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
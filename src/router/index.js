import { createRouter, createWebHistory } from 'vue-router'
import { useAlertsStore } from '@/store'
// import { createPinia } from 'pinia'

// const pinia = createPinia()

const routes = [
    {
        path: '/Login',
        component: () => import('@/view/Login/Login.vue')
    },
    {
        path: '/Login/PhoneLogin',
        component: () => import('@/view/Login/PhoneLogin/PhoneLogin.vue')
    },
    {
        name: 'PhoneLoginPassword',
        path: '/Login/PhoneLoginPassword',
        component: () => import('@/view/Login/PhoneLogin/PhoneLoginPassword.vue')
    },
    {
        path: '/Login/ScanLogin',
        component: () => import('@/view/Login/PhoneLogin/ScanLogin.vue')
    },
    {
        path: '/HomePage',
        component: () => import('@/components/HomePage.vue')
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/view/404/404.vue')

    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    const store = useAlertsStore();
    console.log(to.path);
    if (to.path == '/') next('/Login')
    if (to.path == '/Homepage') store.userCookie == '' ? next('/Login') : next('/HomePage');
    // if (to.path == '/Login') { pinia._persistence.clear();; console.log('login', store); }
    next()
})




export default router
import { createRouter, createWebHistory } from 'vue-router'
import { UseUserStore } from '@/store/UseUserStore'
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
        component: () => import('@/components/HomePage.vue'),
        children: [
            {
                path: 'My',
                component: () => import('@/view/My/My.vue')
            }

        ]
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

// router.beforeEach((to, from, next) => {
//     if (to.path == '/') next('/Login')
//     const store = useAlertsStore();
//     // console.log(store.userCookie);
//     // console.log(to.path);
//     // if (store.userCookie != '') { next(`${to.path}`) }

//     // if (to.path == '/Homepage') store.userCookie == '' ? next('/Login') : next('/HomePage');
//     if (store.userCookie == '') {
//         if (to.path == '/Login') {
//             next()
//         } else {
//             router.push('/Login')
//         }
//     } else {
//         next()
//     }

// })




export default router
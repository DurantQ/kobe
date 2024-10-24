import axios from "axios";
// import { LoginStatus } from '@/api'
import { UseUserStore } from '@/store/UseUserStore.js'
// import { createPinia } from 'pinia'

// const pinia = createPinia()
// const store = useAlertsStore(pinia);




export const req = () => {
    // console.log('request',store);
    // console.log('request2',store);
    axios.interceptors.request.use(function (config) {
        const UserStore = UseUserStore();
        console.log(config.url);
        if (config.url == 'http://localhost:3000/login/qr/key' || config.url == 'http://localhost:3000/login/qr/create' || config.url == 'http://localhost:3000/login/qr/check') return config
        if (config.url == 'http://localhost:3000/user/playlist') {
            config.params = {
                uid: UserStore.LoginStatus.profile.userId,
                limit: 30,
                offset: 0
            }
            return config
        }
        if (UserStore.userCookie != '') {
            config.params = {
                cookie: UserStore.userCookie,
                uid: UserStore.LoginStatus.profile.userId
            }
            return config;
        }

        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
}

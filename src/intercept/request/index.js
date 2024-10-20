import axios from "axios";
// import { LoginStatus } from '@/api'
import { useAlertsStore } from '@/store'
// import { createPinia } from 'pinia'

// const pinia = createPinia()
// const store = useAlertsStore(pinia);

const store = useAlertsStore();


export const req = () => {

    // console.log('request',store);
    // console.log('request2',store);
    axios.interceptors.request.use(function (config) {
        console.log(config.url);
        if (config.url == 'http://localhost:3000/login/qr/key' || config.url == 'http://localhost:3000/login/qr/create' || config.url == 'http://localhost:3000/login/qr/check') return config
        if (store.userCookie != '') {
            config.params = {
                cookie: store.userCookie,
                uid: store.uid
            }
            return config;
        }

        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
}

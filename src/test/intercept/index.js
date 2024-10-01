import axios from "axios";
import { createPinia } from 'pinia'
import { useAlertsStore } from '../store'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate())

// const controller = new AbortController();

export const res = () => {
    axios.interceptors.response.use(function (response) {
        const store = useAlertsStore(pinia);
        
        store.setUserIdAndUserName(response.data.id,response.data.user)
        const state = pinia.state.value
        if (response.config.url === 'http://localhost:3003/login') {
            console.log('我被触发了');
            store.$patch((state) => {
                state.userId = response.data.id
                state.userName = response.data.user

                console.log(state.userId, state.userName);
            })
        }
        console.log(store.userId,store.userName);
        return response;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}


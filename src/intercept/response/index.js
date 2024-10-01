import axios from "axios";
import { createPinia } from 'pinia'
import { useAlertsStore } from '../../store'

const pinia = createPinia()
const store = useAlertsStore(pinia);
const controller = new AbortController();

export const res = () => {
    axios.interceptors.response.use(function (response) {
        let tempUser = ''
        let tempUserPicture = ''
        if (response.config.url === 'http://localhost:3000/login/qr/check' && response.data.code === 802) {
            tempUser = response.data.nickname
            tempUserPicture = response.data.avatarUrl
            controller.abort()
        }
        if (response.config.url === 'http://localhost:3000/login/qr/check' && response.data.code === 803) {
            // store.$patch({
            //     LoginStatus: true,
            //     user: tempUser,
            //     userPicture: tempUserPicture
            // })
            store.$patch((state) => {
                state.LoginStatus = true
                state.user = tempUser
                state.userPicture = tempUserPicture
                console.log(state.LoginStatus,state.user,state.userPicture);
            })
            // store.
            console.log(store);
            // store.LoginStatus = true
            // store.user = response.data.nickname
            // console.log(store.user);
            // store.userPicture = response.data.avatarUrl

            // store.userCookie = response.data.cookie
            // console.log(store.LoginStatus);
            // new CancelToken((cancel) => {
            //     console.log('请求取消');
            //     cancel();
            // })
        }
        return response;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { loginQrKey, loginQrCreate, loginQrCheck, LoginStatus, TopPlaylist } from '@/api'
import { useRoute, useRouter } from 'vue-router'
import { UseUserStore } from '@/store/UseUserStore.js'
const UserStore = UseUserStore()
const router = useRouter()

let timer = null
onBeforeUnmount(() => {
    clearInterval(timer)
    timer = null
})
onMounted(async () => {
    const key = (await loginQrKey()).data.data.unikey
    const base64Url = (await loginQrCreate(key)).data.data.qrimg
    ScanBase64.value = base64Url
    timer = setInterval(async () => {
        const statusCode = (await loginQrCheck(key)).data
        if (statusCode.code === 803) {
            UserStore.$patch((state) => {
                state.userCookie = statusCode.cookie
            })

        }
        if (Number(statusCode.code) === 800) {
            const loginStatus = (await LoginStatus(UserStore.userCookie)).data.data;
            const topPlaylist = (await TopPlaylist())
            // console.log(loginStatus);
            if (loginStatus.code == 200) {
                UserStore.$patch((state) => {
                    state.LoginStatus = loginStatus
                    state.TopPlaylist = topPlaylist
                })
                router.push(`/Homepage`)
            } else {
                console.log('异常');
            }
        }
        // console.log(store.userCookie);
    }, 1200)
})
let ScanBase64 = ref('')
</script>

<template>
    <div style="width: 100%;height: 100%;background-color: white;position: relative;">
        <div style="transform: translate(-50%,-50%);top: 50%;left: 50%;position: absolute;">
            <img :src="ScanBase64" alt="">
        </div>
    </div>
</template>
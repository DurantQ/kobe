<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { loginQrKey, loginQrCreate, loginQrCheck, LoginStatus } from '@/api'
import { useRoute, useRouter } from 'vue-router'
import { useAlertsStore } from '@/store'
const store = useAlertsStore()
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
            store.$patch((state) => {
                state.userCookie = statusCode.cookie
            })
            
        }
        if (Number(statusCode.code) === 800) {
            const loginStatus = (await LoginStatus(store.userCookie)).data.data;
            // console.log(loginStatus);
            if (loginStatus.code == 200) {
                store.$patch((state) => {
                    console.log('31', store);
                    state.nickname = loginStatus.profile.nickname
                    state.avatarUrl = loginStatus.profile.avatarUrl
                    state.uid = loginStatus.profile.userId
                    state.backgroundUrl = loginStatus.profile.backgroundUrl
                    state.city = loginStatus.profile.city
                    state.birthday = loginStatus.profile.birthday
                    state.createTime = loginStatus.profile.createTime
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
<script setup>
import { onMounted, ref } from 'vue';
import { GetScanKey, Scan, QrCodeStatus } from '../../../api/index'
import { useRoute, useRouter } from 'vue-router'
import { useAlertsStore } from '../../../store/index.js'
let store = useAlertsStore()
const router = useRouter()
onMounted(async () => {
    let tempTime = Date.now()
    const key = (await GetScanKey(tempTime)).data.data.unikey
    const base64Url = (await Scan(key, tempTime)).data.data.qrimg
    ScanBase64.value = base64Url
    let nuserName = ''
    let nuserPicture = ''
    let nLoginStatus = ''
    let nuserCookie = ''
    setInterval(async () => {
        const statusCode = (await QrCodeStatus(key, Date.now())).data
        if (statusCode.code === 802) {
            nuserName = statusCode.nickname
            nuserPicture = statusCode.avatarUrl
            nuserCookie = statusCode.cookie
        }
        if (statusCode.code === 803) {
            store.$patch((state) => {
                state.userPicture = nuserPicture
                state.userName = nuserName
                state.userCookie = nuserCookie
                state.LoginStatus = true
            })
        }
        console.log(statusCode);
        if (Number(statusCode.code) === 800) {
            router.push(`/Homepage`)
            return
        }
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
<script setup>
import { onMounted, ref } from 'vue';
import { GetScanKey, Scan, QrCodeStatus } from '../../../api/index'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
onMounted(async () => {
    let tempTime = Date.now()
    const key = (await GetScanKey(tempTime)).data.data.unikey
    const base64Url = (await Scan(key, tempTime)).data.data.qrimg
    ScanBase64.value = base64Url
    setInterval(async () => {
        const statusCode = (await QrCodeStatus(key, Date.now())).data.code
        // console.log(statusCode);
        if (Number(statusCode) === 800) {
            router.push('/HomePage')
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
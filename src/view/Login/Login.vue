<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'
import { useAlertsStore } from '@/store'
let store = useAlertsStore()
const router = useRouter()

let phone = ref()
let password = ref('')
let checked = ref(false);
let showCenter = ref(false)
// onMounted(() => {
//     if (store.LoginStatus == true) {
//         // router.push('/HomePage')
//     }
// })
const CheckedStatus = () => {
    // console.log(checked.value);
}
const login = (phone, password) => {
    axios.get('http://localhost:3000/login/cellphone', {
        params: {
            phone,
            password,
        }
    })
}
// const policy = () => {
//     return 
// }
const phoneLogin = (path) => {
    if (showCenter.value === false) {
        showCenter.value = true
    }

    if (checked.value === true) {
        router.push(path)
    }

}
const ScanLogin = () => {
    router.push('/Login/ScanLogin')
}
const agree = () => {
    showCenter.value = false
    checked.value = true
}
const Close = () => {
    window.location.href = "about:blank";
    window.close();
}
</script>
<!-- <Icon icon="mdi:bell-off" /> -->
<template>
    <div style="background-color: rgb(220, 44, 31);width: 100%;height: 100%;">
        <van-popup v-model:show="showCenter" round style="padding:7% 5.3%; width: 84%;">
            <div
                style="display: flex;flex-direction: column; width: 100%;height: 100%;font-size: 0.9rem;line-height: 1.5rem;">
                <div style="font-weight: 600;margin-bottom: 1rem;font-size: 1rem;">服务条款和隐私政策提示</div>
                <div style="margin-bottom: 1.4rem;color: rgb(103, 103, 103);">欢迎使用网易云音乐!</div>
                <div style="color: rgb(103, 103, 103);margin-bottom: 1.4rem;">
                    在您使用网易云音乐前，请您认真阅读并了解
                    <a href="" style="color: rgb(86, 123, 165);">《服务条款》</a>
                    和
                    <a href="" style="color: rgb(86, 123, 165);">《隐私政策》。</a>
                </div>
                <div style="color: rgb(103, 103, 103);margin-bottom: 1rem;">如您未满14周岁，您还需通知您的监护人，共同阅读
                    <a href="" style="color: rgb(86, 123, 165);">《儿童隐私政策》</a>
                    ，点击“同意”即表示您和您的监护人已阅读并同意全部条款。
                </div>
                <div style="margin-bottom: 1.6rem;">
                    <van-button type="default" round hairline @click="agree"
                        style="background-color: rgb(254, 58, 59);color: white;font-weight: 600;width: 100%;">
                        同意
                    </van-button>
                </div>
                <div style="color: rgb(86, 123, 165); display: flex;justify-content:center" @click="Close">
                    不同意退出APP>>
                </div>
            </div>
        </van-popup>
        <div style="position: relative; top: 24%;">
            <div
                style="position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;border: 1px solid rgb(218, 54, 43);border-radius: 50%;width: 16rem;height: 16rem;">
                <div
                    style="position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;border: 1px solid rgb(218, 54, 43);border-radius: 50%;width: 10rem;height: 10rem;">
                    <div
                        style="background-color: white;border: 1px solid white;width: 4rem;height: 4rem;border-radius: 50%;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;">
                        <Icon icon="ri:netease-cloud-music-fill"
                            style="color: rgb(241, 42, 37);width: 5.4rem;height: 5.4rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;" />
                    </div>
                </div>
            </div>
        </div>
        <div style="position: relative;top: 60%;display: flex; justify-content:center">
            <van-button type="default" round style="color: rgb(233, 68, 68);font-weight: 600;width: 70%;"
                @click="phoneLogin('/Login/PhoneLogin')">
                手机号登录
            </van-button>
        </div>
        <div style="position: relative;top: 60%;display: flex; justify-content:center;margin-top: 1rem;">
            <van-button type="default" round hairline
                style="background-color: rgb(220, 44, 31);color: white;font-weight: 600;width: 70%;" @click="">
                立即体验
            </van-button>
        </div>
        <div style="display: flex;justify-content:center;position: relative;top: 66%;">
            <div style="display: flex;justify-content:space-between;width: 70%;color: rgb(248, 214, 212);">
                <div
                    style="width: 2.4rem;height: 2.4rem;border: 1px solid rgb(240, 83, 71);border-radius: 50%;position: relative;">
                    <Icon icon="mdi:wechat"
                        style="width: 1.4rem;height: 1.4rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;" />
                </div>
                <div
                    style="width: 2.4rem;height: 2.4rem;border: 1px solid rgb(240, 83, 71);border-radius: 50%;position: relative;">
                    <Icon icon="mingcute:qq-fill"
                        style="width: 1.4rem;height: 1.4rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;" />
                </div>
                <div
                    style="width: 2.4rem;height: 2.4rem;border: 1px solid rgb(240, 83, 71);border-radius: 50%;position: relative;">
                    <Icon icon="ri:weibo-fill"
                        style="width: 1.4rem;height: 1.4rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;" />
                </div>
                <div @click="phoneLogin('/Login/ScanLogin')"
                    style="width: 2.4rem;height: 2.4rem;border: 1px solid rgb(240, 83, 71);border-radius: 50%;position: relative;">
                    <Icon icon="mdi:qrcode-scan"
                        style="width: 1.4rem;height: 1.4rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;" />
                </div>
            </div>
        </div>
        <div style="display: flex;justify-content:center;position: relative;top: 70%;">
            <div style="display: flex;align-items:center; font-size: 0.6rem;">
                <van-checkbox v-model="checked" @click="CheckedStatus" shape="square"
                    style="width:0.6rem ;height:0.6rem ; color: rgb(20, 0, 0);margin-right: 0.2rem;"
                    icon-size="0.6rem"></van-checkbox>
                <div style="color: rgb(241, 107, 97);">同意</div>
                <a href="" style="color: rgb(253, 200, 195);">《用户协议》</a>
                <a href="" style="color: rgb(253, 200, 195);">《隐私政策》</a>
                <a href="" style="color: rgb(253, 200, 195);">《儿童隐私政策》</a>
            </div>
        </div>


    </div>
</template>
<!-- <input type="text" v-model="phone">
        <input type="text" v-model="password"> -->
        <!-- <button @click="login(phone, password)">登录</button> -->
        <!-- <img :src="base64" alt=""> -->
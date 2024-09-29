<script setup>
import { Icon } from '@iconify/vue'
import { verify } from '../../../api/index'
import { showToast } from 'vant';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
let password = ref('')
let phone = router.currentRoute.value.query.Phone
// console.log(phone);
const back = () => {
    router.back()
}
const phonePassword = async () => {
    
    const res = (await verify(Number(phone), password)).data
    if (res.code === 400) {
        console.log(res.message);
        showToast({
            message: '用户名或者密码错误',
            position: 'bottom',
            forbidClick: true
        });
    }
    else if (res.code === 200) {
        router.push('/HomePage')
    }
}
</script>

<template>
    <div style="width: 100%;height: 100%;background-color: #fff;">
        <div style="display: flex;align-items:center;margin-left: 6%;margin-top: 12%;">
            <Icon icon="lets-icons:arrow-left-light" style="width: 2rem;height: 2em;" @click="back" />
            <div style="margin-left: 4%;font-size: 1.2rem;">手机号登录</div>
        </div>
        <div
            style="display: flex;align-items:flex-end;margin-top: 14%; border-bottom: 1px solid rgb(217, 217, 217);padding-bottom: 1rem;margin-left: 6%;margin-right: 6%;justify-content:space-between">

            <input type="password" placeholder="请输入密码" style="width: 80%;" v-model="password">


            <div style="color:rgb(87, 123, 163);font-size: 0.8rem;">忘记密码?</div>
        </div>
        <div style="display: flex; justify-content:center;margin-top: 12%;">
            <van-button type="default" round
                style="color: rgb(255, 255, 255);font-weight: 600;width: 82%;background-color: rgb(254, 58, 59);"
                @click="phonePassword">
                登录
            </van-button>
        </div>
    </div>
</template>

<style scoped>
input::placeholder {
    color: rgb(204, 204, 204)
}

input {
    border: 0;
}
</style>
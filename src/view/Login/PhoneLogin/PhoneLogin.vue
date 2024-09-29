<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router';
const router = useRouter()
// console.log(router.currentRoute.value.params);
let phone = ref('');
const phonePassword = () => {
    if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone.value))) {
        alert("手机号码有误，请重填");
        return false;
    }
    let Phone = phone.value
    router.push({
        name:'PhoneLoginPassword', 
        query: {
            Phone
        }
    })
}
// phone=${phone.value}
const back = () => {
    router.back()
}
</script>

<template>
    <div style="width: 100%;height: 100%;background-color: #fff;">
        <div style="display: flex;align-items:center;margin-left: 6%;margin-top: 12%;">
            <Icon icon="lets-icons:arrow-left-light" style="width: 2rem;height: 2em;" @click="back" />
            <div style="margin-left: 4%;font-size: 1.2rem;">手机号登录</div>
        </div>
        <div style="font-size: 0.8rem;color: rgb(153, 153, 153);margin-left: 6%;margin-top: 14%;">
            未注册的手机号登录后将自动创建账号
        </div>
        <div
            style="display: flex;align-items:center;margin-top: 14%; border-bottom: 1px solid rgb(217, 217, 217);padding-bottom: 1rem;margin-left: 6%;margin-right: 6%;">
            <div>%d%d</div>
            <input type="text" placeholder="请输入手机号" v-model="phone" :phoneLoginData="Number(phone)">
        </div>
        <div style="display: flex; justify-content:center;margin-top: 12%;">
            <van-button type="default" round
                style="color: rgb(255, 255, 255);font-weight: 600;width: 82%;background-color: rgb(254, 58, 59);"
                @click="phonePassword">
                下一步
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
    margin-left: 0.6rem;
}
</style>
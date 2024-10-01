<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import LeftPopupCompOne from './LeftPopupCompOne.vue'
import LeftPopupCompTwo from './LeftPopupCompTwo.vue';
import LeftPopupCompTopRoundCorner from './LeftPopupCompTopRoundCorner.vue'
import LeftPopupCompBottomRoundCorner from './LeftPopupCompBottomRoundCorner.vue'
import { useAlertsStore } from '../../store'
let store = useAlertsStore()
let userName = store.userName
let userPicture = store.userPicture

// let showLeft = ref(true)
const btn = () => {
    showLeft.value = !showLeft.value
}
let tempArr3 = [{
    icon: 'streamline:shell',
    title: '云贝中心'
}, {
    icon: 'ri:police-badge-fill',
    title: '徽章中心'
}, {
    icon: 'icon-park:clothes-crew-neck',
    title: '装扮中心'
}]
let tempArr5 = [{
    icon: 'ion:ticket-outline',
    title: '云村有票'
},
{
    icon: 'icon-park-outline:shopping-bag',
    title: '商城'
},
{
    icon: 'simple-icons:beats',
    title: 'Beat专区'
},
{
    icon: 'pepicons-pencil:fire',
    title: '云推歌'
},
{
    icon: 'ph:bell-thin',
    title: '彩铃专区'
},]
let tempArr6Top = [{
    icon: 'line-md:moon-alt-loop',
    title: '深色模式'
}, {
    icon: '',
    title: '定时关闭'
}, {
    icon: 'material-symbols-light:download',
    title: '边听边存'
}, {
    icon: 'mdi:court-hammer',
    title: '音乐收藏家'
}, {
    icon: 'fluent:prohibited-48-regular',
    title: '音乐黑名单'
}
    , {
    icon: 'icon-park-outline:protect',
    title: '青少年模式'
}]
let tempArr6Bottom = [{
    icon: 'lets-icons:order-light',
    title: '我的订单'
}, {
    icon: 'icon-park-outline:coupon',
    title: '优惠券'
}, {
    icon: 'ri:share-circle-line',
    title: '分享网易云音乐'
},
{
    icon: '',
    title: '个人信息收集与使用清单'
}, {
    icon: '',
    title: '个人信息与第三方共享清单'
}, {
    icon: '',
    title: '个人信息与隐私保护'
}
    , {
    icon: 'arcticons:microsoft-defende',
    title: '云推歌'
}]
// console.log(store.user);

// <Icon icon="lets-icons:message-light" />
// <Icon icon="streamline:shell" />
// <Icon icon="ri:police-badge-fill" />
// <Icon icon="icon-park:clothes-crew-neck" />
// <Icon icon="hugeicons:bulb" />


// <Icon icon="streamline:hexagram" />
// <Icon icon="ion:ticket-outline" />
// <Icon icon="icon-park-outline:shopping-bag" />
// <Icon icon="simple-icons:beats" />
// <Icon icon="pepicons-pencil:fire" />
// <Icon icon="ph:bell-thin" />
// <Icon icon="icon-park-outline:signal-strength" />


// <Icon icon="eos-icons:rotating-gear" />
// <Icon icon="line-md:moon-alt-loop" />    <Icon icon="line-md:sunny-filled-loop" />
// 定时
// <Icon icon="material-symbols-light:download" />
// <Icon icon="mdi:court-hammer" />
// <Icon icon="fluent:prohibited-48-regular" />
// <Icon icon="icon-park-outline:protect" />
// <Icon icon="mdi:alarm-clock" />


// <Icon icon="ep:service" />
// <Icon icon="lets-icons:order-light" />
// <Icon icon="icon-park-outline:coupon" />
// <Icon icon="ri:share-circle-line" />
// 个人信息收集
// 个人信息收集第三方共享
// <Icon icon="arcticons:microsoft-defender" />
// <Icon icon="mdi:about-circle-outline" />

// <Icon icon="marketeq:exchange" />
// <Icon icon="uil:sign-out-alt" />
// console.log(store.user);
</script>



<template>
    <!-- <Icon icon="lets-icons:message-light" /> -->
    <van-popup v-model:show="store.showLeft" position="left" :style="{ width: '85%', height: '100%' }"
        style="background-color: rgb(246, 248, 251);font-size: 0.8rem;">
        <div style="width: 90%;height: 100%;margin-left: 5%;margin-right: 5%;">
            <div
                style="display: flex;align-items:center; justify-content:space-between;background-color: rgb(246, 248, 251);margin-bottom: 8%;margin-top: 8%;">
                <div style="display: flex;align-items:center;width: 90%;">
                    <van-image round width="2rem" height="2rem"
                        :src="userPicture === '' ? 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' : userPicture"
                        style="margin-right: 4%;">
                    </van-image>
                    <div>{{ userName === '' ? '游客' : userName }}</div>
                    <Icon icon="material-symbols-light:keyboard-arrow-right" style="width: 1.4rem;height: 1.4rem;" />
                </div>
                <Icon icon="teenyicons:scan-solid" style="width: 1rem;height: 1rem;" />
            </div>
            <div
                style="width: 100%;background:linear-gradient(45deg, rgb(42, 42, 43), rgb(80, 82, 87),rgb(55, 56, 61));height: 18%; border-radius: 1rem;display: flex;justify-content:center;align-items:center;margin-bottom: 8%;">
                <div style="display: flex;width: 90%;height: 80%;flex-direction: column;justify-content:center;">
                    <div style="display: flex; justify-content:space-between;width: 100%;height: 26%;margin-bottom: 2%;">
                        <div style="font-weight: 700;color: white;font-size: 1rem;">会员已过期</div>
                        <div
                            style="color:red;background-color: #fff;border-radius: 1rem;font-size: 0.8rem;padding-left: 4%;padding-right: 4%;font-weight: 500;align-items: center;display: flex;">
                            ¥4.8续费</div>
                    </div>
                    <div
                        style="color: rgb(185, 186, 188);font-size: 0.8rem;display: flex;align-items: center;width: 100%;border-bottom: 0.6px solid rgb(96, 96, 117);padding-bottom: 6%;margin-bottom: 6%;">
                        黑胶时光机 | 每周听歌报告
                        <Icon icon="fluent-emoji:musical-note" />
                    </div>
                    <div style="color: rgb(185, 186, 188);font-size: 0.8rem;">黑胶VIP学生特惠，仅需 ¥ 5/ 月!</div>
                </div>
            </div>
            <component :is="LeftPopupCompOne" style="margin-bottom: 8%;"></component>
            <div style="width: 100%; display: flex;flex-direction: column;margin-bottom: 8%;">
                <!-- <div style="border-color: white;width: 100%;background-color: white; border-radius: 1rem;padding-top: 3%;padding-bottom: 3%;display: flex;flex-direction: column;justify-content: center;align-items: center;"> -->
                <component :is="LeftPopupCompTopRoundCorner" style="">
                    <template #icon>
                        <Icon icon="lets-icons:message-light"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 1%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        <div style="padding-right: 52%;">我的消息</div>
                    </template>
                </component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr3" style="">
                    <template #icon>
                        <Icon :icon="item.icon" style="width:1.2rem; height:1.2rem;margin-left: 2%;margin-right: 9%;" />
                    </template>
                    <template #title>{{ item.title }}</template>
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">
                    <template #icon>
                        <Icon icon="hugeicons:bulb"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 7%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        创作者中心
                    </template>
                </component>
                <!-- </div> -->
            </div>
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">
                    <template #icon>
                        <Icon icon="streamline:hexagram"
                            style="width: 1rem;height: 1rem;margin-left: 2.6%;margin-right: 10%;" />
                    </template>
                    <template #title>
                        趣测
                    </template>
                </component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr5" style="">
                    <template #icon>
                        <Icon :icon="item.icon" style="width:1.2rem; height:1.2rem;margin-left: 2%;margin-right: 9%;" />
                    </template>
                    <template #title>{{ item.title }}</template>
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">
                    <template #icon>
                        <Icon icon="icon-park-outline:signal-strength"
                            style="width: 1rem;height: 1rem;margin-left: 8.6%;margin-right: 9.2%;" />
                    </template>
                    <template #title>
                        免流量听歌
                    </template>
                </component>
            </div>

            <!--  -->
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">
                    <template #icon>
                        <Icon icon="eos-icons:rotating-gear"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 1%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        设置
                    </template>
                </component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr6Top" style="">
                    <template #icon>
                        <Icon :icon="item.icon" style="width:1.2rem; height:1.2rem;margin-left: 2%;margin-right: 9%;" />
                    </template>
                    <template #title>{{ item.title }}</template>
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">
                    <template #icon>
                        <Icon icon="mdi:alarm-clock"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 7%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        音乐闹钟
                    </template>
                </component>
            </div>
            <!--  -->
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">
                    <template #icon>
                        <Icon icon="ep:service" style="width: 1.4rem;height: 1.4rem;margin-left: 1%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        我的客服
                    </template>
                </component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr6Bottom" style="">
                    <template #icon>
                        <Icon :icon="item.icon" style="width:1.2rem; height:1.2rem;margin-left: 2%;margin-right: 9%;" />
                    </template>
                    <template #title>
                        {{ item.title }}
                    </template>
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">
                    <template #icon>
                        <Icon icon="mdi:about-circle-outline"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 7%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        关于
                    </template>
                </component>
            </div>
            <!--  -->
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 2rem;">
                <component :is="LeftPopupCompTopRoundCorner" style="">
                    <template #icon>
                        <Icon icon="marketeq:exchange"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 1%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        切换账号
                    </template>
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">
                    <template #icon>
                        <Icon icon="uil:sign-out-alt"
                            style="width: 1.4rem;height: 1.4rem;margin-left: 7%;margin-right: 8%;" />
                    </template>
                    <template #title>
                        退出登录/关闭
                    </template>
                </component>
            </div>
        </div>

    </van-popup>
</template>


<style scoped></style>
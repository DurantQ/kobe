<script setup>
import axios from "axios";
import HheaderList from "../view/home/HheaderList.vue";
import HimgSwiper from "../view/home/HimgSwiper.vue";
import HmiddleList from "../view/home/HmiddleList.vue";
import HmusicList from "../view/home/HmusicList.vue";
import HyourSelect from "../view/home/HyourSelect.vue";

import My from '@/view/My/My.vue'

import LeftPopup from './LeftPopup/LeftPopup.vue'
import { onMounted } from 'vue'
import { UseUserStore } from '@/store/UseUserStore.js'
import router from "@/router";
const store = UseUserStore();
onMounted(() => {
    // router.push('/Homepage/My')
    // 获取用户信息
    // console.log('homepage',store);
    console.log('LoginStatus', store.LoginStatus);
    console.log('TopPlaylist', store.TopPlaylist);
})
</script>

<template>
    <component :is="LeftPopup"></component>
    <!-- <button >aaa</button> -->
    <HheaderList></HheaderList>
    <HimgSwiper></HimgSwiper>
    <HmiddleList></HmiddleList>
    <HmusicList></HmusicList>
    <HyourSelect></HyourSelect>
    <div style="width: 100%; height: 7.5vh;z-index: 99;">
        <van-tabbar v-model="active" active-color="#eb4755">
            <van-tabbar-item replace to="/" icon="music-o">发现</van-tabbar-item>
            <van-tabbar-item replace to="/BlogsPage" icon="bulb-o">播客</van-tabbar-item>
            <van-tabbar-item replace to="/Homepage/My" icon="service-o">我的</van-tabbar-item>
            <van-tabbar-item replace to="/AttentionPage" icon="friends-o">关注</van-tabbar-item>
            <van-tabbar-item replace to="/CommunityPage" icon="chat-o">社区</van-tabbar-item>
        </van-tabbar>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>

<script setup>
import HheaderList from "../view/home/HheaderList.vue";
import HimgSwiper from "../view/home/HimgSwiper.vue";
import HmiddleList from "../view/home/HmiddleList.vue";
import HmusicList from "../view/home/HmusicList.vue";
import HyourSelect from "../view/home/HyourSelect.vue";
import LeftPopup from './LeftPopup/LeftPopup.vue'

import { useAlertsStore } from '../store'
</script>

<template>
    <HheaderList></HheaderList>
    <HimgSwiper></HimgSwiper>
    <HmiddleList></HmiddleList>
    <HmusicList></HmusicList>
    <HyourSelect></HyourSelect>
    <div style="width: 100%; height: 7.5vh;z-index: 99;">
        <van-tabbar v-model="active" active-color="#eb4755">
            <van-tabbar-item replace to="/" icon="music-o">发现</van-tabbar-item>
            <van-tabbar-item replace to="/BlogsPage" icon="bulb-o">播客</van-tabbar-item>
            <van-tabbar-item replace to="/MyPage" icon="service-o">我的</van-tabbar-item>
            <van-tabbar-item replace to="/AttentionPage" icon="friends-o">关注</van-tabbar-item>
            <van-tabbar-item replace to="/CommunityPage" icon="chat-o">社区</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style scoped></style>

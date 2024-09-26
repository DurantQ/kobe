<script setup>
import { ref } from 'vue';
import { HpRecommendSongs } from "../../api/index";
const PageSongs = ref([]);
const PageSongs1 = ref([]);
HpRecommendSongs()
    .then((res) => {
        console.log(res.data.data.dailySongs);
        PageSongs.value = res.data.data.dailySongs;
        for (let i = 0; i < PageSongs.value.length; i += 3) {
            PageSongs1.value.push(PageSongs.value.slice(i, i + 3));
        };
        console.log(PageSongs1.value);
    });
</script>

<template>
    <header>
        <div class="hybar">
            <div>
                <van-icon name="replay" size="20" color="#3e4659" />
                <span class="text">专属你的"情绪"精选</span>
                <van-button round type="success" size="mini" color="#ebedf1">
                    <van-icon name="play" size="10" color="#3d4485" /><span class="play">播放</span>
                </van-button>
            </div>
            <van-icon class="ellipsis" name="ellipsis" color="gray" />
        </div>
        <div class="songs">
            <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <p v-for="(item, index) in PageSongs1.length" :key="item.name" class="scrollbar-demo-item">
                    <div class="here-list" v-for="(items) in PageSongs1[index]" :key="items.name">
                        <img :src="items.al.picUrl" alt="">
                        <div class="list-text">
                            <span class="list-name">{{ items.name }}</span>
                            <span class="list-reason">
                                <span :class="{
                                    'list-hot': items.reason == null ? false : true
                                }">
                                    {{ items.reason }}
                                </span>
                                <span class="list-arname">{{ items.ar[0].name }}</span>
                            </span>
                        </div>

                    </div>
                    </p>
                </div>
            </el-scrollbar>
        </div>
    </header>
</template>

<style scoped>
.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    width: 75vw;
    margin: 10px;
}

header {
    margin: auto;
    margin-top: 3vw;
    width: 89.34vw;
}

.hybar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hybar div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3e4659;
    font-size: 15px;
    font-weight: 600;
}

.text {
    margin: 0 5px 0 5px;
}

.play {
    color: #3e4659;
}

.ellipsis {
    transform: rotate(90deg);
}

.here-list {
    display: flex;
    align-items: center;
    margin: 2.5vw 0 2.5vw 0;
}

img {
    width: 15vw;
    height: 8.4355vh;
    border-radius: 1vw;
    object-fit: cover;
}

.list-text {
    display: flex;
    flex-direction: column;
    margin-left: 3vw;
}

.list-name {
    color: #3e4659;
    font-weight: 550;
}

.list-hot {
    display: inline-block;
    color: #eb4d44;
    width: 17vw;
    height: 2.5vh;
    text-align: center;
    line-height: 2.5vh;
    font-size: 10px;
    font-weight: 550;
    border-radius: 1vw;
    background-color: #f5e7e9;
}

.list-arname {
    color: #3e4659;
    font-size: 13px;
    font-weight: 500;
}
</style>

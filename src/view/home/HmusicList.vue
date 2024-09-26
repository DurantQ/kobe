<script setup>
import { ref } from 'vue';
import { HpRecommend } from "../../api/index";
const PageRcd = ref([]);
HpRecommend()
    .then((res) => {
        console.log(res.data.recommend);
        PageRcd.value = res.data.recommend
    });
</script>

<template>
    <header>
        <div class="bar">
            <div>
                <span>推荐歌单</span>
                <van-icon name="arrow" color="rgb(100, 100, 100)" />
            </div>
            <van-icon class="ellipsis" name="ellipsis" color="gray" />
        </div>
        <div class="section">
            <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <p class="scrollbar-demo-item" v-for="item in PageRcd" :key="item">
                        <img :src="item.picUrl" />
                        <span>{{ item.name }}</span>
                    </p>
                </div>
            </el-scrollbar>
        </div>
    </header>
</template>

<style scoped>
header {
    margin: auto;
    margin-top: 3vw;
    width: 89.34vw;
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bar span {
    color: rgb(100, 100, 100);
    font-size: 15px;
    font-weight: 600;
}

.ellipsis {
    transform: rotate(90deg);
}

.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    width: 37.5vw;
    margin: 10px;
}

img {
    width: 30vw;
    height: 16.8735vh;
    border-radius: 2vw;
    box-shadow: 0 -5px 2px #cbcbcb;
    object-fit: cover;
}

.scrollbar-demo-item span {
    color: #3e4659;
    font-size: 12px;
    font-weight: 550;
}
</style>

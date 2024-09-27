<script setup>
import { ref } from 'vue';
import { HpDragon } from "../../api/index";
const PageDragon1 = ref([]);
const PageDragon2 = ref([]);
HpDragon()
    .then((res) => {
        console.log(res.data.data);
        PageDragon1.value = (res.data.data).slice(0, 5);
        PageDragon2.value = (res.data.data).filter((_, index) => index > 4 && index < 11);
    });
const day = ref(new Date().getDate());
</script>
<template>
    <header>
        <div class="showday">{{ day }}</div>
        <van-swipe class="my-swipe" :loop="false" :show-indicators="false">
            <van-swipe-item>
                <div class="section-list" v-for="item in PageDragon1" :key="item.name"
                    :style="`width: ${PageDragon1.length * 20}vw;`">
                    <img :src="item.iconUrl" alt="" />
                    <span>{{ item.name }}</span>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="section-list" v-for="item in PageDragon2" :key="item.name"
                    :style="`width: ${PageDragon2.length * 20}vw;`">
                    <img :src="item.iconUrl" alt="" />
                    <span>{{ item.name }}</span>
                </div>
            </van-swipe-item>
        </van-swipe>
    </header>
</template>

<style scoped>
header {
    margin: auto;
    width: 89.34vw;
    position: relative;
}
.showday{
    position: absolute;
    top: 30%;
    left: 8%;
    z-index: 66;
    color: white;
    font-size: 12px;
}
.my-swipe .van-swipe-item {
    display: flex;
    justify-content: space-around;
    width: 18vw;
}

.section-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
}

.section-list img {
    width: 11.5vw;
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='filter'><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter></svg>#filter");
}

.section-list span {
    color: #676c6c;
    font-size: 2.5vw;
}
</style>

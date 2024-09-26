<script setup>
import { ref } from 'vue';
import { HpBanner } from "../../api/index";
const PageBanner = ref([]);
HpBanner()
  .then((res) => {
    console.log(res.data.banners);
    PageBanner.value = (res.data.banners).filter((item) => {
      return item.typeTitle !== '广告'
    });
  });
</script>

<template>
  <header>
    <van-swipe :autoplay="3000" lazy-render indicator-color="white">
      <van-swipe-item v-for="item in PageBanner" :key="item.imageUrl">
        <img :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </header>
</template>

<style scoped>
header {
  margin: auto;
  width: 89.34vw;
}

img {
  width: 89.34vw;
  border-radius: 3vw;
  object-fit: cover;
}

::v-deep(.van-swipe) {
  height: 18.6vh;
  border-radius: 3vw;
}

::v-deep(.van-swipe__indicators) {
  transform: translate(-180%);
  top: 88%;
  /* 深度修改 */
}
</style>

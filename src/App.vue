<script setup>
// import HomePage from "./components/HomePage.vue";
// import LeftPopup from './components/LeftPopup/LeftPopup.vue';
// import login from './test/login.vue'
import My from './view/My/My.vue';
</script>

<template>
  <div id="appvip">
    <!-- <login></login> -->
    <!-- <LeftPopup></LeftPopup> -->
    <router-view></router-view>
    <!-- <My></My> -->
  </div>
</template>

<style scoped>
#appvip {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom left, #f5e7f2, #ffffff, #ffffff, #ffffff);
}
</style>

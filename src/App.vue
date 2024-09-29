<script setup>
// import HomePage from "./components/HomePage.vue";
import LeftPopup from './components/LeftPopup/LeftPopup.vue';
</script>

<template>
  <div id="appvip">
    <LeftPopup></LeftPopup>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style scoped>
#appvip {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom left, #f5e7f2, #ffffff, #ffffff, #ffffff);
}
</style>

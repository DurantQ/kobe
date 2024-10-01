<script setup>
import { useAlertsStore } from './store'
let store = useAlertsStore()
store.userId = 'store.userId'
store.userName = 'store.userName'

</script>

<template>
    <!-- <button @click="btn">发请求</button> -->
    <RouterLink to="/home">跳转到home</RouterLink>
</template>
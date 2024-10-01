<script setup>
import {http} from './index'
const btn = () => {
    http()
}
</script>


<template>
    <button @click="btn">发请求</button>
    <RouterLink to="/home">跳转到home</RouterLink>
</template>
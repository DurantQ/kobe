<script setup>
import { useAlertsStore } from './store'
let store = useAlertsStore()
let userId = store.userId
let userName = store.userName

console.log(store);
</script>


<template>
    我是home
    userId --- {{ userId }}
    <br>
    userName --- {{ userName }}
</template>
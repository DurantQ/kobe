import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'

export const useAlertsStore = defineStore('counter', () => {
    const LoginStatus = ref(false)        // ref state
    const doubleCount = computed(() => { })     // computed getters
    function increment() {      // function actions

    }
    // const appProvided = inject('appProvided')        // inject

    // ...
    return { LoginStatus, doubleCount, increment }
})


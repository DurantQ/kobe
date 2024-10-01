import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'

export const useAlertsStore = defineStore('counter', () => {
    let showLeft = ref(false);
    let LoginStatus = ref(false)        // ref state
    let userName = ref('游客');
    let userPicture = ref('');
    let userCookie = ref('')


    const doubleCount = computed(() => { })     // computed getters
    function increment() {      // function actions

    }
    // const appProvided = inject('appProvided')        // inject

    // ...
    return { showLeft, LoginStatus, userName, userPicture, userCookie, doubleCount, increment }
}, {
    persist: {
        storage: localStorage,
        paths: ['LoginStatus', 'userName', 'userPicture', 'userCookie']
    }
})


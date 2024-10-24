import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'

export const UsePopupStore = defineStore('UsePopupStore', () => {
    // 侧边栏
    let showLeft = ref(false);
    // 底部弹出
    let showBottom = ref(false)
    return { showLeft, showBottom }
}, {
    persist: {
        storage: localStorage,
        paths: ['showLeft', 'showBottom']
    }
})


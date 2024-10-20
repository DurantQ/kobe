import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'

export const useAlertsStore = defineStore('counter', () => {
    // 侧边栏
    let showLeft = ref(false);
    // 用户名
    let nickname = ref('游客');     // 
    // uid
    let uid = ref('')
    // 用户头像
    let avatarUrl = ref('');    // 
    // 用户背景
    let backgroundUrl = ref('')
    // 用户cookie
    let userCookie = ref('') // 
    // 用户城市
    let city = ref('')
    // 生日
    let birthday = ref('')
    // 创建时间
    let createTime = ref('')
    // const ExportUserStore = [showLeft, LoginStatus, userName, uid, avatarUrl, backgroundUrl, userCookie, city, birthday, createTime]
    // ExportUserStore.forEach(item => {
    //     return item
    // })
    // 初始化
    // const remove = 
    return { showLeft, nickname, uid, avatarUrl, backgroundUrl, userCookie, city, birthday, createTime }
}, {
    persist: {
        storage: localStorage,
        paths: ['showLeft', 'nickname', 'uid', 'avatarUrl', 'backgroundUrl', 'userCookie', 'city', 'birthday', 'createTime']
    }
})


import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'

export const UseUserStore = defineStore('UseUserStore', () => {
    // 用户cookie
    let userCookie = ref('') // 
    // 用户状态
    let LoginStatus = ref('')
    // 用户歌单
    let TopPlaylist = ref('')
    // 用户关注列表
    let UserFollows = ref('')
    // 用户粉丝列表
    let UserFolloweds = ref('')
    // 用户等级
    let UserLevel = ref('')
    return { userCookie, LoginStatus, TopPlaylist, UserFollows, UserFolloweds, UserLevel }
}, {
    persist: {
        storage: localStorage,
        paths: ['userCookie', 'LoginStatus', 'TopPlaylist', 'UserFolloweds', 'UserLevel']
    }
})


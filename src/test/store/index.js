import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
export const useAlertsStore = defineStore('counter', () => {
    let userId = ref('')
    let userName = ref('')
    const setUserIdAndUserName = (Id,Name)=>{
        userId.value = Id
        userName.value = Name
        console.log(userId.value,userName.value);
    }
    return { userId, userName,setUserIdAndUserName }
},{
    persist:{
        storage:localStorage,
        paths:['userId','userName']
    }
})


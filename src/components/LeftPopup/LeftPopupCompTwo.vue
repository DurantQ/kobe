<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
const image = ref([
    {
        icon: String,
        title: String
    }
])
</script>

<template>
    <div style="width: 100%;height: 6%;display: flex;align-items: center;background-color: #fff;">

        <div
            style="display: flex;width: 96%;align-items: center;justify-content:space-between;border-bottom: 0.1rem solid rgb(246, 248, 251);margin-left: 4%;margin-top: 3%;padding-bottom: 3%;">
            <div style="display: flex;width: 90%;align-items: center;">
                <!-- <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    style="margin-left: 1%;margin-right: 8%;">
                </van-image> -->
                <slot name="icon" >
                    
                </slot>
                <slot name="title"></slot>
            </div>
            <div style="display: flex;justify-content: center;align-items: center;margin-right: 4%;">
                <slot></slot>
                <Icon icon="material-symbols-light:keyboard-arrow-right"
                    style="width: 1.4rem;height: 1.4rem;margin-right: 4%;" />
            </div>

        </div>
    </div>
</template>
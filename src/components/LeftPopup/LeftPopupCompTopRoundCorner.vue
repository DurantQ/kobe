<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div style="width: 100%;height: 6%;display: flex;align-items: center;background-color: #fff;border-radius: 0.4rem 0.4rem 0 0 ;">
        <div
            style="display: flex;width: 96%;align-items: center;justify-content:space-between;border-radius: 0.4rem 0.4rem 0 0 ;border-bottom: 0.1rem solid rgb(246, 248, 251);margin-left: 4%;">
            <div style="display: flex;width: 70%;align-items: center;">
                <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    style="margin-left: 1%;margin-right: 8%;">
                </van-image>
                <slot>aaa</slot>
            </div>
            <Icon icon="material-symbols-light:keyboard-arrow-right"
                style="width: 1.4rem;height: 1.4rem;margin-right: 4%;" />
        </div>
    </div>
</template>
<script setup>

</script>
<!-- border-radius: 0.6rem; -->
<template>
    <div
        style="width: 100%;height: 6%;display: flex;align-items: center;background-color: #fff;justify-content: center;border-radius: 0.4rem;">
        <div style="display: flex;width: 70%;align-items: center;">
            <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                style="margin-right: 6%;margin-left: 6%;">
            </van-image>
            <slot>免费听VIP歌曲</slot>
        </div>
        <div
            style="color:red;background-color: #fff;border-radius: 1rem;font-size: 0.8rem;padding:1% 2.6%;font-weight: 500;align-items: center;display: flex;border: 1px solid red;margin-right: 5%;">
            一键开启</div>
    </div>
</template>
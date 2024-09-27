<script setup>
</script>

<template>
    <div>
        <header>
            <van-icon name="wap-nav" size="6vw" badge="99+" />
            <div class="search">
                <van-icon name="search" size="6vw" />
                <input type="text" placeholder="请输入你想找的歌">
                <van-icon name="scan" size="6vw" />
            </div>
            <van-icon name="service-o" size="6vw" />
        </header>
    </div>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 9vh;
}

input {
    border: 0;
    outline: none;
    background-color: transparent;
}
input::placeholder {
    color: #81839d;
    /* 设置placeholder文本的颜色 */
    font-style: italic;
    /* 设置placeholder文本的字体样式为斜体 */
    font-weight: 400;
    /* 设置placeholder文本的字体样式为加粗 */
}

header .search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 72vw;
    background: linear-gradient(to bottom left, #d3d4f5, #ead5ea);
    border-radius: 5vw;
    border: 2px solid #d9caf6;
}
</style>

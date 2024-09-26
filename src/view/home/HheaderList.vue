<script setup>
</script>

<template>
    <div>
        <header>
            <van-icon name="wap-nav" size="6vw" badge="99+" />
            <div class="search">
                <van-icon name="search" size="6vw" />
                <input type="text" placeholder="请输入你想查找的歌曲">
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

header .search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 72vw;
    border-radius: 5vw;
    border: 2px solid #d9caf6;
}
</style>

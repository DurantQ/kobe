<script setup>
import { UsePopupStore } from '@/store/UsePopupStore';
import { ref, onMounted } from 'vue'
const PopupStore = UsePopupStore()
console.log(PopupStore.showBottom);
const checked = ref(0)
const onSubmit = (values) => {
    console.log('submit', values);
};
const formData = ref(null)


</script>

<template>
    <van-popup v-model:show="PopupStore.showBottom" position="bottom"
        :style="{ height: '50%', backgroundColor: 'rgb(45, 45, 57)' }">
        <van-form @submit="onSubmit" ref="formData">
            <div
                style="display: flex;justify-content:space-between;align-items: center;color: white;margin-top: 6%;margin-bottom: 8%;">
                <div style="margin-left: 4%;font-size: 1.2rem;" @click="PopupStore.showBottom = false">取消</div>
                <van-button style="margin-right: 4%;color: rgb(113, 113, 121);font-size: 1.2rem;"
                    native-type="submit">完成</van-button>
            </div>
            <van-tabs active="1" style="width: 100%;" line-width="0" line-height="0"
                title-inactive-color="rgb(152, 152, 162)" title-active-color="#fff" background="rgb(45, 45, 57)">
                <van-tab style="color: red;" title="音乐歌单" title-style="fontSize:1.1rem;marginBottom:1rem">

                    <van-cell-group inset style="margin-bottom: 10%;">
                        <van-field v-model="value" label="" placeholder="输入新建歌单标题" name="musicTitle" maxlength="40"
                            show-word-limit />
                    </van-cell-group>
                    <van-radio-group v-model="checked" shape="dot" name="radio" checked-color="">
                        <van-radio name="1" style="margin-bottom: 6%;margin-left: 4%;">
                            <div style="color: rgb(113, 113, 121);">设置为共享歌单（和好友一起管理）</div>
                        </van-radio>
                        <van-radio name="2" style="margin-bottom: 8%;margin-left: 4%;">
                            <div style="color: rgb(113, 113, 121);">设置为隐私歌单</div>
                        </van-radio>
                    </van-radio-group>
                </van-tab>
                <van-tab style="color: red;" title="视频歌单" title-style="fontSize:1.1rem;marginBottom:1rem">视频歌单</van-tab>
            </van-tabs>
        </van-form>
    </van-popup>
</template>

<style scoped></style>
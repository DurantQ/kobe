<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import LeftPopupCompOne from './LeftPopupCompOne.vue'
import LeftPopupCompTwo from './LeftPopupCompTwo.vue';
import LeftPopupCompTopRoundCorner from './LeftPopupCompTopRoundCorner.vue'
import LeftPopupCompBottomRoundCorner from './LeftPopupCompBottomRoundCorner.vue'
let showLeft = ref(true)
const btn = () => {
    showLeft.value = !showLeft.value
}
let tempArr3 = [0, 1, 2]
let tempArr5 = [0, 1, 2, 3, 4]
let tempArr6 = [0, 1, 2, 3, 4, 5]
</script>


<template>
    <van-popup v-model:show="showLeft" position="left" :style="{ width: '85%', height: '100%' }"
        style="background-color: rgb(246, 248, 251);">
        <div style="width: 90%;height: 100%;margin-left: 5%;margin-right: 5%;">
            <div style="display: flex;align-items:center; justify-content:space-between;background-color: rgb(246, 248, 251);margin-bottom: 8%;margin-top: 8%;">
                <div style="display: flex;align-items:center;width: 90%;">
                    <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                        style="margin-right: 4%;">
                    </van-image>
                    <div>哈基米</div>
                    <Icon icon="material-symbols-light:keyboard-arrow-right" style="width: 1.4rem;height: 1.4rem;" />
                </div>
                <Icon icon="teenyicons:scan-solid" style="width: 1rem;height: 1rem;" />
            </div>
            <div
                style="width: 100%;background:linear-gradient(45deg, rgb(42, 42, 43), rgb(80, 82, 87),rgb(55, 56, 61));height: 18%; border-radius: 1rem;display: flex;justify-content:center;align-items:center;margin-bottom: 8%;">
                <div style="display: flex;width: 90%;height: 80%;flex-direction: column;justify-content:center;">
                    <div style="display: flex; justify-content:space-between;width: 100%;height: 26%;margin-bottom: 2%;">
                        <div style="font-weight: 700;color: white;font-size: 1rem;">会员已过期</div>
                        <div
                            style="color:red;background-color: #fff;border-radius: 1rem;font-size: 0.8rem;padding-left: 4%;padding-right: 4%;font-weight: 500;align-items: center;display: flex;">
                            ¥4.8续费</div>
                    </div>
                    <div
                        style="color: rgb(141, 142, 143);font-size: 0.8rem;display: flex;align-items: center;width: 100%;border-bottom: 0.6px solid rgb(96, 96, 117);padding-bottom: 6%;margin-bottom: 6%;">
                        黑胶时光机 | 每周听歌报告
                        <Icon icon="fluent-emoji:musical-note" />
                    </div>
                    <div style="color: rgb(141, 142, 143);font-size: 0.8rem;">黑胶VIP学生特惠，仅需¥5/月!</div>
                </div>
            </div>
            <component :is="LeftPopupCompOne" style="margin-bottom: 8%;"></component>
            <div style="width: 100%; display: flex;flex-direction: column;margin-bottom: 8%;">
                <!-- <div style="border-color: white;width: 100%;background-color: white; border-radius: 1rem;padding-top: 3%;padding-bottom: 3%;display: flex;flex-direction: column;justify-content: center;align-items: center;"> -->
                <component :is="LeftPopupCompTopRoundCorner" style="">aaa</component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr3" style="">%d%d
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">bbb</component>
                <!-- </div> -->
            </div>
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">aaa</component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr5" style="">%d%d
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">bbb</component>
            </div>
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">aaa</component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr5" style="">%d%d
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">bbb</component>
            </div>
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 8%;">
                <component :is="LeftPopupCompTopRoundCorner" style="">aaa</component>
                <component :is="LeftPopupCompTwo" v-for="(item, index) in tempArr5" style="">%d%d
                </component>
                <component :is="LeftPopupCompBottomRoundCorner">bbb</component>
            </div>
            <div style="width: 100%;display: flex;flex-direction: column;margin-bottom: 2rem;">
                <component :is="LeftPopupCompTopRoundCorner" style="">aaa</component>
                <component :is="LeftPopupCompBottomRoundCorner">bbb</component>
            </div>
        </div>

    </van-popup>
    <button @click="btn">
        点我
    </button>
</template>


<style scoped></style>
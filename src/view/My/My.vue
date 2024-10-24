<script setup>
import { onMounted, ref } from 'vue';
import { TopPlaylist } from '@/api'
import LeftPopup from '@/components/LeftPopup/LeftPopup.vue'
import MyMusicRecent from '@/components/Mytab/MyMusicRecent.vue'
import BottomPopup from '@/components/BottomPopup/BottomPopup.vue'
import empty from '@/components/Mytab/empty.vue'
import { UseUserStore } from '@/store/UseUserStore.js'
import { UsePopupStore } from '@/store/UsePopupStore';
import router from "@/router";
import { Icon } from '@iconify/vue'
import axios from 'axios';
const UserStore = UseUserStore();
const PopupStore = UsePopupStore()
onMounted(async () => {
    console.log(UserStore);

    // console.log(await TopPlaylist());
})

const btn = () => {
    UserStore.showLeft = !UserStore.showLeft
}
const addPopup = () => {
    console.log('ppp');
    
    PopupStore.$patch(state => {
        state.showBottom = !state.showBottom
    })
}
const onChange = () => {

}
console.log('LoginStatus', UserStore.LoginStatus);
console.log('TopPlaylist', UserStore.TopPlaylist.data.playlist[0].coverImgUrl);
const showBottom = ref('true')
</script>

<template>
    <component :is="LeftPopup"></component>
    <component :is="BottomPopup"></component>
    <div style="width:100%;height:100%">
        <div
            :style="{ backgroundImage: `url(${UserStore.LoginStatus.profile.backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', }">
            <div style="display:flex;align-items:center;margin-bottom:14%;justify-content:space-between;padding-top: 4%;">
                <van-icon name="wap-nav" size="6vw" badge="" @click="UserStore.LeftPopup = false" color="rgb(255, 241, 234)"
                    style="margin-left: 3%;" />
                <div
                    style="display:flex;align-items:center;color: rgba(255, 255, 255,0.4);align-items: center;margin-left: 9vw;">
                    <Icon icon="material-symbols-light:add" style="width: 1.4rem;height:  1.4rem;" />
                    <div style="font-size: 0.8rem;">添加状态</div>
                </div>
                <div
                    style="display: flex;align-items: center;justify-content: space-between;margin-right: 3%;color: white;width: 18%;">
                    <Icon icon="ph:magnifying-glass" style="width: 1.6rem;height: 1.6rem;margin-right: 0;" />
                    <Icon icon="flowbite:dots-vertical-outline" style="width: 1.6rem;height: 1.6rem;" />
                </div>
            </div>
            <div style="display:flex;justify-content:center;margin-bottom: 6%;">
                <van-image :src="UserStore.LoginStatus.profile.avatarUrl" round width="5rem" height="5rem"></van-image>
            </div>
            <div style="display:flex;justify-content:center;align-items:center;margin-bottom: 2%;">
                <div style="color: rgba(255,255,255,0.8);margin-right: 2%;font-size: 1.2rem;">{{
                    UserStore.LoginStatus.profile.nickname }}</div>
                <div
                    style="display:flex;width:22%;height:40%;background-color:rgb(183, 180, 181);border-radius: 10rem;align-items: center;font-size: 0.6rem;justify-content: center;position: relative;">
                    <div
                        style="position: absolute;transform: translate(-50%,-50%);left: 28%;top: 50%;width: 0.4rem;height: 0.4rem;background-color: rgb(226, 97, 96);border-radius: 50%;">
                        <Icon icon="fluent:cd-16-filled"
                            style="width: 1.6rem;height: 1.6rem;position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;color: rgb(92, 80, 82);" />
                    </div>
                    <div style="color: white;font-weight: 600;margin-right: 4%;margin-left: 30%;">P</div>
                    <div style="color: white;">续费</div>
                    <Icon icon="material-symbols-light:keyboard-arrow-right" color="white"
                        style="width: 1rem;height: 1rem;" />
                </div>
            </div>
            <div
                style="display: flex;justify-content: center;align-items: center;font-size: 0.8rem;color: rgba(255,255,255,0.4);margin-bottom: 3%;">
                <div style="display: flex;align-items: center;margin-right: 2%;">
                    <Icon icon="solar:medal-star-square-bold" style="margin-right: 1px;" />
                    <div>%d枚勋章</div>
                </div>
                <div style="margin-right: 2%;">|</div>
                <div>%s %s</div>
                <div>・</div>
                <div>村龄%d年</div>
            </div>
            <div
                style="display: flex;align-items: center;justify-content: center;color: rgb(255,255,255,0.4);margin-bottom: 6%;">
                <div style="display: flex;align-items: center;justify-content: center;margin-right: 3%;">
                    <div style="color: rgba(255,255,255,0.8);">%d</div>
                    <div style="font-size: 0.8rem;">关注</div>
                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-right: 3%;">
                    <div style="color: rgba(255,255,255,0.8);">%d</div>
                    <div style="font-size: 0.8rem;">关注</div>
                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-right: 3%;">
                    <div style="color: rgba(255,255,255,0.8);">%d</div>
                    <div style="font-size: 0.8rem;">关注</div>
                </div>
                <div style="display: flex;align-items: center;justify-content: center;margin-right: 3%;">
                    <div style="color: rgba(255,255,255,0.8);">%d</div>
                    <div style="font-size: 0.8rem;">关注</div>
                </div>
            </div>
            <div
                style="display: flex;align-items: center;justify-content: center;font-size: 0.8rem;padding-bottom: 4%;color: rgba(240, 248, 255, 0.584)">
                <div
                    style="width: ;height: 100%;background-color: #a79c9c6d;display: flex;justify-content:space-between;align-items: center;margin-right: 2.6%;border-radius: 10%;padding:2.4% 3%">
                    <Icon icon="fluent-mdl2:recent" style="color: rgba(255,255,255,0.8);width: 1.2rem;height: 1.2em;" />
                    <div>最近</div>
                </div>
                <div
                    style="width: ;height: 100%;background-color: #a79c9c6d;display: flex;justify-content: center;align-items: center;margin-right: 2.6%;border-radius: 10%;padding:2% 3%;">
                    <Icon icon="mingcute:download-fill" style="color: rgba(255,255,255,0.8);width: 1.2rem;height: 1.2em;" />
                    <div>本地</div>
                </div>
                <div
                    style="width: ;height: 100%;background-color: #a79c9c6d;display: flex;justify-content: center;align-items: center;margin-right: 2.6%;border-radius: 10%;padding:2% 3%;">
                    <Icon icon="gridicons:cloud-upload" style="color: rgba(255,255,255,0.8);width: 1.2rem;height: 1.2em;" />
                    <div>云盘</div>
                </div>
                <div
                    style="width: ;height: 100%;background-color: #a79c9c6d;display: flex;justify-content: center;align-items: center;margin-right: 2.6%;border-radius: 10%;padding:2% 3%;">
                    <Icon icon="hugeicons:dress-06" style="color: rgba(255,255,255,0.8);width: 1.2rem;height: 1.2em;" />
                    <div>装扮</div>
                </div>
                <div
                    style="width: ;height: 100%;background-color: #a79c9c6d;display: flex;justify-content: center;align-items: center;border-radius: 10%;padding:2% 3%;">
                    <div>
                        <Icon icon="icon-park-solid:more-app"
                            style="color: rgba(255,255,255,0.8);width: 1.2rem;height: 1.2em;" />
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: rgb(27, 27, 37);">
            <van-tabs active="1" @change="onChange" title-inactive-color="rgb(127, 128, 131)" title-active-color="#fff"
                background="rgb(27, 27, 37)" color="red">
                <van-tab title="音乐">
                    <van-tabs active="1" bind:change="onChange" style="width: 26%;" line-width="0" line-height="0"
                        title-inactive-color="rgb(127, 128, 131)" title-active-color="#fff" background="rgb(27, 27, 37)">
                        <van-tab title="近期" style="width: 100vw">
                            <component :is="MyMusicRecent" style="">
                                <template #icon>
                                    <div
                                        style="background-color:rgb(37, 37, 45);width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <!-- <Icon icon="ri:heart-fill" style="color: white;width: 46%;height: 46%;" /> -->
                                        <van-image :src="UserStore.TopPlaylist.data.playlist[0].coverImgUrl"
                                            radius="10%"></van-image>
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">我喜欢的音乐</div>
                                </template>
                                <template #data>
                                    <div style="color: rgb(159, 159, 169);font-size: 0.8rem;">%d首・%d次播放</div>
                                </template>
                                <template #module>
                                    <div
                                        style="width: 26vw;height: 8vw;background-color: rgb(37, 37, 45);border-radius: 10rem;color: rgb(206, 206, 216);font-size: 0.8rem;align-items: center;justify-content: center;display: flex;">
                                        <Icon icon="material-symbols-light:ecg-heart-outline" width="1.2rem" height="1.2rem"
                                            style="margin-right: 2%;" />
                                        心动模式

                                    </div>
                                </template>
                            </component>
                            <component :is="MyMusicRecent">
                                <template #icon>
                                    <div
                                        style="background:linear-gradient(0deg, rgb(247, 183, 103), rgb(252, 111, 72));width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <Icon icon="arcticons:spotistats"
                                            style="color: rgb(255, 223, 199);width: 46%;height: 46%;" />
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">听歌排行</div>
                                </template>
                                <template #data>
                                    <div style="color: rgb(159, 159, 169);font-size: 0.8rem;">累计听歌%d首</div>
                                </template>
                                <template #module>
                                    <!-- <Icon icon="mi:options-vertical" /> -->
                                    <Icon icon="teenyicons:more-vertical-solid" style="color: rgb(104, 104, 114);" />
                                </template>
                            </component>
                            <component :is="MyMusicRecent" @click="addPopup">
                                <template #icon>
                                    <div
                                        style="background-color:rgb(49, 49, 59);width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <Icon icon="weui:add-outlined"
                                            style="color: rgb(129, 129, 136);width: 46%;height: 46%;" />
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">新建歌单</div>
                                </template>
                                <template #data>
                                    <!-- <div style="color: rgb(159, 159, 169);font-size: 0.8rem;"></div> -->
                                </template>
                                <template #module>
                                    <!-- <Icon icon="formkit:reorder" style="color: rgb(104, 104, 114);"/> -->
                                </template>
                            </component>
                        </van-tab>
                        <van-tab title="创建" style="width: 100vw">
                            <component :is="MyMusicRecent" style="">
                                <template #icon>
                                    <div
                                        style="background-color:rgb(37, 37, 45);width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <!-- <Icon icon="ri:heart-fill" style="color: white;width: 46%;height: 46%;" /> -->
                                        <van-image :src="UserStore.TopPlaylist.data.playlist[0].coverImgUrl"
                                            radius="10%"></van-image>
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">我喜欢的音乐</div>
                                </template>
                                <template #data>
                                    <div style="color: rgb(159, 159, 169);font-size: 0.8rem;">%d首・%d次播放</div>
                                </template>
                                <template #module>
                                    <div
                                        style="width: 26vw;height: 8vw;background-color: rgb(37, 37, 45);border-radius: 10rem;color: rgb(206, 206, 216);font-size: 0.8rem;align-items: center;justify-content: center;display: flex;">
                                        <Icon icon="material-symbols-light:ecg-heart-outline" width="1.2rem" height="1.2rem"
                                            style="margin-right: 2%;" />
                                        心动模式
                                    </div>
                                </template>
                            </component>
                            <component :is="MyMusicRecent" @click="addPopup">
                                <template #icon>
                                    <div
                                        style="background-color:rgb(49, 49, 59);width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <Icon icon="weui:add-outlined"
                                            style="color: rgb(129, 129, 136);width: 46%;height: 46%;" />
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">新建歌单</div>
                                </template>
                                <template #data>
                                    <!-- <div style="color: rgb(159, 159, 169);font-size: 0.8rem;"></div> -->
                                </template>
                                <template #module>
                                    <!-- <Icon icon="formkit:reorder" style="color: rgb(104, 104, 114);"/> -->
                                </template>
                            </component>
                        </van-tab>
                    </van-tabs>
                </van-tab>
                <van-tab title="播客">
                    <van-tabs active="1" bind:change="onChange" style="width: 42%;" line-width="0" line-height="0"
                        title-inactive-color="rgb(127, 128, 131)" title-active-color="#fff" background="rgb(27, 27, 37)">
                        <van-tab title="全部" style="width: 100vw">
                            <component :is="MyMusicRecent" @click="addPopup">
                                <template #icon>
                                    <div
                                        style="background-color:rgb(49, 49, 59);width: 20vw;height: 20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;">
                                        <Icon icon="weui:add-outlined"
                                            style="color: rgb(129, 129, 136);width: 46%;height: 46%;" />
                                    </div>
                                </template>
                                <template #title>
                                    <div style="color: white;">添加播客和有声书</div>
                                </template>
                                <template #data>
                                    <!-- <div style="color: rgb(159, 159, 169);font-size: 0.8rem;"></div> -->
                                </template>
                                <template #module>
                                    <!-- <Icon icon="formkit:reorder" style="color: rgb(104, 104, 114);"/> -->
                                </template>
                            </component>
                        </van-tab>
                        <van-tab title="播客" style="width: 100vw">
                            <component :is="empty">
                                <template #NotYet>
                                    <div style="color: rgba(255,255,255,0.6);font-size: 0.8rem;">暂无搜藏播客</div>
                                </template>
                                <template #Found>
                                    <div style="color: rgb(255,255,255,0.8);">发现更多播客</div>
                                </template>
                                <template #icon>
                                    <Icon icon="material-symbols-light:keyboard-arrow-right" color="white" width="1.2rem"
                                        height="2rem" />
                                </template>
                            </component>
                        </van-tab>
                        <van-tab title="有声书" style="width: 100vw;">
                            <component :is="empty">
                                <template #NotYet>
                                    <div style="color: rgba(255,255,255,0.6);font-size: 0.8rem;">暂无收藏有声书</div>
                                </template>
                                <template #Found>
                                    <div style="color:rgba(255,255,255,0.8);">发现更多有声书</div>
                                </template>
                                <template #icon>
                                    <Icon icon="material-symbols-light:keyboard-arrow-right" color="white" width="1.2rem"
                                        height="2rem" />
                                </template>
                            </component>
                        </van-tab>
                    </van-tabs>
                </van-tab>
                <van-tab title="动态">
                    <component :is="empty">
                        <template #NotYet>
                            <Icon icon="mdi-light:music" color="white" width="1.2rem" height="2rem" />
                            <div style="color: rgba(255,255,255,0.6);font-size: 0.8rem;">分享你喜欢的音乐吧</div>
                        </template>
                        <template #Found>
                            <div style="color:rgba(255,255,255,0.8);">去分享</div>
                        </template>
                    </component>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<style scoped></style>
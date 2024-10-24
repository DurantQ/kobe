<script setup>
// <Icon icon="mage:chart" />
// <Icon icon="arcticons:i-love-hue-too" />
</script>

<template>
    <div style="display: flex;margin-bottom: 3%;margin-left: 3%;">
        <!-- <div style="background-color: rgb(37, 37, 45); width: 20vw;height:20vw;display: flex;align-items: center;justify-content: center;border-radius: 0.4rem;margin-left: 4%;">
            
        </div> -->
        <slot name="icon"></slot>
        <div style="display: flex;justify-content: space-between;align-items: center;width: 76vw;">
            <div style="display: flex;flex-direction: column;margin-left: 4%;">
                <div style="margin-bottom: 6%;">
                    <slot name="title"></slot>
                </div>
                <div>
                    <slot name="data"></slot>
                </div>
            </div>
            <div style="margin-right: 4%;">
                <slot name="module"></slot>
            </div>
        </div>

    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div>
        <div style="display: flex;justify-content: center;margin-bottom: 6%;margin-top: 12%;align-items: center;">
            <slot name="NotYet">
                
            </slot>
        </div>
        <div style="display: flex;justify-content: center;">
            <div
                style="display: flex;align-items: center;justify-content: center;padding: 1% 4%;border: 1px solid rgba(255,255,255,0.2);border-radius: 10rem;">
                <slot name="Found">
                    <div style="color: white;">发现更多有声书</div>
                </slot>
                <slot name="icon">
                    <!-- <Icon icon="material-symbols-light:keyboard-arrow-right" color="white" width="1.2rem" height="2rem" /> -->
                </slot>
            </div>
        </div>

    </div>
</template>

<script setup>
import WMenuItem from './WMenuItem.vue';
defineProps({
    options: { type: Object, default: [] },
    id: { type: String, default: '' },
})


</script>

<template>
    <div class="accordion accordion-flush" :id="id">
        <slot>
            <WMenuItem></WMenuItem>
        </slot>
    </div>
</template>

<style lang="scss" scoped></style>

<script setup>
defineProps({
    placeholder: { type: String, default: 'username' },
})

const vmodel = defineModel({ type: String })

</script>

<template>
    <input type="text" class="form-control" :placeholder='placeholder' v-model="vmodel" />
</template>

<style lang="scss" scoped></style>
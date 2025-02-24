<template>
    <button type="button" class="btn w-btn-primary">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.w-btn-primary{
    background-color: $primary-color;
    color: white
}
 
</style>
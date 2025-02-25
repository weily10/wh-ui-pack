<template>
    <button type="button" class="btn">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.w-btn-primary {
    color: white;
    background-color: $primary-color;

    &:hover {
        color: white;
        background-color: $hover-color;
    }
}

.w-btn-outline-primary {
    background-color: white;
    border: 1px solid $primary-color;
}
</style>
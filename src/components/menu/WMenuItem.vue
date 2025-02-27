<script setup>
defineProps({
    target: { type: String, default: 'target' },
    databsparent: { type: String, default: 'menu1' }
})



</script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + target" :aria-controls="target">
                <slot name="buttonSlot"></slot>
            </button>
        </h2>
        <div :id="target" class="accordion-collapse collapse">
            <slot name="accordionBody"> </slot>
        </div>
    </div>
</template>
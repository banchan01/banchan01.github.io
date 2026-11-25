<template>
    <span class="i18n-en">{{ en }}</span><span class="i18n-ko">{{ ko ?? en }}</span>
</template>

<script setup>
// Renders both languages; global CSS hides the one that isn't active.
defineProps({
    en: String,
    ko: String
})
</script>

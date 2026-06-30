<template>
  <div :class="color" class="absolute top-3 right-3 w-10 h-10 rounded-full text-primary-50 hidden xl:flex items-center justify-center transition-all ease-in-out group-hover:-rotate-10">
    <slot />
  </div>
</template>

<script setup lang="ts">
// border-3 border-primary-50
const { color = 'bg-brand-500/60' } = defineProps<{
  color?: string
}>()
</script>

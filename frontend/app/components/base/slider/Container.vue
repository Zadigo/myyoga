<template>
  <div class="p-10 rounded-3xl mx-auto space-y-5">
    <div class="text-center space-y-2">
      <p class="font-bold">
        <slot name="subtitle" />
      </p>
      
      <h2 class="text-4xl font-bold">
        <slot name="title" />
      </h2>
      
      <p class="max-w-4xl mx-auto">
        <slot name="description" />
      </p>
    </div>

    <div class="max-w-400 overflow-hidden">
      <div id="scrollable-content" ref="scrollableEl" class="flex space-x-5 overflow-x-scroll p-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { autoScroll = true } = defineProps<{
  autoScroll?: boolean
}>()

if (import.meta.client && autoScroll) {
  const scrollableEl = useTemplateRef('scrollableEl')

  const { x, arrivedState } = useScroll(scrollableEl, {
    behavior: 'smooth'
  })

  const { counter, reset } = useInterval(5000, {
    controls: true,
  })

  watch(counter, (newValue) => {
    if (newValue > 100) {
      reset()
      return
    }

    if (arrivedState.right) {
      x.value = 0
      return
    }

    x.value += 1000
  })
 }
</script>

<style scoped>
#scrollable-content::-webkit-scrollbar {
  display: none;
}
</style>

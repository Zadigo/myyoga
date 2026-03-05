<template>
  <div id="price" :key="item.title" :class="`${item.color} min-w-80 rounded-3xl p-10 flex-col justify-between`">
    <h3 class="font-bold text-xl mb-4">
      {{ item.title }}
    </h3>

    <p class="font-thin">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    title: string
    description: string
    color: string
  }
}>()
</script>

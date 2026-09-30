<template>
  <header tag="div" class="rounded-3xl bg-primary-800 px-10 xl:px-30 p-10 text-primary-50 flex-col content-center">
    <slot name="breadcrumb">
      <p>Discover Yoga | Gallery</p>
    </slot>

    <div class="space-y-10">
      <motion :preset="VueUseMotions.SlideBottom" :delay="100">
        <h2 class="text-3xl md:text-4xl xl:text-7xl font-bold mb-10 text-primary-200">
          {{ title }}
        </h2>
      </motion>
      
      <p class="leading-7">
        {{ description }}
      </p>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { VueUseMotions } from '~/constants/motion';

defineProps<{
  title: string,
  description: string
}>()
</script>

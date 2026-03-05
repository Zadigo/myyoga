<template>
  <div id="price" :key="item.title" :class="`${item.color} min-w-80 rounded-3xl p-10 flex-col justify-between`">
    <span class="font-bold">
      {{ item.title }}
    </span>

    <h4 class="font-bold text-5xl">
      ${{ item.price }}<span class="text-sm">/mo</span>
    </h4>

    <hr class="my-10 text-primary-50">

    <ul class="leading-7">
      <li v-for="(feature, idx) in item.features" :key="idx">
        {{ feature }}
      </li>
    </ul>

    <nuxt-button class="mt-15" block>
      {{ item.buttonText }}
    </nuxt-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    title: string
    price: number
    features: string[]
    buttonText: string
    color: string
  }
}>()
</script>

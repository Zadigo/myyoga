<template>
  <nuxt-layout>
    <nuxt-page />

    <dev-only>
      <div class="fixed top-3/6 right-0 bg-primary-100/50 backdrop-blur-3xl backdrop-saturate-150 p-10 rounded-2xl z-50">
        showMobile: {{ showMobile }}
      </div>
    </dev-only>
  </nuxt-layout>
</template>

<script setup lang="ts">
const showMobile = useState('showMobileMenu', () => ref(false))
</script>

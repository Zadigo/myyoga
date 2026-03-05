<template>
  <nuxt-slideover :open="showMobileMenu">
    <nuxt-button label="Open" color="neutral" variant="subtle" @click="() => { toggleMobileMenu() }" />

    <template #content>
      <Placeholder class="h-full m-4" />
    </template>
  </nuxt-slideover>
</template>

<script setup lang="ts">
/**
 * Global modals
 */

const { showMobileMenu, toggleMobileMenu } = useGlobalModals()
</script>

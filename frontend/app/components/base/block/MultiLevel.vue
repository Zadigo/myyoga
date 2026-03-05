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
      <slot />
    </div>
  </div>
</template>

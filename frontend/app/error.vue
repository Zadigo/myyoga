<template>
  <div class="h-screen bg-primary-100">
    <div class="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
      <h1 class="text-7xl text-primary-100 md:text-5xl font-bold">
        404 Not Found
      </h1>
      
      <div class="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7" />
      
      <p class="md:text-xl text-gray-400 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      <nuxt-button to="/" class="group flex items-center gap-1 px-7 py-2.5 rounded-full mt-10 font-medium active:scale-95 transition-all">
        Back to Home
      </nuxt-button>
    </div>
  </div>
</template>

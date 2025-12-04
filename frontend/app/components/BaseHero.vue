<template>
  <section id="hero" class="relative flex-col items-center h-screen flex justify-center overflow-hidden text-primary-50">
    <div class="absolute top-100 left-6/12 -translate-6/12 z-20 flex-col place-items-center">
      <h1 class="text-4xl md:text-7xl text-center font-semibold max-w-3xl bg-clip-text">
        Your mind, body, and soul in perfect harmony
      </h1>

      <p class="hidden xl:block md:text-base line-clamp-3 max-md:px-2 text-center max-w-md mt-3">
        Join thousands of professionals who are transforming the way they work with our platform.
      </p>
    </div>

    <!-- More -->
    <div class="absolute bottom-5 xl:bottom-20 left-0 w-full z-20 text-center px-10 xl:px-30">
      <p class="font-bold text-2xl xl:text-4xl mb-5">Where Are You on Your Yoga Journey?</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-5 xl:gap-10">
        <nuxt-link v-for="(action, idx) in actions" :key="idx" to="/what-is-yoga" class="block">
          <div class="relative group p-5 xl:p-8 rounded-xl bg-linear-to-tr from-slate-100/30 via-slate-200/50 to-slate-500/50 cursor-pointer transition-all ease-in-out hover:-translate-y-2 text-center">
            <p class="text-sm xl:text-lg text-light">{{ action.title }}</p>
            <p class="text-xl md:text-lg xl:text-3xl font-bold">{{ action.subtitle }}</p>

            <div class="absolute top-3 right-3 w-10 h-10 bg-brand-500 rounded-full border-3 border-primary-50 text-primary-50 hidden xl:flex items-center justify-center transition-all ease-in-out group-hover:-rotate-20">
              <icon name="lucide:square-arrow-out-up-right" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- Video -->
    <client-only>
      <template #default>
        <video class="absolute top-0 z-1 w-full h-screen aspect-video object-cover" autoplay muted loop>
          <source src="/vid1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </template>

      <template #placeholder>
        <div class="absolute top-0 z-1 w-full h-screen bg-primary-800" />
      </template>
    </client-only>
  </section>
</template>

<script setup lang="ts">
const actions = [
  {
    title: "I'm curious about Yoga",
    subtitle: "Begin your practice",
    link: "/what-is-yoga"
  },
  {
    title: "I want to deepen my practice",
    subtitle: "Explore techniques",
    link: "/advanced-yoga"
  },
  {
    title: "I want to teach Yoga",
    subtitle: "Start your teaching journey",
    link: "/become-a-teacher"
  }
]
</script>

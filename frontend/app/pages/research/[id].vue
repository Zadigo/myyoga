<template>
  <div id="research" class="relative mb-20 px-10 space-y-10 mt-[calc(70px+1rem)] overflow-hidden">
    <!-- Header -->
    <header class="p-10 xl:p-30 xl:py-40 rounded-3xl bg-primary-100 dark:bg-primary-800 mx-auto space-y-5 text-center flex-col place-items-center">
      <h1 class="text-7xl text-primary-50 capitalize">{{ route.params.id }}</h1>
      <p class="leading-7 w-150">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero natus ab perspiciatis iusto repellendus. Quia aspernatur minima alias consectetur laborum exercitationem pariatur, rem culpa. A, ratione! Nobis nesciunt doloribus consequatur.</p>
    </header>

    <!-- Content -->
    <section class="max-w-full xl:max-w-400 mx-auto">
      <div class="rounded-3xl bg-primary-50 dark:bg-primary-800 p-10 xl:p-30 xl:py-40 mx-auto space-y-5">
        <h3 class="font-bold text-3xl mb-10">
          Research Paper Details
        </h3>

        <div class="space-y-5">
          <article v-for="item in response" :key="item.title">
            <h4 class="font-bold">{{ item.title }}</h4>
            <p>{{ item.authors }}</p>
            <p>{{ item.journal }}</p>
            <nuxt-link :to="item.link" target="_blank" class="text-primary-300 underline font-bold">
              Read More
            </nuxt-link>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ResearchPaper } from '~~/types'

const route = useRoute()

const response = await $fetch<ResearchPaper[]>(`/api/research/${route.params.id}`)
</script>

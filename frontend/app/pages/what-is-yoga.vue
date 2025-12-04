<template>
  <div id="main" role="main" class="relative mb-20 px-10 space-y-10 mt-[calc(70px+1rem)] overflow-hidden">
    <!-- Header -->
    <div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div class="rounded-3xl overflow-hidden">
          <client-only>
            <nuxt-img v-motion-slide-left :delay="500" src="/images/yoga2.jpg" class="aspect-square object-cover" alt="" />
          </client-only>
        </div>

        <motion tag="div" preset="slideRight" :delay="500" class="rounded-3xl bg-primary-800 px-10 xl:px-30 p-10 text-primary-50 flex-col content-center">
          <p>Discover Yoga | What is Yoga?</p>
          <div class="space-y-10">
            <h2 class="text-3xl md:text-4xl xl:text-7xl font-bold mb-10 text-primary-200">A Practice of Transformation That Unites Body, Mind, and Spirit</h2>
            <p class="leading-7">Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall well-being. It originated in India thousands of years ago and has since evolved into various styles and forms practiced worldwide.</p>
          </div>
        </motion>
      </div>
    </div>

    <!-- Overview -->
    <div class="p-10 xl:p-30 xl:py-40 rounded-3xl bg-primary-100 dark:bg-primary-800 mx-auto space-y-5">
      <p>Overview</p>

      <h2 class="text-3xl xl:text-6xl font-bold">
        Whether you’re new to yoga or looking to deepen your understanding, <span class="text-primary-300">you’re in the right place.</span>
      </h2>

      <p class="text-md xl:text-4xl font-thin">
        Yoga is more than an individual practice—it’s a path to connection, shared knowledge, community care, and global well-being.
      </p>
    </div>

    <!-- Research -->
    <div class="p-10 xl:p-30 xl:py-40 rounded-3xl bg-brand-100 dark:bg-brand-800 mx-auto space-y-5">
      <div class="grid grid-cols-2">
        <div class="space-y-4 w-130 text-left">
          <h2 class="text-3xl font-bold mb-5">Exploring Yoga’s Benefits Through Research</h2>
          <p class="leading-7">We aggregate research that explores yoga’s profound effects and empowers teachers, schools, and practitioners with evidence-based knowledge.</p>
          <p class="leading-7">Check out the resources below to learn more about yoga’s impact on specific areas of mental, physical, and collective health.</p>
        </div>

        <div>
          <nuxt-accordion :items="accordionItems">
            <template #default="{ item }">
              <h4 class="text-3xl">
                {{ item.label }}
              </h4>

              <p class="mt-5 w-150">Explore how yoga supports mental well-being by cultivating mindfulness, easing stress, and enhancing emotional resilience.</p>
            </template>
          </nuxt-accordion>
        </div>
      </div>
    </div>

    <!-- Pricing -->
    <div class="p-10 rounded-3xl mx-auto space-y-5">
      <div class="text-center space-y-2">
        <p class="font-bold">Creating Your Practice</p>
        <h2 class="text-4xl font-bold">Finding Your Practice</h2>
        <p class="max-w-4xl mx-auto">At Yoga Alliance, we embrace a wide variety of approaches to yoga. Our directories recognize the following descriptions to categorize the different types of yoga when you are searching for a teacher or a school.</p>
      </div>

      <div class="max-w-400 overflow-hidden">
        <div id="pricing" class="flex space-x-5 overflow-x-scroll p-5">
          <div v-for="item in pricingDetails" id="price" :key="item.title" :class="`${item.color} min-w-80 rounded-3xl p-10 flex-col justify-between`">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui';

const pricingDetails = [
  {
    title: 'Basic Plan',
    price: 29,
    features: ['5 Projects', '10 GB Storage', 'Basic Support', 'Community Access', 'Basic code review'],
    buttonText: 'Get Started',
    color: 'bg-primary-100 dark:bg-primary-800'
  },
  {
    title: 'Pro Plan',
    price: 79,
    mostPopular: true,
    features: ['50 Projects', '100 GB Storage', 'Priority Support', 'Team Collaboration', 'Advanced Analytics', 'Premium Code Review'],
    buttonText: 'Upgrade Now',
    color: 'bg-primary-100 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    price: 149,
    features: ['Unlimited Projects', '1 TB Storage', '24/7 Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
    buttonText: 'Contact Sales',
    color: 'bg-primary-100 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    price: 149,
    features: ['Unlimited Projects', '1 TB Storage', '24/7 Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
    buttonText: 'Contact Sales',
    color: 'bg-primary-100 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    price: 149,
    features: ['Unlimited Projects', '1 TB Storage', '24/7 Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
    buttonText: 'Contact Sales',
    color: 'bg-primary-100 dark:bg-primary-800'
  }
]

const accordionItems = ref<AccordionItem[]>([
  {
    label: 'Icons',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])
</script>

<style scoped>
#pricing::-webkit-scrollbar {
  display: none;
}
</style>

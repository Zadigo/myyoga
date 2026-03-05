<template>
  <div id="what-is-yoga" role="main" class="relative mb-20 px-10 space-y-10 mt-[calc(var(--navbar-height)+1rem)] overflow-hidden">
    <!-- Header -->
    <div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div class="rounded-3xl overflow-hidden">
          <client-only>
            <nuxt-img v-motion-slide-left :delay="500" src="/images/yoga2.jpg" class="aspect-square object-cover" alt="" />
          </client-only>
        </div>

        <client-only>
          <motion tag="div" preset="slideRight" :delay="500" class="rounded-3xl bg-primary-800 px-10 xl:px-30 p-10 text-primary-50 flex-col content-center">
            <p>Discover Yoga | What is Yoga?</p>
            <div class="space-y-10">
              <h2 class="text-3xl md:text-4xl xl:text-7xl font-bold mb-10 text-primary-200">A Practice of Transformation That Unites Body, Mind, and Spirit</h2>
              <p class="leading-7">Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall well-being. It originated in India thousands of years ago and has since evolved into various styles and forms practiced worldwide.</p>
            </div>
          </motion>
        </client-only>
      </div>
    </div>

    <!-- Overview -->
    <base-overview />

    <!-- Research -->
    <div class="p-10 xl:p-30 xl:py-40 rounded-3xl bg-brand-100 dark:bg-brand-800 mx-auto space-y-5 overflow-hidden">
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="space-y-4 w-130 text-left">
          <h2 class="text-4xl font-bold mb-5">Exploring Yoga’s Benefits Through Research</h2>
          <p class="leading-7">We aggregate research that explores yoga’s profound effects and empowers teachers, schools, and practitioners with evidence-based knowledge.</p>
          <p class="leading-7">Check out the resources below to learn more about yoga’s impact on specific areas of mental, physical, and collective health.</p>
        </div>

        <div class="">
          <nuxt-accordion :items="accordionItems">
            <template #default="{ item }">
              <div class="max-w-100 xl:max-w-full overflow-hidden">
                <h4 class="text-4xl">
                  {{ item.label }}
                </h4>
  
                <p class="mt-5 max-w-150 md:max-w-full">Explore how yoga supports mental well-being by cultivating mindfulness, easing stress, and enhancing emotional resilience.</p>
              </div>
            </template>

            <template #content="{ item }">
              <div class="grid grid-cols-3 gap-2 py-10">
                <nuxt-link v-for="benefit in item.benefits" :key="benefit" :to="`/research/${item.category}`" class="block p-3 bg-brand-200 dark:bg-brand-700 rounded-lg hover:bg-brand-200 dark:hover:bg-brand-600 text-center">
                  {{ benefit }}
                </nuxt-link>
              </div>
            </template>
          </nuxt-accordion>
        </div>
      </div>
    </div>

    <!-- Quote -->
    <base-quote />

    <!-- Pricing -->
    <base-slider-container :auto-scroll="false">
      <template #subtitle>
        Creating Your Practice
      </template>

      <template #title>
        Creating Your Practice
      </template>

      <template #description>
        At Yoga Alliance, we embrace a wide variety of approaches to yoga. Our directories recognize the following descriptions to categorize the different types of yoga when you are searching for a teacher or a school.
      </template>

      <base-slider-price-card v-for="item in pricingDetails" :key="item.title" :item="item" />
    </base-slider-container>

    <!-- Info -->
    <base-slider-container>
      <template #subtitle>
        Creating Your Practice
      </template>

      <template #title>
        Creating Your Practice
      </template>

      <template #description>
        At Yoga Alliance, we embrace a wide variety of approaches to yoga. Our directories recognize the following descriptions to categorize the different types of yoga when you are searching for a teacher or a school.
      </template>

      <base-slider-info-card v-for="item in infoDetails" :key="item.title" :item="item" class="text-primary-50" />
    </base-slider-container>

    <bottom-cta />
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

/**
 * General
 */

definePageMeta({
  label: 'What is Yoga'
})

/**
 * Pricing
 */

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

/**
 * Info
 */

const infoDetails = [
  {
    title: 'Basic Plan',
    description: 'Ideal for individuals starting their yoga journey, offering essential features to explore and practice yoga at your own pace.',
    buttonText: 'Get Started',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Pro Plan',
    description: 'Designed for dedicated practitioners seeking advanced features, personalized guidance, and enhanced support to deepen their yoga practice.',
    buttonText: 'Upgrade Now',
    color: 'bg-brand-100 dark:bg-brand-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-brand-400 dark:bg-brand-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  },
  {
    title: 'Enterprise Plan',
    description: 'Tailored for organizations and studios, providing comprehensive tools, custom solutions, and dedicated support to foster a thriving yoga community.',
    buttonText: 'Contact Sales',
    color: 'bg-primary-200 dark:bg-primary-800'
  }
]

/**
 * Accordion
 */

const accordionItems = ref<AccordionItem[]>([
  {
    label: 'Mental Benefits',
    content: 'Explore how yoga supports mental well-being by cultivating mindfulness, easing stress, and enhancing emotional resilience.',
    benefits: ['Mindfulness', 'Stress Reduction', 'Emotional Resilience'],
    category: 'cancer'
  },
  {
    label: 'Physical Benefits',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
    benefits: ['Mindfulness', 'Stress Reduction', 'Emotional Resilience'],
    category: 'cancer'
  },
  {
    label: 'Collective Benefits',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
    benefits: ['Mindfulness', 'Stress Reduction', 'Emotional Resilience'],
    category: 'cancer'
  }
])
</script>

<style scoped>
#pricing::-webkit-scrollbar {
  display: none;
}
</style>

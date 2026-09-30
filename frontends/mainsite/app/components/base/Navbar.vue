<template>
  <nav ref="navbarEl" class="h-17.5 fixed top-0 left-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 shadow-[0px_4px_25px_0px_#0000000D] transition-all ease-in-out">
    <nuxt-link-locale to="/" class="text-primary-600">
      <nuxt-img v-if="scrollY > 8" src="/logos/gency313-dark.png" class="w-35" alt="Gency Logo" />
      <nuxt-img v-else src="/logos/gency313-white.png" class="w-35" alt="Gency Logo" />
    </nuxt-link-locale>

    <ul class="md:flex hidden items-center gap-10">
      <li v-for="link in links" :key="link.name">
        <nuxt-link-locale :to="link.to" class="hover:text-green-500/80 text-lg text-bold transition">
          {{ link.name }}
        </nuxt-link-locale>
      </li>
    </ul>

    <nuxt-button id="cta-navbar" to="/booking" class="rounded-full hidden md:block" size="xl" color="neutral">
      <icon name="lucide:calendar-clock" />
      Request demo
    </nuxt-button>

    <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition" @click="() => { toggleMobileMenu() }">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
      </svg>
    </button>

    <div :class="{ 'hidden md:hidden': !showMobileMenu, 'block': showMobileMenu }" class="mobile-menu absolute top-17.5 left-0 w-full bg-primary-50 p-6">
      <ul class="flex flex-col space-y-4 text-lg">
        <li v-for="link in links" :key="link.name">
          <nuxt-link-locale :href="link.to" class="text-sm">
            {{ link.name }}
          </nuxt-link-locale>
        </li>
      </ul>

      <nuxt-button id="cta-navbar" to="/booking" class="rounded-full mt-6" size="xl" color="neutral">
        <icon name="lucide:calendar-clock" />
        Request demo
      </nuxt-button>
    </div>
  </nav>
</template>

<script setup lang="ts">

/**
 * Scroll Effect
 */

const transparentTokens = ['bg-transparent', 'text-primary-50', 'shadow-[0px_4px_25px_0px_#0000000D]']
const coloredTokens = ['bg-primary-50', 'text-primary-900', 'shadow-lg']

const route = useRoute()

const scrollY = ref(0)

if (import.meta.client) {
  const navbarel = useTemplateRef('navbarEl')
  const { y } = useScroll(window.document)
  
  watch(y , (newValue) => {
    scrollY.value = newValue
    if (isDefined(navbarel)) {
      if (route.meta.label === 'Home') {
        if (newValue > 10) {
          navbarel.value.classList.add(...coloredTokens)
          navbarel.value.classList.remove(...transparentTokens)
        } else {
          navbarel.value.classList.remove(...coloredTokens)
          navbarel.value.classList.add(...transparentTokens)
        }
      } else {
        navbarel.value.classList.remove(...transparentTokens)
        navbarel.value.classList.add(...coloredTokens)
      }
    }
  })
}

/**
 * Links
 */

const links = [
  { name: 'What is Yoga', to: '/what-is-yoga' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Pricing', to: '/what-is-yoga#pricing' },
]

/**
 * Modals
 */

const { showMobileMenu, toggleMobileMenu } = useGlobalModals()
</script>

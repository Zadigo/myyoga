<template>
  <div id="main" role="main" class="mb-20 overflow-hidden">
    <!-- Hero -->
    <base-hero />

    <!-- Intermediate -->
    <section id="intermediate-1" class="p-10 xl:p-20 max-w-full xl:max-w-400 mx-auto">
      <div class="rounded-3xl grid grid-cols-1 xl:grid-cols-2 overflow-hidden bg-primary-800 flex-col place-items-center">
        <nuxt-img src="/images/yoga3.jpg" class="h-full w-full" alt="" />

        <div class="px-10 py-10 xl:py-0 xl:px-20 text-primary-50">
          <client-only>
            <motion is="h2" preset="slideVisibleTop" :delay="500" class="text-4xl font-bold mb-10">For Studios and Schools</motion>
          </client-only>

          <p class="leading-7">Yoga Alliance partners with studios and schools to expand access to yoga worldwide. Build credibility, access valuable resources, and strengthen your impact with the support of our global network.</p>
        </div>
      </div>
    </section>

    <!-- Section 1 -->
    <section id="intermediate-2" class="p-10 xl:p-20 max-w-full text-center xl:max-w-400 mx-auto">
      <h1 class="text-5xl text-primary-900 font-bold mb-5">
        Why Yoga? Why Now?
      </h1>

      <p class="text-primary-900 max-w-lg mx-auto leading-7">Yoga is more than a physical practice—it’s a pathway to well-being for individuals and communities alike:</p>

      <div class="grid grid-cols-1 xl:grid-cols-3">
        <div class="p-10 flex-col place-items-center">
          <nuxt-img src="/images/yoga2.webp" class="aspect-square object-fill w-30 mb-8" alt="" />
          <h2 class="text-3xl font-bold mb-5">Physical Health</h2>
          <p class="leading-7">Regular yoga practice improves flexibility, strength, and cardiovascular health, promoting overall physical well-being.</p>
        </div>

        <div class="p-10 flex-col place-items-center">
          <nuxt-img src="/images/yoga2.webp" class="aspect-square object-fill w-30 mb-8" alt="" />
          <h2 class="text-3xl font-bold mb-5">Mental Clarity</h2>
          <p class="leading-7">Yoga helps reduce stress and anxiety, fostering mental clarity and emotional balance through mindfulness and meditation.</p>
        </div>

        <div class="p-10 flex-col place-items-center">
          <nuxt-img src="/images/yoga2.webp" class="aspect-square object-fill w-30 mb-8" alt="" />
          <h2 class="text-3xl font-bold mb-5">Community Connection</h2>
          <p class="leading-7">Yoga brings people together, creating supportive communities that encourage personal growth and social connection.</p>
        </div>
      </div>

      <nuxt-button size="xl">
        <icon name="i-lucide:external-link" />
        Learn more
      </nuxt-button>

      <hr class="my-10 text-primary-300 mx-auto">
    </section>

    <!-- Section 2 -->
    <section id="intermedia-3" class="p-10 xl:p-20 max-w-full xl:max-w-400 mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div class="flex-col content-center space-y-10">
          <client-only>
            <motion tag="h2" preset="slideVisibleTop" :delay="200" class="text-5xl font-bold mb-5">Your Partner in Yoga</motion>
          </client-only>

          <div class="space-y-4">
            <p class="leaning-7">At Yoga Alliance, we believe yoga is for everybody, everywhere.</p>
            <p class="leaning-7">We build community by supporting yoga teachers, schools, and advocates, expanding access, challenging outdated ideas about who yoga is for, and ensuring that the practice is inclusive and accessible to all.</p>
            <p class="leaning-7">We lead with integrity, kindness, and bold action to get closer to our vision: More Yoga, Better World.</p>
          </div>

          <nuxt-button size="xl">
            <icon name="i-lucide:external-link" />
            Learn more
          </nuxt-button>
        </div>

        <client-only>
          <nuxt-img v-motion-slide-visible-right :delay="300" src="/images/yoga3.jpg" class="h-full w-full rounded-3xl" alt="" />
        </client-only>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="intermediate-4" class="p-10 xl:p-20">
      <div class="p-20 max-w-full xl:max-w-400 mx-auto bg-primary-900 text-primary-50 rounded-3xl text-left">
        <motion tag="h2" preset="slideVisibleTop" :delay="200" class="text-5xl font-bold mb-5">
          Expanding Yoga’s Reach, Together
        </motion>

        <p class="leading-7">
          Yoga has the power to heal, uplift, and unite communities. But not everyone has access to its benefits.

          At Yoga Alliance, we work alongside teachers, organizations, and advocates to bring yoga to more people—wherever they are, in whatever circumstances. From refugee support programs to school-based wellness initiatives, we partner with those already making a difference to help amplify their impact.

          By supporting this work, you help ensure that yoga reaches more communities as a tool for well-being, resilience, and connection.
        </p>

        <nuxt-button size="xl" class="mt-10">
          <icon name="i-lucide:external-link" />
          Learn more
        </nuxt-button>
      </div>
    </section>

    <!-- Newsletter -->
    <section id="newsletter" class="p-10 xl:p-20 max-w-full xl:max-w-400 mx-auto">
      <div class="p-20 max-w-full xl:max-w-400 mx-auto bg-[url(/images/yoga3.jpg)] bg-center bg-cover bg-no-repeat text-primary-50 rounded-3xl text-center flex flex-col items-center justify-center">
        <p class="text-primary-500 font-medium">Get updated</p>
        <h3 class="max-w-lg font-semibold text-4xl/[44px] mt-2">Subscribe to our newsletter & get the latest news</h3>

        <div class="flex items-center justify-center mt-10 border border-primary-600 focus-within:outline focus-within:outline-primary-600 text-sm rounded-full h-14 max-w-md w-full">
          <input type="text" class="bg-transparent outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address">
          <button class="bg-primary-600 text-primary-50 rounded-full h-11 mr-1 px-8 flex items-center justify-center">
            Subscribe now
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

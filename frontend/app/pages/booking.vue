<template>
  <div id="pricing" role="main" class="relative mb-20 px-10 space-y-10 mt-[calc(70px+1rem)]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-400 mx-auto">
      <div class="hidden lg:block bg-primary-100 rounded-3xl overflow-hidden">
        <nuxt-img src="/images/yoga3.jpg" class="w-full" />
      </div>

      <div class="bg-primary-100 dark:bg-primary-800 p-10 xl:p-20 rounded-3xl space-y-5">
        <div>
          <h1 class="text-3xl">
            Book Your Yoga Session
          </h1>

          <p>Please fill in your details to book a session.</p>
        </div>

        <form class="space-y-5" @submit.prevent>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
            <nuxt-input class="col-span-4 lg:col-span-2" size="xl" placeholder="Firstname" />
            <nuxt-input class="col-span-4 lg:col-span-2" size="xl" placeholder="Lastname" />
            <nuxt-input class="col-span-4 lg:col-span-4" size="xl" placeholder="Email" />

            <div class="mt-10 xl:mt-0 flex justify-end">
              <nuxt-button size="xl">
                <icon name="lucide:check" />
                Submit
              </nuxt-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

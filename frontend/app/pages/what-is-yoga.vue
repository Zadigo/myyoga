<template>
  <div id="main" role="main" class="mb-20 px-10 space-y-10 mt-[calc(70px+1rem)]">
    <!-- Header -->
    <div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div class="rounded-3xl overflow-hidden">
          <nuxt-img src="/images/yoga2.jpg" class="aspect-square object-cover" alt="" />
        </div>

        <div class="rounded-3xl bg-primary-800 px-10 xl:px-30 p-10 text-primary-50 flex-col content-center">
          <p>Discover Yoga | What is Yoga?</p>
          <div class="space-y-10">
            <h2 class="text-3xl md:text-4xl xl:text-7xl font-bold mb-10 text-primary-200">A Practice of Transformation That Unites Body, Mind, and Spirit</h2>
            <p class="leading-7">Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall well-being. It originated in India thousands of years ago and has since evolved into various styles and forms practiced worldwide.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Overview -->
    <div class="p-10 xl:p-30 rounded-3xl bg-primary-100 mx-auto space-y-5">
      <p>Overview</p>

      <h2 class="text-3xl xl:text-6xl font-bold">
        Whether you’re new to yoga or looking to deepen your understanding, <span class="text-primary-300">you’re in the right place.</span>
      </h2>

      <p class="text-md xl:text-4xl font-thin">
        Yoga is more than an individual practice—it’s a path to connection, shared knowledge, community care, and global well-being.
      </p>
    </div>
  </div>
</template>

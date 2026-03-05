<template>
  <base-section-container id="gallery">
    <!-- Header -->
    <base-simple-header title="Gallery" description="Explore the transformative power of yoga through our curated collection of images, showcasing the beauty, diversity, and profound impact of this ancient practice on individuals and communities worldwide." />

    <!-- Images -->
    <div class="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <client-only>
        <motion-group preset="pop">
          <div v-for="i in 30" :key="i" class="overflow-hidden rounded-3xl relative">
            <nuxt-img src="/images/yoga2.jpg" class="aspect-square object-cover hover:scale-110 transition duration-300" width="100%" height="100%" alt="" />
            
            <div class="text-primary-50 absolute bottom-10 left-10">
              <h2 class="font-bold text-2xl">
                Some description
              </h2>
  
              <p class="text-sm font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </motion-group>
      </client-only>
    </div>
  </base-section-container>
</template>

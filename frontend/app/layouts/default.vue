<template>
  <section id="site" class="relative">
    <!-- Navbar -->
    <base-navbar />
    
    <!-- Main -->
    <main>
      <slot />
    </main>

    <!-- Chat -->
    <base-chat class="fixed bottom-0 right-0" />

    <!-- Footer -->
    <base-footer />
  </section>
</template>

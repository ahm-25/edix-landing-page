<template>
  <div class="min-h-screen flex flex-col font-sans">
    <Navbar />
    
    <main class="flex-grow pt-24">
      <HeroSection />
      <CapabilitiesStrip />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TechnologiesSection />
      <CompanyStatement />
      <ContactCta />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
// Nuxt automatically imports components from the ~/components directory
</script>

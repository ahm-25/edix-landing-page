<script setup lang="ts">
import { siteConfig } from '~/data/config'
</script>

<template>
  <section class="py-20 bg-background-alt border-y border-gray-100">
    <div class="container mx-auto px-4 md:px-8 text-center">
      <SectionHeading 
        title="تقنيات نبني بها" 
        subtitle="نستخدم أحدث التقنيات والأدوات لبناء حلول قوية ومرنة ومستدامة." 
        centered
        class="mb-12"
      />
      
      <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
        <div 
          v-for="tech in siteConfig.technologies" 
          :key="tech.name"
          class="flex items-center justify-center px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-500 font-semibold hover:text-primary-navy hover:border-gray-300 transition-all duration-300 grayscale hover:grayscale-0"
        >
          <!-- Using text as a clean placeholder for minimal logos -->
          <span class="text-sm md:text-base tracking-wide">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig } from '~/data/config'
import * as icons from '@lucide/vue'

const resolveIcon = (iconName: string) => {
  const name = iconName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  return (icons as any)[name] || icons.Circle
}
</script>

<template>
  <section id="services" class="py-24 bg-white">
    <div class="container mx-auto px-4 md:px-8">
      <SectionHeading 
        title="ما الذي نبنيه؟" 
        subtitle="نساعد الشركات والأفراد على تحويل احتياجاتهم إلى منتجات رقمية قابلة للاستخدام والنمو." 
        centered 
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div 
          v-for="service in siteConfig.services" 
          :key="service.title"
          class="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          <!-- Subtle Number -->
          <div class="absolute top-6 left-6 text-4xl font-extrabold text-gray-50 group-hover:text-primary-light transition-colors pointer-events-none">
            {{ service.number }}
          </div>
          
          <div class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
            <component :is="resolveIcon(service.icon)" class="w-6 h-6" />
          </div>
          
          <h3 class="text-xl font-bold text-primary-navy mb-3 relative z-10">{{ service.title }}</h3>
          <p class="text-gray-500 leading-relaxed relative z-10 mb-8">{{ service.description }}</p>
          
          <!-- Arrow Icon at the bottom corner -->
          <div class="mt-auto flex justify-end">
            <icons.ArrowLeft class="w-5 h-5 text-gray-300 group-hover:text-primary-blue transform group-hover:-translate-x-2 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

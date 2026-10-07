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
          class="group bg-white rounded-3xl p-8 border border-gray-100/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(23,105,255,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden z-10"
        >
          <!-- Hover Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-light/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <!-- Subtle Number -->
          <div class="absolute top-6 left-6 text-5xl font-black text-gray-50/80 group-hover:text-primary-blue/5 transition-colors duration-500 pointer-events-none">
            {{ service.number }}
          </div>
          
          <div class="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light/50 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-glow group-hover:-rotate-3">
            <component :is="resolveIcon(service.icon)" class="w-7 h-7" />
          </div>
          
          <h3 class="text-xl font-bold text-primary-navy mb-4 relative z-10 group-hover:text-primary-blue transition-colors duration-300">{{ service.title }}</h3>
          <p class="text-gray-500 leading-relaxed relative z-10 mb-8 font-medium">{{ service.description }}</p>
          
          <!-- Arrow Icon at the bottom corner -->
          <div class="mt-auto flex justify-end">
            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-blue group-hover:shadow-glow transition-all duration-500 transform group-hover:translate-x-0 translate-x-2">
              <icons.ArrowLeft class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

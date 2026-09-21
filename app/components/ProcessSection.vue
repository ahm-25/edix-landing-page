<script setup lang="ts">
import { siteConfig } from '~/data/config'
import * as icons from '@lucide/vue'

const resolveIcon = (iconName: string) => {
  const name = iconName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  return (icons as any)[name] || icons.Circle
}
</script>

<template>
  <section id="process" class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 md:px-8">
      <SectionHeading 
        title="كيف نحول الفكرة إلى منتج؟" 
        class="text-right mb-20"
      />
      
      <div class="relative">
        <!-- Connecting Line for Desktop (RTL specific logic) -->
        <div class="hidden md:block absolute top-6 right-[12%] left-[12%] h-[2px] bg-gray-100 z-0"></div>

        <div class="flex flex-col md:flex-row gap-12 md:gap-4 relative z-10">
          <div 
            v-for="(step, index) in siteConfig.process" 
            :key="step.title"
            class="flex-1 flex flex-row md:flex-col items-start md:items-center text-right md:text-center group"
          >
            
            <!-- Icon & Number Circle -->
            <div class="relative w-14 h-14 shrink-0 bg-white border-2 border-primary-light rounded-full flex items-center justify-center text-primary-blue mb-0 md:mb-6 ml-6 md:ml-0 group-hover:border-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shadow-sm z-10">
              <component :is="resolveIcon(step.icon)" class="w-6 h-6" />
              <!-- Number badge -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-primary-navy shadow-sm">
                {{ step.number }}
              </div>
            </div>

            <!-- Content -->
            <div>
              <h4 class="text-xl font-bold text-primary-navy mb-2">{{ step.title }}</h4>
              <p class="text-gray-500 text-sm md:text-base leading-relaxed">{{ step.description }}</p>
            </div>
            
            <!-- Mobile Connecting Line -->
            <div v-if="index !== siteConfig.process.length - 1" class="md:hidden absolute right-7 w-[2px] h-[calc(100%-3rem)] top-14 bg-gray-100 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

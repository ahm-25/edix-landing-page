<script setup lang="ts">
import { siteConfig } from '~/data/config'
import * as icons from '@lucide/vue'

const resolveIcon = (iconName: string) => {
  // Map string icon names to actual Lucide components
  const name = iconName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  return (icons as any)[name] || icons.Circle
}
</script>

<template>
  <section class="py-12 border-b border-gray-100 bg-white">
    <div class="container mx-auto px-4 md:px-8">
      <h3 class="text-center font-bold text-2xl text-primary-navy mb-10">من الفكرة إلى المنتج</h3>
      
      <div class="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12">
        <div 
          v-for="(cap, index) in siteConfig.capabilities" 
          :key="cap.title"
          class="flex items-center gap-3 text-gray-600 hover:text-primary-blue transition-colors group"
        >
          <component :is="resolveIcon(cap.icon)" class="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors" />
          <span class="font-semibold text-sm whitespace-nowrap">{{ cap.title }}</span>
          
          <!-- Subtle divider for desktop except last item -->
          <div v-if="index !== siteConfig.capabilities.length - 1" class="hidden md:block w-px h-6 bg-gray-200 ml-[-2rem] mr-8"></div>
        </div>
      </div>
    </div>
  </section>
</template>

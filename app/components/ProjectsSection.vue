<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { ExternalLink } from '@lucide/vue'

const projects = siteConfig.projects
</script>

<template>
  <section id="projects" class="py-24 bg-background-alt">
    <div class="container mx-auto px-4 md:px-8">
      <SectionHeading 
        title="من أعمالنا" 
        subtitle="مجموعة من المشاريع التي نفخر بتنفيذها لعملائنا." 
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <NuxtLink 
          v-for="project in projects" 
          :key="project.id"
          :to="project.link || '#'"
          :target="project.link ? '_blank' : undefined"
          class="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
        >
          <!-- Project Image -->
          <div class="w-full h-64 rounded-xl mb-8 overflow-hidden border border-gray-100 relative group-hover:border-primary-blue/30 transition-all shadow-sm group-hover:shadow-md bg-gray-50">
            <div class="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
               v-if="project.image" 
               :src="project.image" 
               :alt="project.name"
               class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
               loading="lazy"
            />
            <div v-else class="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-3">
               <svg class="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               <span class="text-sm font-medium">صورة المشروع</span>
            </div>
          </div>
          
          <div class="mt-auto flex-1 flex flex-col">
            <div class="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-primary-light text-primary-blue text-xs font-semibold mb-4">
              {{ project.category }}
            </div>
            <h4 class="text-2xl font-bold text-primary-navy mb-3 group-hover:text-primary-blue transition-colors flex items-center justify-between">
              {{ project.name }}
              <ExternalLink class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary-blue" />
            </h4>
            <p class="text-gray-500 text-base leading-relaxed mb-6 flex-1">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <template v-if="project.technologies">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100"
                >
                  {{ tech }}
                </span>
              </template>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

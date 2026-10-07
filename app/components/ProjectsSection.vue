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
          class="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(23,105,255,0.08)] transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full relative z-10 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <!-- Project Image -->
          <div class="w-full h-72 rounded-2xl mb-8 overflow-hidden border border-gray-100/50 relative group-hover:border-primary-blue/30 transition-all duration-500 shadow-sm group-hover:shadow-glow bg-gray-50/50">
            <div class="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
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
            <div class="inline-flex items-center self-start px-3 py-1.5 rounded-lg bg-primary-light/60 text-primary-blue text-xs font-bold mb-5 tracking-wide group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 shadow-sm">
              {{ project.category }}
            </div>
            <h4 class="text-2xl font-black text-primary-navy mb-3 group-hover:text-primary-blue transition-colors duration-300 flex items-center justify-between">
              {{ project.name }}
              <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ExternalLink class="w-4 h-4 text-primary-blue" />
              </div>
            </h4>
            <p class="text-gray-500 text-base font-medium leading-relaxed mb-8 flex-1">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <template v-if="project.technologies">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="text-[11px] font-bold text-gray-500 bg-white px-3 py-1.5 rounded-md border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-primary-blue/20 group-hover:text-primary-blue transition-colors duration-300"
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

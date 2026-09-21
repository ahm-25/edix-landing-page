<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { ArrowUpLeft, ExternalLink } from '@lucide/vue'

const featuredProject = siteConfig.projects.find(p => p.featured)
const otherProjects = siteConfig.projects.filter(p => !p.featured)
</script>

<template>
  <section id="projects" class="py-24 bg-background-alt">
    <div class="container mx-auto px-4 md:px-8">
      <SectionHeading 
        title="من أعمالنا" 
        subtitle="مجموعة من المشاريع التي نفخر بتنفيذها لعملائنا." 
      />
      
      <div class="flex flex-col gap-6 lg:gap-8">
        
        <!-- Featured Project (Full width on top) -->
        <div v-if="featuredProject" class="w-full group relative rounded-2xl overflow-hidden bg-[#111A2C] shadow-lg border border-gray-800 flex flex-col justify-center p-8 md:p-12 lg:p-16 min-h-[450px] lg:min-h-[500px]">
          
          <div class="relative z-20 w-full lg:w-[45%]">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-6">
              {{ featuredProject.category }}
            </div>
            
            <h3 class="text-4xl font-bold text-white mb-4">{{ featuredProject.name }}</h3>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">{{ featuredProject.description }}</p>
            
            <div class="flex flex-wrap gap-3 mb-10">
              <span 
                v-for="tech in featuredProject.technologies" 
                :key="tech"
                class="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10"
              >
                <!-- Simple dot to represent technology -->
                <span class="w-2 h-2 rounded-full bg-primary-blue"></span>
                {{ tech }}
              </span>
            </div>
            
            <AppButton :to="featuredProject.link || '#'" :target="featuredProject.link ? '_blank' : undefined" variant="primary" class="gap-2">
              عرض المشروع
              <ArrowUpLeft class="w-4 h-4" />
            </AppButton>
          </div>
          
          <!-- Mockup Visual background for Featured Project -->
          <div class="absolute left-0 bottom-0 w-full lg:w-[50%] h-[55%] lg:h-[85%] transform lg:-translate-x-4 translate-y-12 lg:translate-y-8 rounded-tr-2xl overflow-hidden border-t border-r border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-transform duration-700 group-hover:translate-y-6 lg:group-hover:translate-y-4 z-0 flex flex-col">
             <!-- Mac-like Header -->
             <div class="h-10 w-full bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
             </div>
             <!-- Mockup Content -->
             <div class="flex-1 p-5 flex flex-col gap-4 opacity-70">
                <div class="h-32 w-full bg-gradient-to-r from-primary-blue/30 to-purple-500/20 rounded-xl border border-white/5"></div>
                <div class="flex gap-4 flex-1">
                   <div class="w-1/3 h-full bg-white/5 rounded-xl border border-white/5 hidden sm:block"></div>
                   <div class="flex-1 flex flex-col gap-4">
                      <div class="flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                      <div class="h-1/3 bg-white/5 rounded-xl border border-white/5"></div>
                   </div>
                </div>
             </div>
          </div>
          
        </div>

        <!-- Other Projects (Grid below) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <NuxtLink 
            v-for="project in otherProjects" 
            :key="project.id"
            :to="project.link || '#'"
            :target="project.link ? '_blank' : undefined"
            class="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
          >
            <!-- Minimal Mockup Visual -->
            <div class="w-full h-44 bg-gradient-to-br from-primary-light/40 to-gray-50 rounded-xl mb-6 overflow-hidden border border-primary-light/50 relative group-hover:border-primary-blue/30 transition-colors flex items-end justify-center px-4 sm:px-8">
              <div class="w-full h-[85%] bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-4 transform transition-transform duration-500 group-hover:translate-y-2">
                 <!-- Header -->
                 <div class="flex items-center gap-1.5 mb-4 border-b border-gray-50 pb-3">
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                 </div>
                 <!-- Content Lines -->
                 <div class="h-2 w-1/3 bg-primary-blue/20 rounded-full mb-3"></div>
                 <div class="h-1.5 w-3/4 bg-gray-100 rounded-full mb-2"></div>
                 <div class="h-1.5 w-1/2 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            
            <div class="mt-auto">
              <div class="inline-flex items-center px-2 py-1 rounded bg-primary-light text-primary-blue text-xs font-semibold mb-3">
                {{ project.category }}
              </div>
              <h4 class="text-xl font-bold text-primary-navy mb-2 group-hover:text-primary-blue transition-colors flex items-center justify-between">
                {{ project.name }}
                <ExternalLink class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p class="text-gray-500 text-sm leading-relaxed">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

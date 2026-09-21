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
      
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        <!-- Featured Project (Right side in RTL) -->
        <div v-if="featuredProject" class="lg:w-2/3 group relative rounded-2xl overflow-hidden bg-[#111A2C] shadow-lg border border-gray-800 flex flex-col justify-between p-8 md:p-12 min-h-[500px]">
          
          <div class="relative z-10 w-full md:w-1/2">
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
            
            <AppButton variant="primary" class="gap-2">
              عرض المشروع
              <ArrowUpLeft class="w-4 h-4" />
            </AppButton>
          </div>
          
          <!-- Mockup Visual background for Falbid -->
          <div class="absolute left-0 bottom-0 w-full md:w-2/3 h-2/3 md:h-[90%] transform translate-x-10 md:translate-x-20 translate-y-12 rounded-tl-2xl overflow-hidden border-t-8 border-l-8 border-gray-900 shadow-2xl transition-transform duration-700 group-hover:translate-y-8">
             <div class="w-full h-full bg-[#182336] p-4 flex flex-col gap-4">
               <div class="h-10 w-full bg-[#202C40] rounded-lg border border-gray-700"></div>
               <div class="flex gap-4 h-full">
                 <div class="w-1/4 h-full bg-[#202C40] rounded-lg border border-gray-700 hidden sm:block"></div>
                 <div class="flex-1 flex flex-col gap-4">
                    <div class="h-32 w-full bg-primary-blue/20 rounded-lg border border-primary-blue/30"></div>
                    <div class="flex gap-4">
                      <div class="flex-1 h-40 bg-[#202C40] rounded-lg border border-gray-700"></div>
                      <div class="flex-1 h-40 bg-[#202C40] rounded-lg border border-gray-700"></div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
          
        </div>

        <!-- Other Projects (Left side in RTL) -->
        <div class="lg:w-1/3 flex flex-col gap-6 lg:gap-8">
          <div 
            v-for="project in otherProjects" 
            :key="project.id"
            class="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
          >
            <!-- Minimal Mockup Visual -->
            <div class="w-full h-40 bg-gray-50 rounded-xl mb-6 overflow-hidden border border-gray-100 relative group-hover:border-primary-blue/30 transition-colors">
              <div class="absolute inset-x-4 -bottom-4 top-4 bg-white rounded-t-lg shadow-sm border border-gray-200 p-3">
                 <div class="h-3 w-1/3 bg-gray-200 rounded mb-3"></div>
                 <div class="h-2 w-full bg-gray-100 rounded mb-2"></div>
                 <div class="h-2 w-5/6 bg-gray-100 rounded"></div>
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
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

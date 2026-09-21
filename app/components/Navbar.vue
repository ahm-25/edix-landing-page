<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { siteConfig } from '~/data/config'
import { Globe, Menu, X } from '@lucide/vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-white border-transparent py-5'
    ]"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
      
      <!-- Right Side (RTL) - Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 relative z-50">
        <!-- Text Logo Placeholder since there is no image asset yet -->
        <span class="text-3xl font-extrabold text-primary-navy tracking-tighter">EDIX</span>
      </NuxtLink>

      <!-- Center - Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="item in siteConfig.navigation" 
          :key="item.name" 
          :to="item.href"
          class="text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Left Side (RTL) - CTA & Language -->
      <div class="hidden md:flex items-center gap-4">
        <button class="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-primary-navy transition-colors">
          <Globe class="w-4 h-4" />
          <span>AR</span>
        </button>
        <AppButton to="#contact" variant="primary" size="sm">
          ابدأ مشروعك
        </AppButton>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        class="md:hidden relative z-50 p-2 text-primary-navy"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div 
      :class="[
        'fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-24 px-6 flex flex-col',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <nav class="flex flex-col gap-6 text-right mb-12">
        <NuxtLink 
          v-for="item in siteConfig.navigation" 
          :key="item.name" 
          :to="item.href"
          class="text-xl font-bold text-primary-navy"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="flex flex-col gap-4 mt-auto mb-8">
        <button class="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg text-primary-navy font-semibold">
          <Globe class="w-5 h-5" />
          <span>English</span>
        </button>
        <AppButton to="#contact" variant="primary" class="w-full justify-center">
          ابدأ مشروعك
        </AppButton>
      </div>
    </div>
  </header>
</template>

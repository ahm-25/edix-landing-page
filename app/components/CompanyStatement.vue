<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
</script>

<template>
  <section id="about" class="py-24 bg-primary-navy relative overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div class="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
      
      <!-- Brand Logo / Identity -->
      <div class="w-full md:w-1/3 flex justify-center md:justify-end">
        <div class="text-6xl md:text-8xl font-extrabold text-white/5 tracking-tighter select-none">
          EDIX
        </div>
      </div>
      
      <!-- Statement Text -->
      <div class="w-full md:w-2/3 text-right">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          نبني شركة تقنية،<br/>
          <span class="text-gray-400">وليس مجرد مشاريع.</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
          نحن نركز على بناء منتجات رقمية وحلول برمجية تساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى منتجات قابلة للاستخدام والنمو.
        </p>
        
        <NuxtLink to="#contact" class="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-blue transition-colors group">
          <span>اعرف المزيد عنا</span>
          <ArrowLeft class="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

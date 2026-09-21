<script setup lang="ts">
import { Play } from '@lucide/vue'
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-primary-light/50 to-white pt-16 pb-24 md:pt-24 md:pb-32">
    <!-- Subtle Background Shapes -->
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-right max-w-2xl mx-auto lg:mx-0">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue font-semibold text-sm mb-6">
            <span>نحوّل الأفكار إلى منتجات رقمية</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-navy leading-[1.2] mb-6">
            نبني البرمجيات التي تدفع أعمالك إلى الأمام.
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            نصمم ونطور مواقع ومنصات وتطبيقات رقمية عالية الجودة، من الفكرة الأولى وحتى الإطلاق والنمو.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <AppButton to="#contact" variant="primary" size="lg" class="w-full sm:w-auto min-w-[160px]">
              ابدأ مشروعك
            </AppButton>
            <AppButton to="#projects" variant="outline" size="lg" class="w-full sm:w-auto min-w-[160px] gap-2">
              <Play class="w-5 h-5" />
              شاهد أعمالنا
            </AppButton>
          </div>
        </div>

        <!-- UI Composition Visual -->
        <div class="flex-1 w-full max-w-2xl lg:max-w-none relative mt-10 lg:mt-0">
          <!-- Main Dashboard Mockup -->
          <div class="relative bg-white rounded-xl shadow-soft border border-gray-100 p-2 transform transition-transform hover:-translate-y-2 duration-500">
            <div class="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
              <!-- Header -->
              <div class="h-12 border-b border-gray-200 flex items-center px-4 gap-4 bg-white">
                <div class="text-primary-navy font-bold text-lg">EDIX Dashboard</div>
                <div class="hidden sm:flex items-center gap-4 text-xs font-semibold text-gray-400 mx-auto">
                  <span class="text-primary-blue">Overview</span>
                  <span>Analytics</span>
                  <span>Reports</span>
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-200 mr-auto"></div>
              </div>
              <!-- Body -->
              <div class="p-6 h-[320px] flex flex-col gap-6 bg-gray-50/50">
                <!-- Top Stats -->
                <div class="flex gap-4">
                  <div class="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-8 h-8 rounded bg-primary-light mb-3"></div>
                    <div class="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                    <div class="h-4 w-24 bg-gray-800 rounded"></div>
                  </div>
                  <div class="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div class="w-8 h-8 rounded bg-primary-light mb-3"></div>
                    <div class="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                    <div class="h-4 w-24 bg-gray-800 rounded"></div>
                  </div>
                  <div class="flex-1 bg-primary-navy p-4 rounded-lg shadow-sm border border-primary-navy text-white">
                    <div class="w-8 h-8 rounded bg-white/20 mb-3"></div>
                    <div class="h-2 w-16 bg-white/50 rounded mb-2"></div>
                    <div class="h-4 w-24 bg-white rounded"></div>
                  </div>
                </div>
                <!-- Chart Area -->
                <div class="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <div class="h-3 w-32 bg-gray-200 rounded mb-6"></div>
                  <div class="flex items-end gap-2 h-24">
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[30%]"></div>
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[50%]"></div>
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[40%]"></div>
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[70%]"></div>
                    <div class="flex-1 bg-primary-blue rounded-t-sm h-[90%]"></div>
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[60%]"></div>
                    <div class="flex-1 bg-primary-light rounded-t-sm h-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Code Snippet Card -->
            <div class="absolute -left-6 lg:-left-12 top-10 bg-[#0B1626] p-4 rounded-xl shadow-xl border border-gray-800 transform -rotate-2 w-48 hidden sm:block">
              <div class="flex gap-1.5 mb-3">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div class="space-y-2">
                <div class="h-2 w-3/4 bg-gray-600 rounded"></div>
                <div class="h-2 w-1/2 bg-primary-blue rounded"></div>
                <div class="h-2 w-5/6 bg-gray-600 rounded"></div>
                <div class="h-2 w-2/3 bg-gray-600 rounded"></div>
              </div>
            </div>

            <!-- Floating Mobile Mockup -->
            <div class="absolute -right-4 lg:-right-8 -bottom-8 w-40 h-[280px] bg-white rounded-[2rem] shadow-xl border-4 border-gray-800 overflow-hidden transform rotate-2 hidden sm:block">
              <div class="bg-primary-blue h-16 w-full pt-4 px-4 flex flex-col justify-end pb-2">
                <div class="h-2 w-1/2 bg-white/80 rounded mb-1"></div>
                <div class="h-1.5 w-1/3 bg-white/50 rounded"></div>
              </div>
              <div class="p-3 flex flex-col gap-3">
                <div class="h-24 w-full bg-gray-100 rounded-lg"></div>
                <div class="flex gap-2">
                  <div class="h-12 flex-1 bg-primary-light rounded-lg"></div>
                  <div class="h-12 flex-1 bg-primary-light rounded-lg"></div>
                </div>
                <div class="space-y-1.5 mt-2">
                  <div class="h-1.5 w-full bg-gray-100 rounded"></div>
                  <div class="h-1.5 w-5/6 bg-gray-100 rounded"></div>
                  <div class="h-1.5 w-4/6 bg-gray-100 rounded"></div>
                </div>
              </div>
              <!-- Home indicator -->
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

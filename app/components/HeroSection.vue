<script setup lang="ts">
import { Play } from '@lucide/vue'
</script>

<template>
  <section class="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
    <!-- Premium Gradient Background & Blobs -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light/40 via-white to-white"></div>
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[100px] animate-blob"></div>
    <div class="absolute bottom-0 left-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-right max-w-2xl mx-auto lg:mx-0 animate-slide-up">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-primary-light shadow-sm text-primary-blue font-bold text-sm mb-8 transition-transform hover:scale-105">
            <span class="relative flex h-2.5 w-2.5 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-blue"></span>
            </span>
            نحوّل الأفكار إلى منتجات رقمية
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-primary-navy leading-[1.15] mb-6 tracking-tight">
            نبني البرمجيات التي تدفع أعمالك إلى <span class="text-transparent bg-clip-text bg-gradient-to-l from-primary-blue to-blue-400">الأمام.</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            نصمم ونطور مواقع ومنصات وتطبيقات رقمية عالية الجودة، من الفكرة الأولى وحتى الإطلاق والنمو.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <AppButton to="#contact" variant="primary" size="lg" class="w-full sm:w-auto min-w-[180px] shadow-glow hover:shadow-glow-lg transition-all">
              ابدأ مشروعك
            </AppButton>
            <AppButton to="#projects" variant="outline" size="lg" class="w-full sm:w-auto min-w-[180px] gap-2 group hover:bg-gray-50 transition-all border-2">
              <div class="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                <Play class="w-4 h-4 text-primary-blue fill-primary-blue ml-0.5" />
              </div>
              شاهد أعمالنا
            </AppButton>
          </div>
        </div>

        <!-- UI Composition Visual -->
        <div class="flex-1 w-full max-w-2xl lg:max-w-none relative mt-10 lg:mt-0 lg:h-[600px] flex items-center justify-center">
          
          <!-- Decorative Background Elements for Mockup -->
          <div class="absolute inset-0 bg-gradient-to-tr from-primary-light/50 to-transparent rounded-full blur-3xl transform -rotate-12 scale-110"></div>
          
          <!-- Main Dashboard Mockup -->
          <div class="relative w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white p-2 transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(23,105,255,0.15)] animate-float z-20">
            <div class="bg-gray-50/50 rounded-xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
              <!-- Header -->
              <div class="h-14 border-b border-gray-200/50 flex items-center px-5 gap-4 bg-white/60">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="text-primary-navy font-bold text-lg ml-2">EDIX Studio</div>
                <div class="hidden sm:flex items-center gap-6 text-xs font-semibold text-gray-400 mx-auto">
                  <span class="text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">Overview</span>
                  <span class="hover:text-gray-600 transition-colors cursor-pointer">Analytics</span>
                  <span class="hover:text-gray-600 transition-colors cursor-pointer">Reports</span>
                </div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-blue-600 shadow-sm mr-auto border-2 border-white"></div>
              </div>
              <!-- Body -->
              <div class="p-6 h-[340px] flex flex-col gap-6 bg-gradient-to-b from-gray-50/30 to-white/30">
                <!-- Top Stats -->
                <div class="flex gap-4">
                  <div class="flex-1 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white">
                    <div class="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4 text-primary-blue">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <div class="h-2 w-16 bg-gray-200 rounded-full mb-3"></div>
                    <div class="h-5 w-24 bg-primary-navy rounded-full"></div>
                  </div>
                  <div class="flex-1 bg-primary-navy p-4 rounded-xl shadow-glow border border-primary-navy/80 relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white backdrop-blur-sm border border-white/10">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </div>
                    <div class="h-2 w-16 bg-white/40 rounded-full mb-3"></div>
                    <div class="h-5 w-24 bg-white rounded-full"></div>
                  </div>
                </div>
                <!-- Chart Area -->
                <div class="flex-1 bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white p-5 flex flex-col">
                  <div class="flex justify-between items-center mb-6">
                     <div class="h-3 w-32 bg-gray-200 rounded-full"></div>
                     <div class="h-6 w-16 bg-primary-light rounded-full border border-primary-blue/10"></div>
                  </div>
                  <div class="flex items-end gap-3 h-full pb-2">
                    <div class="flex-1 bg-primary-light rounded-t-md h-[40%] hover:h-[45%] transition-all duration-300"></div>
                    <div class="flex-1 bg-primary-light rounded-t-md h-[60%] hover:h-[65%] transition-all duration-300"></div>
                    <div class="flex-1 bg-primary-light rounded-t-md h-[50%] hover:h-[55%] transition-all duration-300"></div>
                    <div class="flex-1 bg-primary-light rounded-t-md h-[80%] hover:h-[85%] transition-all duration-300"></div>
                    <div class="flex-1 bg-gradient-to-t from-primary-blue to-blue-400 rounded-t-md h-[100%] shadow-[0_0_15px_rgba(23,105,255,0.4)] relative">
                       <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-navy text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                         +240%
                         <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-navy transform rotate-45"></div>
                       </div>
                    </div>
                    <div class="flex-1 bg-primary-light rounded-t-md h-[70%] hover:h-[75%] transition-all duration-300"></div>
                    <div class="flex-1 bg-primary-light rounded-t-md h-[90%] hover:h-[95%] transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -left-4 lg:-left-12 top-20 bg-[#0B1626]/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-gray-700/50 transform -rotate-3 w-56 hidden sm:block animate-float-delayed z-30 group hover:rotate-0 transition-transform duration-500">
            <div class="flex justify-between items-center mb-4">
              <div class="text-xs text-gray-400 font-mono">App.vue</div>
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
            </div>
            <div class="space-y-2.5 font-mono text-sm">
              <div class="flex gap-2"><span class="text-pink-400">const</span><span class="text-blue-300">build</span><span class="text-gray-400">=</span><span class="text-yellow-200">()</span><span class="text-gray-400">=></span><span class="text-yellow-200">{</span></div>
              <div class="h-2 w-3/4 bg-gray-600/50 rounded ml-4 group-hover:bg-primary-blue/50 transition-colors"></div>
              <div class="h-2 w-1/2 bg-gray-600/50 rounded ml-4"></div>
              <div class="text-yellow-200">}</div>
            </div>
          </div>

          <div class="absolute -right-8 lg:-right-12 -bottom-4 w-48 h-[340px] bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border-[6px] border-[#0B1626] overflow-hidden transform rotate-6 hidden sm:block animate-float z-30 group hover:rotate-0 transition-transform duration-500 hover:shadow-glow-lg">
            <div class="bg-gradient-to-br from-primary-blue to-blue-600 h-24 w-full pt-6 px-5 flex flex-col justify-end pb-4 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div class="h-3 w-2/3 bg-white/90 rounded-full mb-2 relative z-10 shadow-sm"></div>
              <div class="h-2 w-1/3 bg-white/60 rounded-full relative z-10"></div>
            </div>
            <div class="p-4 flex flex-col gap-4">
              <div class="h-28 w-full bg-gray-50 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
                 <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div class="flex gap-3">
                <div class="h-12 flex-1 bg-primary-light/50 rounded-xl border border-primary-blue/5"></div>
                <div class="h-12 flex-1 bg-primary-light/50 rounded-xl border border-primary-blue/5"></div>
              </div>
              <div class="space-y-2.5 mt-2">
                <div class="h-2 w-full bg-gray-100 rounded-full"></div>
                <div class="h-2 w-5/6 bg-gray-100 rounded-full"></div>
                <div class="h-2 w-4/6 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <!-- Home indicator -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

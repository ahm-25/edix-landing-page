<script setup lang="ts">
import { siteConfig } from '~/data/config'
</script>

<template>
  <footer class="bg-[#050A13] text-white pt-20 pb-10 border-t border-gray-800">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand Column -->
        <div class="flex flex-col gap-6">
          <NuxtLink to="/" class="inline-block">
            <!-- Text Logo Placeholder -->
            <span class="text-4xl font-extrabold text-white tracking-tighter">EDIX</span>
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            EDIX شركة تقنية متخصصة في تطوير منصات الويب والتجارة الإلكترونية ومنتجات SaaS والبرمجيات المخصصة.
          </p>
        </div>

        <!-- Company Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold text-white mb-2">الشركة</h3>
          <NuxtLink 
            v-for="item in siteConfig.navigation" 
            :key="item.name" 
            :to="item.href"
            class="text-gray-400 hover:text-white transition-colors w-fit"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Services Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold text-white mb-2">الخدمات</h3>
          <NuxtLink 
            v-for="service in siteConfig.services" 
            :key="service.title" 
            :to="`#services`"
            class="text-gray-400 hover:text-white transition-colors w-fit"
          >
            {{ service.title }}
          </NuxtLink>
        </div>

        <!-- Contact Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold text-white mb-2">تواصل معنا</h3>
          <a :href="`mailto:${siteConfig.contact.email}`" class="text-gray-400 hover:text-white transition-colors w-fit dir-ltr">
            {{ siteConfig.contact.email }}
          </a>
          <a :href="`tel:${siteConfig.contact.phone}`" class="text-gray-400 hover:text-white transition-colors w-fit dir-ltr">
            {{ siteConfig.contact.phone }}
          </a>
          <div class="flex gap-4 mt-2">
            <!-- Simple Social Links Placeholder -->
            <a 
              v-for="social in siteConfig.socials" 
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-blue hover:text-white transition-colors"
              :aria-label="social.name"
            >
              <span class="text-xs font-semibold">{{ social.name[0] }}</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm text-center md:text-right">
          © {{ new Date().getFullYear() }} EDIX. جميع الحقوق محفوظة.
        </p>
        <div class="flex gap-6 text-sm text-gray-500">
          <NuxtLink to="#" class="hover:text-white transition-colors">سياسة الخصوصية</NuxtLink>
          <NuxtLink to="#" class="hover:text-white transition-colors">شروط الاستخدام</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

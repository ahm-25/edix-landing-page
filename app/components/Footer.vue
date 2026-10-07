<script setup lang="ts">
import { siteConfig } from '~/data/config'
import { ref } from 'vue'

const root = ref<HTMLElement | null>(null)

useGsap(root, () => {
  const q = gsap.utils.selector(root.value)
  revealOnScroll(q('.footer-col'), { y: 40, stagger: 0.1 }, root.value)
  revealOnScroll(q('.footer-bottom'), { y: 20, delay: 0.4 }, root.value)
})
</script>
<template>
  <footer ref="root" class="relative bg-[#030712] text-white pt-24 pb-10 overflow-hidden border-t border-gray-800/50">
    <!-- Premium Glow Background -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(23,105,255,0.15),_transparent_70%)] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <!-- Brand Column -->
        <div class="footer-col flex flex-col gap-6">
          <NuxtLink to="/" class="inline-block relative group">
            <!-- Text Logo Placeholder -->
            <span class="text-4xl font-black text-white tracking-tighter relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-blue transition-all duration-300">EDIX</span>
            <div class="absolute inset-0 bg-primary-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </NuxtLink>
          <p class="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
            EDIX شركة تقنية متخصصة في تطوير منصات الويب والتجارة الإلكترونية ومنتجات SaaS والبرمجيات المخصصة.
          </p>
        </div>

        <!-- Company Links -->
        <div class="footer-col flex flex-col gap-4">
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
        <div class="footer-col flex flex-col gap-4">
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
        <div class="footer-col flex flex-col gap-4">
          <h3 class="text-lg font-black text-white mb-2">تواصل معنا</h3>
          <a :href="`mailto:${siteConfig.contact.email}`" class="text-gray-400 font-mono hover:text-primary-blue transition-colors w-fit dir-ltr">
            {{ siteConfig.contact.email }}
          </a>
          <a :href="`tel:${siteConfig.contact.phone}`" class="text-gray-400 font-mono hover:text-primary-blue transition-colors w-fit dir-ltr">
            {{ siteConfig.contact.phone }}
          </a>
          <div class="flex gap-4 mt-2">
            <!-- Simple Social Links Placeholder -->
            <a
              v-for="social in siteConfig.socials"
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(23,105,255,0.4)] hover:-translate-y-1"
              :aria-label="social.name"
            >
              <span class="text-xs font-bold">{{ social.name[0] }}</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
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

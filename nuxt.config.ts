// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Cairo': [400, 500, 600, 700],
      'IBM Plex Sans Arabic': [400, 500, 600, 700],
    },
    display: 'swap'
  },
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      title: 'EDIX — نبني البرمجيات التي تدفع أعمالك إلى الأمام',
      meta: [
        { name: 'description', content: 'EDIX شركة تقنية متخصصة في تطوير منصات الويب والتجارة الإلكترونية ومنتجات SaaS والبرمجيات المخصصة.' }
      ]
    }
  }
})


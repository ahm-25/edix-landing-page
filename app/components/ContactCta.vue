<script setup lang="ts">
// Contact CTA
</script>

<template>
  <section id="contact" class="py-24 bg-primary-light/30">
    <div class="container mx-auto px-4 md:px-8 text-center">
      <div class="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-primary-blue/5 border border-primary-light relative overflow-hidden">
        
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-bold text-primary-navy mb-6">
            لديك فكرة؟ لنبدأ بناءها معًا.
          </h2>
          <p class="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            أخبرنا عن فكرتك وسنساعدك على تحويلها إلى خطوات واضحة ومنتج رقمي قابل للتنفيذ.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppButton to="mailto:hello@edix.com" variant="primary" size="lg" class="w-full sm:w-auto min-w-[200px]">
              ابدأ مشروعك
            </AppButton>
            <AppButton to="tel:+201001234567" variant="secondary" size="lg" class="w-full sm:w-auto min-w-[200px]">
              تواصل معنا
            </AppButton>
          </div>
        </div>
        
        <!-- Decoration -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary-light rounded-full opacity-50 blur-2xl"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-blue/5 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

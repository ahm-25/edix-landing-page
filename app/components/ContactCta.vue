<script setup lang="ts">
import { ref } from 'vue'

const root = ref<HTMLElement | null>(null)

useGsap(root, () => {
  const q = gsap.utils.selector(root.value)

  gsap.timeline({
    defaults: { ease: 'power4.out' },
    scrollTrigger: { trigger: root.value, start: 'top 75%', once: true }
  })
    .from(q('.cta-card'), { autoAlpha: 0, y: 80, scale: 0.9, duration: 1.2 })
    .from(q('.cta-item'), { autoAlpha: 0, y: 30, duration: 0.9, stagger: 0.12, clearProps: 'transform,opacity,visibility' }, 0.35)

  // Decorative blobs breathe with the scroll
  gsap.to(q('.cta-blob'), {
    scale: 1.6,
    rotate: 45,
    ease: 'none',
    stagger: 0.2,
    scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: 1 }
  })
})
</script>

<template>
  <section id="contact" ref="root" class="py-24 bg-primary-light/30">
    <div class="container mx-auto px-4 md:px-8 text-center">
      <div class="cta-card max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-primary-blue/5 border border-primary-light relative overflow-hidden">

        <div class="relative z-10">
          <h2 class="cta-item text-3xl md:text-5xl font-bold text-primary-navy mb-6">
            لديك فكرة؟ لنبدأ بناءها معًا.
          </h2>
          <p class="cta-item text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            أخبرنا عن فكرتك وسنساعدك على تحويلها إلى خطوات واضحة ومنتج رقمي قابل للتنفيذ.
          </p>

          <div class="cta-item flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppButton to="mailto:hello@edix.com" variant="primary" size="lg" class="w-full sm:w-auto min-w-[200px]">
              ابدأ مشروعك
            </AppButton>
            <AppButton to="tel:+201001234567" variant="secondary" size="lg" class="w-full sm:w-auto min-w-[200px]">
              تواصل معنا
            </AppButton>
          </div>
        </div>

        <!-- Decoration -->
        <div class="cta-blob absolute -top-24 -right-24 w-48 h-48 bg-primary-light rounded-full opacity-50 blur-2xl"></div>
        <div class="cta-blob absolute -bottom-24 -left-24 w-64 h-64 bg-primary-blue/5 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

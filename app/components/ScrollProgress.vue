<script setup lang="ts">
import { ref } from 'vue'

const bar = ref<HTMLElement | null>(null)

useGsap(bar, () => {
  gsap.to(bar.value, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 }
  })
})
</script>

<template>
  <div
    ref="bar"
    class="fixed top-0 inset-x-0 h-[3px] z-[60] origin-right scale-x-0 bg-gradient-to-l from-primary-blue to-blue-400 pointer-events-none"
    aria-hidden="true"
  ></div>
</template>

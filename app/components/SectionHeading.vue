<script setup lang="ts">
import { ref } from 'vue'

const root = ref<HTMLElement | null>(null)

useGsap(root, () => {
  revealOnScroll(root.value!.children, { y: 40, stagger: 0.15 })
})

defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div ref="root" :class="['mb-16', centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl']">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-navy mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-gray-500 text-lg md:text-xl leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="['mb-16', centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl']">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-navy mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-gray-500 text-lg md:text-xl leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

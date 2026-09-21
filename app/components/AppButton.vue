<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}>()

const isLink = computed(() => !!props.to || !!props.href)
const component = computed(() => isLink.value ? NuxtLink : 'button')

const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-blue text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
    case 'secondary':
      return 'bg-white text-primary-navy border border-gray-200 hover:border-primary-blue hover:text-primary-blue shadow-sm'
    case 'outline':
      return 'bg-transparent text-primary-blue border border-primary-blue hover:bg-primary-light'
    case 'ghost':
      return 'bg-transparent text-gray-600 hover:text-primary-blue hover:bg-primary-light'
    default:
      return 'bg-primary-blue text-white hover:bg-blue-600'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4 text-lg'
    case 'md':
    default:
      return 'px-6 py-3'
  }
})

</script>

<template>
  <component 
    :is="component" 
    :to="to" 
    :href="href"
    :type="!isLink ? type || 'button' : undefined"
    :class="[baseClasses, variantClasses, sizeClasses]"
  >
    <slot />
  </component>
</template>

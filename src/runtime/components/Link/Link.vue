<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '../Primitive'
import type { NuxtLinkProps } from 'nuxt/app'
import { useUI } from '../../composables/useUI'

export interface Props extends NuxtLinkProps, PrimitiveProps {
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const isLink = computed(() => !!(props.href || props.to))
const { classes, pickedProps } = useUI('Link', props)
</script>

<template>
  <NuxtLink
    v-if="isLink"
    v-bind="pickedProps"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <Primitive
    v-else
    v-bind="pickedProps"
    :class="classes"
  >
    <slot />
  </Primitive>
</template>

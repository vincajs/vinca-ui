<script setup lang="ts">
import { useForwardProps } from 'radix-vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import type { NuxtLinkProps } from '#app/components/nuxt-link'
import { tv } from 'tailwind-variants'

export interface Props extends NuxtLinkProps, PrimitiveProps {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'NuxtLink',
})

const forwarded = useForwardProps(props)

const classes = tv({
  base: '',
  variants: {
    disabled: {
      true: 'cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <NuxtLink
    v-if="as === 'NuxtLink'"
    v-bind="forwarded"
    :class="classes({ disabled })"
  >
    <slot />
  </NuxtLink>
  <Primitive
    v-else
    v-bind="forwarded"
  >
    <slot />
  </Primitive>
</template>

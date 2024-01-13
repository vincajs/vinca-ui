<script setup lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { LinkProps } from '../Link'
import { Link } from '../Link'
import { useForwardProps } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { classes } from '.'

type Variants = VariantProps<typeof classes>

export interface Props extends LinkProps {
  type?: string
  color?: Variants['color']
  variant?: Variants['variant']
  size?: Variants['size']
  block?: boolean
  label?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  as: 'button',
})

const forwarded = useForwardProps(reactiveOmit(props, 'disabled', 'loading'))
</script>

<template>
  <Link
    :disabled="disabled || loading"
    v-bind="forwarded"
    :class="classes({ color, variant, size, loading, disabled, class: $attrs.class as string })"
  >
    <slot name="prepend" />
    <slot>
      <span v-if="label">
        {{ label }}
      </span>
    </slot>
    <slot name="append" />
  </Link>
</template>

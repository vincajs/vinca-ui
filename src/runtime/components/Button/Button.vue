<script setup lang="ts">
import { computed } from 'vue'
import type { VariantProps } from 'tailwind-variants'
import type { LinkProps } from '../Link'
import { Link } from '../Link'
import { Icon } from '../Icon'
import { useForwardProps } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { useUI } from '#ui/composables/useUI'

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  as: 'button',
})

const { classes } = useUI('button', props.ui)

const prefixIcon = computed(() => {
  if (props.loading) {
    return classes.defaultVariants?.loadingIcon
  }

  return props.icon
})

type Variants = VariantProps<typeof classes>

export interface Props extends LinkProps {
  type?: string
  color?: Variants['color']
  variant?: Variants['variant']
  size?: Variants['size']
  icon?: string
  block?: boolean
  label?: string
  loading?: boolean
}

const forwarded = useForwardProps(reactiveOmit(props, 'disabled', 'loading'))
</script>

<template>
  <Link
    :disabled="disabled || loading"
    v-bind="forwarded"
    :class="classes({ color, variant, size, loading, disabled, class: props.class })"
  >
    <slot name="prefix">
      <Icon
        v-if="loading && prefixIcon"
        :name="prefixIcon"
        aria-hidden="true"
      />
    </slot>
    <slot>
      <template v-if="label">
        {{ label }}
      </template>
    </slot>
    <slot name="suffix" />
  </Link>
</template>

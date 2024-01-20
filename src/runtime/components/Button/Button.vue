<script setup lang="ts">
import { computed } from 'vue'
import { Link, type LinkProps } from '../Link'
import { Icon } from '../Icon'
import { useForwardProps } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { useUI } from '#ui/composables/useUI'
import type { ButtonVariantProps } from '#ui/presets/vinca'

export interface Props extends LinkProps {
  type?: string
  color?: ButtonVariantProps['color']
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  icon?: string
  block?: boolean
  label?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  as: 'button',
  variant: 'filled',
  color: 'default',
  size: 'md',
})
const forwarded = useForwardProps(reactiveOmit(props, 'variant', 'color', 'size', 'disabled', 'loading', 'class'))

const { ui } = useUI('button', props.ui)

const { base, loadingIcon } = ui()

const prefixIcon = computed(() => {
  if (props.loading) {
    return loadingIcon()
  }

  return props.icon
})
</script>

<template>
  <Link
    :disabled="disabled || loading"
    v-bind="forwarded"
    :class="base({ variant, color, size, loading, disabled, class: props.class })"
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

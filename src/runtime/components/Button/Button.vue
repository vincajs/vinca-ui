<script setup lang="ts">
import { computed } from 'vue'
import type { VariantProps } from '#ui/utils/tv'
import { Link, type LinkProps } from '../Link'
import { Icon } from '../Icon'
import { useForwardProps } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { useUI } from '#ui/composables/useUI'

type Variants = VariantProps<typeof ui>

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

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  as: 'button',
})

const { ui } = useUI('button', props.ui)

const prefixIcon = computed(() => {
  if (props.loading) {
    return ui.defaultVariants?.loadingIcon
  }

  return props.icon
})

const forwarded = useForwardProps(reactiveOmit(props, 'disabled', 'loading'))
</script>

<template>
  <Link
    :disabled="disabled || loading"
    v-bind="forwarded"
    :class="ui({ color, variant, size, loading, disabled, class: props.class })"
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

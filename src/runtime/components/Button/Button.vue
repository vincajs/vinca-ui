<script setup lang="ts">
import { Link, type LinkProps } from '../Link'
import { useUI } from '../../composables/useUI'

export interface Props extends LinkProps {
  type?: string
  color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  block?: boolean
  label?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'filled',
  color: 'default',
  size: 'md',
})

const { classes, pickedProps } = useUI('Button', props, 'disabled', 'loading')
</script>

<template>
  <Link
    :disabled="disabled || loading"
    v-bind="pickedProps"
    :class="classes"
  >
    <slot>
      <template v-if="label">
        {{ label }}
      </template>
    </slot>
  </Link>
</template>

<script setup lang="ts">
import { CheckboxIndicator, type CheckboxIndicatorProps } from 'radix-vue'

import type { PrimitiveProps } from '../Primitive'
import { Icon } from '../Icon'
import { tv } from 'tailwind-variants'

export interface Props extends CheckboxIndicatorProps, PrimitiveProps {
  checked?: boolean | 'indeterminate'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'i-material-symbols:check-small',
})

const classes = tv({
  base: [
    'h-full w-full flex items-center justify-center text-current',
  ],
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <CheckboxIndicator
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <Icon
      :name="checked === 'indeterminate' ? 'i-material-symbols:check-indeterminate-small' : icon"
      class="text-lg"
    />
  </CheckboxIndicator>
</template>

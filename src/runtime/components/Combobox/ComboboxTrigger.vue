<script setup lang="ts">
import { ComboboxTrigger, type ComboboxTriggerProps } from 'radix-vue'

import type { PrimitiveProps } from '../Primitive'
import { Icon } from '../Icon'
import { tv } from 'tailwind-variants'

export interface Props extends ComboboxTriggerProps, PrimitiveProps {}

const props = defineProps<Props>()

const classes = tv({
  base: [
    '',
  ],
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <ComboboxTrigger
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <slot>
      <Icon
        name="i-material-symbols:keyboard-arrow-down"
        class="transition-transform group-data-[state=open]:rotate-180"
      />
    </slot>
  </ComboboxTrigger>
</template>

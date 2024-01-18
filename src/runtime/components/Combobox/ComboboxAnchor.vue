<script setup lang="ts">
import { ComboboxAnchor, type ComboboxAnchorProps } from 'radix-vue'
import { ComboboxInput, ComboboxTrigger } from '../Combobox'

import type { PrimitiveProps } from '../Primitive'
import { tv } from 'tailwind-variants'

export interface Props extends ComboboxAnchorProps, PrimitiveProps {}

const props = defineProps<Props>()

const classes = tv({
  base: [
    'text-grass11 hover:bg-mauve3 data-[placeholder]:text-grass9 h-[35px] min-w-[160px] inline-flex items-center justify-between gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black',
  ],
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <ComboboxAnchor
    v-bind="props"
    :class="classes({ class: props.class })"
  >
    <slot name="input">
      <ComboboxInput />
    </slot>
    <slot name="trigger">
      <ComboboxTrigger />
    </slot>
  </ComboboxAnchor>
</template>

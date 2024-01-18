<script setup lang="ts">
import { ComboboxRoot, type ComboboxRootEmits, type ComboboxRootProps, useForwardPropsEmits } from 'radix-vue'

import { ComboboxAnchor, type ComboboxAnchorProps } from '../Combobox'
import { tv } from 'tailwind-variants'

export interface Props extends ComboboxRootProps, ComboboxAnchorProps {}
export interface Emits extends ComboboxRootEmits {}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()

const forwarded = useForwardPropsEmits(props, emits)

const classes = tv({
  base: [
    'size-5 shrink-0 rounded border border-base-foreground',
    'data-[state=checked]:(bg-base-foreground text-base)',
    'data-[state=unchecked]:(bg-transparent text-base-foreground)',
    'data-[state=indeterminate]:(bg-base-foreground/80 border-base-foreground/0 text-base)',
  ],
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :class="classes({ disabled, class: props.class })"
  >
    <slot name="anchor">
      <ComboboxAnchor />
    </slot>
  </ComboboxRoot>
</template>

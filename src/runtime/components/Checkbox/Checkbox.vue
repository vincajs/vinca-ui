<script setup lang="ts">
import { CheckboxRoot, type CheckboxRootEmits, type CheckboxRootProps, useForwardPropsEmits } from 'radix-vue'

import { CheckboxIndicator, type CheckboxIndicatorProps } from '../Checkbox'
import { tv } from 'tailwind-variants'

export interface Props extends CheckboxRootProps, CheckboxIndicatorProps {}
export interface Emits extends CheckboxRootEmits {}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()

const forwarded = useForwardPropsEmits(props, emits)

const classes = tv({
  base: [
    'size-5 shrink-0 rounded border border-default-foreground',
    'data-[state=checked]:(bg-default-foreground text-default)',
    'data-[state=unchecked]:(bg-transparent text-default-foreground)',
    'data-[state=indeterminate]:(bg-default-foreground/80 border-default-foreground/0 text-default)',
  ],
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="classes({ disabled, class: props.class })"
  >
    <slot>
      <CheckboxIndicator
        :checked="checked"
        :icon="icon"
      />
    </slot>
  </CheckboxRoot>
</template>

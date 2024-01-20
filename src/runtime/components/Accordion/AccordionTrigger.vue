<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { Icon } from '../Icon'
import { tv } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends AccordionTriggerProps, PrimitiveProps {
  title?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

const classes = tv({
  base: [
    'group flex-1 justify-between rounded-none',
    'data-[state=open]:bg-default-300 hover:bg-default-300/90 active:bg-default/85',
  ],
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="{ ...props, ...$attrs }"
      :class="[classes({ class: props.class })]"
    >
      <slot>{{ title }}</slot>
      <Icon
        name="i-material-symbols:keyboard-arrow-down"
        class="transition-transform group-data-[state=open]:rotate-180"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>

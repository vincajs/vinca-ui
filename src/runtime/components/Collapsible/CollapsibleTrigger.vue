<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps } from 'radix-vue'
import { classes as buttonClasses } from '../Button'
import { Icon } from '../Icon'
import { tv } from 'tailwind-variants'
import { reactiveOmit } from '@vueuse/core'
import type { PrimitiveProps } from '../Primitive'

export interface Props extends CollapsibleTriggerProps, PrimitiveProps {
  title?: string
}

const props = defineProps<Props>()

const classes = tv({
  extend: buttonClasses,
  base: [
    'flex group flex-1 justify-between rounded-none',
    'data-[state=open]:bg-default-300 hover:bg-default-300/90 active:bg-default/85',
  ],
})
</script>

<template>
  <CollapsibleTrigger
    v-bind="{ ...props, ...reactiveOmit($attrs, 'class') }"
    :class="classes({ class: props.class })"
  >
    <slot>{{ title }}</slot>
    <Icon
      name="i-material-symbols:keyboard-arrow-down"
      class="transition-transform group-data-[state=open]:rotate-180"
    />
  </CollapsibleTrigger>
</template>

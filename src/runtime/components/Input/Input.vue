<script setup lang="ts">
import type { PrimitiveProps } from '../Primitive'
import type { InputVariantProps } from '#ui/presets/vinca'
import { useUI } from '#ui/composables/useUI'

export interface Props extends PrimitiveProps {
  type?: string
  variant?: InputVariantProps['variant']
  size?: InputVariantProps['size']
}

const props = defineProps<Props>()

const model = defineModel<string | number>()

const { ui } = useUI('input', props.ui)

const { base, input } = ui()
</script>

<template>
  <div :class="base({ size, class: props.class })">
    <slot
      name="prefix"
    />
    <input
      v-bind="props"
      v-model="model"
      :class="input()"
    >
    <slot
      name="suffix"
    />
  </div>
</template>

<script setup lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { PrimitiveProps } from '../Primitive'

type Variants = VariantProps<typeof classes>

export interface Props extends PrimitiveProps {
  type?: string
  color?: Variants['color']
  variant?: Variants['variant']
  size?: Variants['size']
}

const props = defineProps<Props>()

const model = defineModel<string | number>()

const { base, input, prefix, suffix } = classes()
</script>

<template>
  <div :class="base({ size, variant, class: props.class })">
    <slot
      name="prefix"
      :class="prefix()"
    />
    <input
      v-bind="props"
      v-model="model"
      :class="input()"
    >
    <slot
      name="suffix"
      :class="suffix()"
    />
  </div>
</template>

<script lang="ts" setup="">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Colors</h1>
      <div class="flex items-center gap-4">
        <VButton>Default</VButton>
        <VButton color="neutral">
          Neutral
        </VButton>
        <VButton color="primary">
          Primary
        </VButton>
        <VButton color="secondary">
          Secondary
        </VButton>
        <VButton color="accent">
          Accent
        </VButton>
        <VButton color="info">
          Info
        </VButton>
        <VButton color="success">
          Success
        </VButton>
        <VButton color="warning">
          Warning
        </VButton>
        <VButton color="error">
          Error
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Variants</h1>
      <div class="flex items-center gap-4">
        <VButton>
          Default
        </VButton>
        <VButton variant="outline">
          Outline
        </VButton>
        <VButton variant="ghost">
          Ghost
        </VButton>
        <VButton variant="link">
          Link
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Sizes</h1>
      <div class="flex items-center gap-4">
        <VButton size="xs">
          Button
        </VButton>
        <VButton size="sm">
          Button
        </VButton>
        <VButton size="md">
          Button
        </VButton>
        <VButton size="lg">
          Button
        </VButton>
        <VButton size="xl">
          Button
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>State</h1>
      <div class="flex items-center gap-4">
        <VButton loading>
          Loading
        </VButton>
        <VButton disabled>
          Disabled
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>preset</h1>
      <div class="flex items-center gap-4">
        <VButton>
          Button
        </VButton>
        <VButton :ui="{ base: 'rounded-sm' }">
          Button
        </VButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup="">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Filled</h1>
      <div class="flex items-center gap-4">
        <VButton>Default</VButton>
        <VButton color="primary">
          Primary
        </VButton>
        <VButton color="secondary">
          Secondary
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
      <h1>Outlined</h1>
      <div class="flex items-center gap-4">
        <VButton variant="outlined">
          Default
        </VButton>
        <VButton
          variant="outlined"
          color="primary"
        >
          Primary
        </VButton>
        <VButton
          variant="outlined"
          color="secondary"
        >
          Secondary
        </VButton>
        <VButton
          variant="outlined"
          color="info"
        >
          Info
        </VButton>
        <VButton
          variant="outlined"
          color="success"
        >
          Success
        </VButton>
        <VButton
          variant="outlined"
          color="warning"
        >
          Warning
        </VButton>
        <VButton
          variant="outlined"
          color="error"
        >
          Error
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Text</h1>
      <div class="flex items-center gap-4">
        <VButton variant="text">
          Default
        </VButton>
        <VButton
          variant="text"
          color="primary"
        >
          Primary
        </VButton>
        <VButton
          variant="text"
          color="secondary"
        >
          Secondary
        </VButton>
        <VButton
          variant="text"
          color="info"
        >
          Info
        </VButton>
        <VButton
          variant="text"
          color="success"
        >
          Success
        </VButton>
        <VButton
          variant="text"
          color="warning"
        >
          Warning
        </VButton>
        <VButton
          variant="text"
          color="error"
        >
          Error
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
      <h1>Disabled</h1>
      <div class="flex items-center gap-4">
        <VButton disabled>
          Default
        </VButton>
        <VButton
          disabled
          color="primary"
        >
          Primary
        </VButton>
        <VButton
          disabled
          color="secondary"
        >
          Secondary
        </VButton>
        <VButton
          disabled
          color="info"
        >
          Info
        </VButton>
        <VButton
          disabled
          color="success"
        >
          Success
        </VButton>
        <VButton
          disabled
          color="warning"
        >
          Warning
        </VButton>
        <VButton
          disabled
          color="error"
        >
          Error
        </VButton>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Loading</h1>
      <div class="flex items-center gap-4">
        <VButton loading>
          Default
        </VButton>
        <VButton
          loading
          color="primary"
        >
          Primary
        </VButton>
        <VButton
          loading
          color="secondary"
        >
          Secondary
        </VButton>
        <VButton
          loading
          color="info"
        >
          Info
        </VButton>
        <VButton
          loading
          color="success"
        >
          Success
        </VButton>
        <VButton
          loading
          color="warning"
        >
          Warning
        </VButton>
        <VButton
          loading
          color="error"
        >
          Error
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

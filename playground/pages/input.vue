<script setup lang="ts">
const input = ref('123')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Sizes</h1>
      <div class="flex items-center gap-4">
        <VInput
          v-model="input"
          size="xs"
        />
        <VInput
          v-model="input"
          size="sm"
        />
        <VInput
          v-model="input"
          size="md"
        />
        <VInput
          v-model="input"
          size="lg"
        />
        <VInput
          v-model="input"
          size="xl"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VInput v-model="input">
          <template #prefix>
            <VIcon name="i-mdi-user" />
          </template>
          <template #suffix>
            <VIcon name="i-mdi-user" />
          </template>
        </VInput>
      </div>
    </div>
  </div>
</template>

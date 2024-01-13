<script lang="ts" setup="">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VLink to="/">
          Default
        </VLink>
        <VLink
          to="/"
          disabled
        >
          Disable
        </VLink>
      </div>
    </div>
  </div>
</template>

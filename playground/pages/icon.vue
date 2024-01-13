<script lang="ts" setup="">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VIcon
          name="i-gg-chevron-down"
        >
          Default
        </VIcon>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Dynamic</h1>
      <div class="flex items-center gap-4">
        <VIcon
          name="i-uil-github"
          dynamic
        >
          Default
        </VIcon>
      </div>
    </div>
  </div>
</template>

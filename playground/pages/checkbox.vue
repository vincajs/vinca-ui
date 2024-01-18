<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VCheckbox
          :checked="true"
        />
        true
        <VCheckbox
          :checked="false"
        />
        false
        <VCheckbox
          checked="indeterminate"
        />
        indeterminate
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1>Default</h1>
      <div class="flex items-center gap-4">
        <VCheckbox
          :checked="true"
          disabled
        />
        true
        <VCheckbox
          :checked="false"
          disabled
        />
        false
        <VCheckbox
          checked="indeterminate"
          disabled
        />
        indeterminate
      </div>
    </div>
  </div>
</template>

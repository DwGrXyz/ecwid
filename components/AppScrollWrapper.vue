<script setup lang="ts">
defineProps<{
  minWidth: string;
}>();
</script>

<template>
  <div class="overflow-x-auto pb-2">
    <div :style="{ minWidth }">
      <slot />
    </div>
  </div>
</template>

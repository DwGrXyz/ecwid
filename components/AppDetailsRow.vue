<script setup lang="ts">
defineProps<{
  label: string;
  value?: string;
}>();
</script>

<template>
  <div class="mt-2">
    <h4 class="text-decoration-underline">{{ label }}</h4>
    <slot>{{ value }}</slot>
  </div>
</template>

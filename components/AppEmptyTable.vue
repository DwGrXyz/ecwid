<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <v-alert>
    <div class="text-center overflow-auto pa-6">
      <h4>{{ text }}</h4>

      <div class="mt-2">
        <slot />
      </div>
    </div>
  </v-alert>
</template>

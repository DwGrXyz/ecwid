<script setup lang="ts">
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

const route = useRoute();

const { data: product } = useAppFetch<AppProduct>(
  `/products/${route.params.id}`
);
</script>

<template>
  <div>
    {{ product?.name }}
  </div>
</template>

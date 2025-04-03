<script setup lang="ts">
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

const route = useRoute();

const { data: product } = await useAppFetch<AppProduct>(
  `/products/${route.params.id}`
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}
</script>

<template>
  <div>
    {{ product?.name }}
  </div>
</template>

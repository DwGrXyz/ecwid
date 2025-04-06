<script setup lang="ts">
import AppDetailsRow from "@/components/AppDetailsRow.vue";
import { fetchAppProduct } from "@/api/productApi";

const route = useRoute();
const productId = computed(() => Number(route.params.id));

const { data: product } = await fetchAppProduct(productId.value);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}
</script>

<template>
  <div>
    <h3>{{ product?.name }}</h3>

    <div>
      <AppDetailsRow label="Name:" :value="product?.name" />

      <AppDetailsRow label="Image:">
        <NuxtImg :src="product?.imageUrl" />
      </AppDetailsRow>

      <AppDetailsRow label="Description:">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="product?.description" />
      </AppDetailsRow>

      <AppDetailsRow
        label="Price:"
        :value="product?.defaultDisplayedPriceFormatted"
      />
    </div>

    <AppProductBuyButton :id="productId" class="mt-4" />
  </div>
</template>

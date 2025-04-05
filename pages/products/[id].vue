<script setup lang="ts">
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

const route = useRoute();

const productId = computed(() => Number(route.params.id));

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
    <h3>{{ product?.name }}</h3>

    <v-table class="mt-4" density="comfortable">
      <tbody>
        <tr>
          <td>Name</td>
          <td>{{ product?.name }}</td>
        </tr>

        <tr>
          <td>Description</td>
          <td v-html="product?.description" />
        </tr>

        <tr>
          <td>Price</td>
          <td>
            <div class="d-flex align-center ga-4">
              <span v-text="product?.defaultDisplayedPriceFormatted" />
              <AppProductBuyButton :id="productId" />
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

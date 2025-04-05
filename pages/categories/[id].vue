<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";
import { useCartStore } from "@/stores/cart";

const route = useRoute();

const { data: category } = await useAppFetch<AppCategory>(
  `/categories/${route.params.id}`
);
const { data: products } = await useAppFetch<AppPaginatedList<AppProduct>>(
  "/products",
  { params: { category: route.params.id } }
);

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category not found",
  });
}

const cartStore = useCartStore();
const addToCart = (productId: number) => cartStore.addProduct(productId);
</script>

<template>
  <div>
    <h3>{{ category?.name }}</h3>

    <v-table class="mt-4">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products?.items" :key="product.id">
          <td>
            <NuxtLink :to="`/products/${product.id}`">
              {{ product.name }}
            </NuxtLink>
          </td>
          <td>{{ product.defaultDisplayedPriceFormatted }}</td>
          <td>
            <v-btn color="success" @click="addToCart(product.id)">Buy</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

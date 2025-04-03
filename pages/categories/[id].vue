<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

const route = useRoute();

const { data: category } = useAppFetch<AppCategory>(
  `/categories/${route.params.id}`
);
const { data: products } = useAppFetch<AppPaginatedList<AppProduct>>(
  "/products",
  { params: { category: route.params.id } }
);
</script>

<template>
  <div>
    {{ category?.name }}

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
          <td>Buy</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

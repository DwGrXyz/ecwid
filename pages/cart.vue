<script setup lang="ts">
import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const { data: products } = await useAppFetch<AppPaginatedList<AppProduct>>(
  "/products",
  { params: { productId: cartStore.productIds.join(",") } }
);
</script>

<template>
  <div>
    <h3>Cart</h3>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Amount</th>
          <th />
        </tr>
      </thead>

      <tbody>
        <template v-for="product in products?.items" :key="product.id">
          <tr v-if="cartStore.list[product.id]">
            <td>
              <NuxtLink :to="`/products/${product.id}`">
                {{ product.name }}
              </NuxtLink>
            </td>
            <td>{{ cartStore.list[product.id] }}</td>
            <td>
              <v-btn
                color="error"
                @click.prevent="cartStore.removeProduct(product.id)"
              >
                Delete
              </v-btn>
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>
  </div>
</template>

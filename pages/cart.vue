<script setup lang="ts">
import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";

import { useCartStore } from "@/stores/cart";
import AppEmptyTable from "~/components/AppEmptyTable.vue";

const cartStore = useCartStore();
const { data: products } = await useAppFetch<AppPaginatedList<AppProduct>>(
  "/products",
  { params: { productId: cartStore.productIds.join(",") } }
);

const success = ref(false);
const placeOrder = () => {
  cartStore.clear();
  success.value = true;
};
</script>

<template>
  <div>
    <h3>Cart</h3>

    <v-alert
      v-if="success"
      class="mt-4"
      text="Thank's for the purchase!"
      color="success"
    />

    <AppEmptyTable
      v-else-if="!cartStore.productIds.length"
      class="mt-4"
      text="Cart is empty"
    >
      <v-btn to="/categories" text="Catalogue" />
    </AppEmptyTable>

    <template v-else>
      <v-table class="mt-4">
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
                  text="Delete"
                  @click.prevent="cartStore.removeProduct(product.id)"
                />
              </td>
            </tr>
          </template>
        </tbody>
      </v-table>

      <v-btn
        class="mt-4"
        text="Place order"
        color="success"
        @click.prevent="placeOrder"
      />
    </template>
  </div>
</template>

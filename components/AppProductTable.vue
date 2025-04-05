<script setup lang="ts">
import type { AppProduct } from "@/models/appProduct";
import AppScrollWrapper from "~/components/AppScrollWrapper.vue";

defineProps<{
  products: AppProduct[];
}>();
</script>

<template>
  <AppScrollWrapper min-width="500px">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left" />
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <NuxtLink :to="`/products/${product.id}`">
              {{ product.name }}
            </NuxtLink>
          </td>
          <td class="text-no-wrap">
            {{ product.defaultDisplayedPriceFormatted }}
          </td>
          <td>
            <AppProductBuyButton :id="product.id" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </AppScrollWrapper>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import AppEmptyTable from "@/components/AppEmptyTable.vue";
import AppScrollWrapper from "@/components/AppScrollWrapper.vue";
import { fetchAppProducts } from "@/api/productApi";

const cartStore = useCartStore();
const { data: products } = await fetchAppProducts({
  productIds: cartStore.productIds,
});

const success = ref(false);
const placeOrder = () => {
  cartStore.clear();
  success.value = true;
};
</script>

<template>
  <div>
    <h3>Shopping cart</h3>

    <v-alert
      v-if="success"
      class="mt-4"
      text="Thanks for the purchase!"
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
      <AppScrollWrapper class="mt-4" min-width="500px">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Price</th>
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
                <td class="text-no-wrap">
                  {{ product.defaultDisplayedPriceFormatted }}
                </td>
                <td>{{ cartStore.list[product.id] }}</td>
                <td>
                  <v-btn
                    data-testid="remove-product"
                    color="error"
                    text="Delete"
                    @click.prevent="cartStore.removeProduct(product.id)"
                  />
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>
      </AppScrollWrapper>

      <v-btn
        data-testid="place-order"
        class="mt-4"
        text="Place order"
        color="success"
        @click.prevent="placeOrder"
      />
    </template>
  </div>
</template>

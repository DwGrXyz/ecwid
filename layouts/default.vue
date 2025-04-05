<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div>
    <v-app-bar dense>
      <div class="ml-4 flex-grow-1">
        <NuxtLink to="/">
          <NuxtImg src="/logo.svg" :placeholder="[130, 30]" densities="x1" />
        </NuxtLink>
      </div>

      <v-btn to="/cart" icon>
        <v-badge
          v-if="cartStore.count"
          color="success"
          :content="cartStore.count"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>

        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-4">
      <slot />
    </v-main>
  </div>
</template>

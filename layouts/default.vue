<template>
  <div>
    <v-app-bar dense>
      <div class="ml-4 flex-grow-1">
        <NuxtLink to="/">
          <NuxtImg src="/logo.svg" :placeholder="[130, 30]" densities="x1" />
        </NuxtLink>
      </div>

      <v-btn to="/cart" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-4">
      <slot />
    </v-main>
  </div>
</template>

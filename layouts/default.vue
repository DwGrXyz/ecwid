<template>
  <div>
    <v-app-bar>
      <NuxtImg
        class="ml-4"
        src="/logo.svg"
        :placeholder="[130, 30]"
        densities="x1"
      />
    </v-app-bar>

    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>

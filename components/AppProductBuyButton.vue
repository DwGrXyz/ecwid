<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();
const cartStore = useCartStore();
const addToCart = () => cartStore.addProduct(props.id);
</script>

<template>
  <v-btn color="success" @click="addToCart">Buy</v-btn>
</template>

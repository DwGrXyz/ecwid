<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();

const tooltipShown = ref(false);
const tooltipTimeout = ref();
const hideDelay = 1000;
const clearTooltipTimeout = () => clearTimeout(tooltipTimeout.value);
const showTooltip = () => {
  tooltipShown.value = true;
  clearTooltipTimeout();
  tooltipTimeout.value = setTimeout(
    () => (tooltipShown.value = false),
    hideDelay
  );
};
onBeforeUnmount(clearTooltipTimeout);

const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addProduct(props.id);
  showTooltip();
};
</script>

<template>
  <div class="position-relative">
    <v-tooltip v-model="tooltipShown" :open-on-hover="false">
      <template v-slot:activator="{ props }">
        <v-btn color="success" v-bind="props" @click.prevent="addToCart">
          <span>Buy</span>
        </v-btn>
      </template>

      <span>Added!</span>
    </v-tooltip>
  </div>
</template>

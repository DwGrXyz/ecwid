<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();

const { tooltipShown, showTooltip } = useAppFadingTooltip(1000);

const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addProduct(props.id);
  showTooltip();
};
</script>

<template>
  <div class="position-relative">
    <v-tooltip v-model="tooltipShown" :open-on-hover="false">
      <template #activator="{ props: activatorProps }">
        <v-btn
          text="Buy"
          color="success"
          v-bind="activatorProps"
          @click.prevent="addToCart"
        />
      </template>

      <span>Added!</span>
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
import AppProductTable from "@/components/AppProductTable.vue";
import AppCategoryTable from "@/components/AppCategoryTable.vue";
import { fetchAppCategories, fetchAppCategory } from "@/api/categoryApi";
import { fetchAppProducts } from "@/api/productApi";

const route = useRoute();
const categoryId = computed(() => Number(route.params.id));

const { data: category } = await fetchAppCategory(categoryId.value);

const { data: subCategories } = await fetchAppCategories({
  parent: categoryId.value,
});

const { data: products } = await fetchAppProducts({
  category: categoryId.value,
});

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category not found",
  });
}
</script>

<template>
  <div>
    <h3>{{ category?.name }}</h3>

    <AppEmptyTable
      v-if="!products?.items.length && !subCategories?.items.length"
      class="mt-4"
      text="No products or sub categories found"
    >
      <v-btn to="/categories" text="Catalogue" />
    </AppEmptyTable>

    <template v-else>
      <div v-if="subCategories?.items.length">
        <h4 class="mt-4">Categories</h4>
        <AppCategoryTable :categories="subCategories.items" />
      </div>

      <div v-if="products?.items.length">
        <h4 class="mt-4">Products</h4>
        <AppProductTable :products="products?.items" />
      </div>
    </template>
  </div>
</template>

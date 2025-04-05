<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import type { AppProduct } from "@/models/appProduct";
import { useAppFetch } from "@/composables/useAppFetch";
import AppProductTable from "@/components/AppProductTable.vue";
import AppCategoryTable from "@/components/AppCategoryTable.vue";

const route = useRoute();

const { data: category } = await useAppFetch<AppCategory>(
  `/categories/${route.params.id}`
);

const { data: subCategories } = await useAppFetch<
  AppPaginatedList<AppCategory>
>("/categories", {
  params: { parent: route.params.id },
});

const { data: products } = await useAppFetch<AppPaginatedList<AppProduct>>(
  "/products",
  { params: { category: route.params.id } }
);

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
      v-if="!products?.items.length"
      class="mt-4"
      text="No products found"
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

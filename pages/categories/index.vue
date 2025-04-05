<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import { useAppFetch } from "@/composables/useAppFetch";
import AppEmptyTable from "@/components/AppEmptyTable.vue";
import AppCategoryTable from "@/components/AppCategoryTable.vue";

const { data: categories } = await useAppFetch<AppPaginatedList<AppCategory>>(
  "/categories",
  { params: { responseFileds: "total,items(imageUrl)" } }
);
</script>

<template>
  <div>
    <h3>Categories</h3>

    <AppEmptyTable
      v-if="!categories?.items.length"
      class="mt-4"
      text="No categories found"
    >
      Check this page later
    </AppEmptyTable>

    <AppCategoryTable v-else class="mt-4" :categories="categories.items" />
  </div>
</template>

<script setup lang="ts">
import AppEmptyTable from "@/components/AppEmptyTable.vue";
import AppCategoryTable from "@/components/AppCategoryTable.vue";
import { fetchAppCategories } from "@/api/categoryApi";

const { data: categories } = await fetchAppCategories();
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

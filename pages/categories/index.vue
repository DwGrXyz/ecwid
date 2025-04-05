<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import { useAppFetch } from "@/composables/useAppFetch";
import AppEmptyTable from "~/components/AppEmptyTable.vue";

const { data: categories } =
  await useAppFetch<AppPaginatedList<AppCategory>>("/categories");
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

    <v-table v-else class="mt-4">
      <thead>
        <tr>
          <th class="text-left">Name</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="category in categories?.items" :key="category.id">
          <td>
            <NuxtLink :to="`/categories/${category.id}`">
              {{ category.name }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

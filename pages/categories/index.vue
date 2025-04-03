<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import { useAppFetch } from "@/composables/useAppFetch";

const { data: categories } =
  await useAppFetch<AppPaginatedList<AppCategory>>("/categories");
</script>

<template>
  <div>
    <v-table>
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

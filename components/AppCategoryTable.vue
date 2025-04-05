<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";

defineProps<{
  categories: AppCategory[];
}>();
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="category in categories" :key="category.id">
        <td>
          <NuxtLink :to="`/categories/${category.id}`">
            {{ category.name }}
          </NuxtLink>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import { useAppFetch } from "@/composables/useAppFetch";

const { data } =
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
        <tr v-for="item in data?.items" :key="item.id">
          <td>
            {{ item.name }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

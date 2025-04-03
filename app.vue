<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";
import { useAppFetch } from "./composables/useAppFetch";

const { data } =
  await useAppFetch<AppPaginatedList<AppCategory>>("/categories");
</script>

<template>
  <div>
    LEn = {{ data?.total }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

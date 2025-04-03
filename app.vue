<script setup lang="ts">
import type { AppCategory } from "@/models/appCategory";
import type { AppPaginatedList } from "@/models/appPaginatedList";

const config = useRuntimeConfig();
const { storeId, token } = config.public;
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  baseURL: `https://app.ecwid.com/api/v3/${storeId}`,
};

const { data } = await useFetch<AppPaginatedList<AppCategory>>(
  "/categories",
  options
);
</script>

<template>
  <div>
    LEn = {{ data?.total }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

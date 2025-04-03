<script setup lang="ts">
const config = useRuntimeConfig();
const { storeId, token } = config.public;
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  baseURL: `https://app.ecwid.com/api/v3/${storeId}`,
};

const { data } = await useFetch("/categories", options);
</script>

<template>
  <div>
    LEn = {{ data?.total }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

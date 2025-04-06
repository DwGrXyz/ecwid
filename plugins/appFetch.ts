import { baseAppApiUrl } from "@/api";

// https://nuxt.com/docs/guide/recipes/custom-usefetch
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { storeId, token } = config.public;

  const appFetch = $fetch.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: `${baseAppApiUrl}${storeId}`,
  });

  return {
    provide: {
      appFetch,
    },
  };
});

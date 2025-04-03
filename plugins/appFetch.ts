// https://nuxt.com/docs/guide/recipes/custom-usefetch
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { storeId, token } = config.public;

  const appFetch = $fetch.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: `https://app.ecwid.com/api/v3/${storeId}`,
  });

  return {
    provide: {
      appFetch,
    },
  };
});

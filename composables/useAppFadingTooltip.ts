/*
  v-model="tooltipShown" :open-on-hover="false" on tooltip
  @click.prevent="showTooltip" on activator
*/
export const useAppFadingTooltip = (delay: number) => {
  const tooltipShown = ref(false);
  const tooltipTimeout = ref();
  const clearTooltipTimeout = () => clearTimeout(tooltipTimeout.value);
  const showTooltip = () => {
    tooltipShown.value = true;
    clearTooltipTimeout();
    tooltipTimeout.value = setTimeout(
      () => (tooltipShown.value = false),
      delay
    );
  };
  onBeforeUnmount(clearTooltipTimeout);

  return {
    tooltipShown,
    showTooltip,
  };
};

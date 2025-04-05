type CartState = {
  list: Record<number, number>;
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    list: {},
  }),
  getters: {
    count: (state) =>
      Object.values(state.list).reduce((sum, amount) => sum + amount, 0),
    productIds: (state) => Object.keys(state.list),
  },
  actions: {
    addProduct(productId: number) {
      const amount = this.list[productId] ?? 0;
      this.list[productId] = amount + 1;
    },
  },
  persist: true,
});

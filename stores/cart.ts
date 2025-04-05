type CartState = {
  list: Record<string, number>;
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
    removeProduct(productId: number) {
      const oldEntries = Object.entries(this.list);
      const newEntries = oldEntries.filter(
        ([id]) => id !== productId.toString()
      );
      this.list = Object.fromEntries(newEntries);
    },
  },
  persist: true,
});

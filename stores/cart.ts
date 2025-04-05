type CartState = {
  list: number[];
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    list: [],
  }),
  getters: {
    count: (state) => state.list.length,
  },
  actions: {
    addProduct(productId: number) {
      this.list.push(productId);
    },
  },
  persist: true,
});

type CartState = {
  list: number[];
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    list: [],
  }),
  actions: {
    addProduct(productId: number) {
      this.list.push(productId);
    },
  },
  persist: true,
});

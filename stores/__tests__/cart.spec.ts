import { setActivePinia, createPinia } from "pinia";
import { useCartStore } from "../cart";

describe("cart store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("getters", () => {
    test("count", () => {
      const store = useCartStore();
      expect(store.count).toBe(0);
      store.addProduct(1);
      expect(store.count).toBe(1);
      store.addProduct(1);
      expect(store.count).toBe(2);
      store.addProduct(2);
      expect(store.count).toBe(3);
    });

    test("productIds", () => {
      const store = useCartStore();
      expect(store.productIds).toEqual([]);
      store.addProduct(1);
      expect(store.productIds).toEqual([1]);
      store.addProduct(1);
      expect(store.productIds).toEqual([1]);
      store.addProduct(2);
      expect(store.productIds).toEqual([1, 2]);
    });
  });

  describe("actions", () => {
    test("addProduct", () => {
      const store = useCartStore();
      expect(store.list).toEqual({});
      store.addProduct(1);
      expect(store.list).toEqual({ "1": 1 });
      store.addProduct(1);
      expect(store.list).toEqual({ "1": 2 });
      store.addProduct(2);
      expect(store.list).toEqual({ "1": 2, "2": 1 });
    });

    test("removeProduct", () => {
      const store = useCartStore();
      store.addProduct(1);
      store.addProduct(1);
      store.addProduct(2);

      expect(store.list).toEqual({ "1": 2, "2": 1 });
      store.removeProduct(0);
      expect(store.list).toEqual({ "1": 2, "2": 1 });
      store.removeProduct(1);
      expect(store.list).toEqual({ "2": 1 });
      store.removeProduct(2);
      expect(store.list).toEqual({});
    });

    test("clear", () => {
      const store = useCartStore();
      store.addProduct(1);
      store.addProduct(1);
      store.addProduct(2);

      expect(store.list).toEqual({ "1": 2, "2": 1 });
      store.clear();
      expect(store.list).toEqual({});
    });
  });
});

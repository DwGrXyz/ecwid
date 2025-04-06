import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import Cart from "../cart.vue";
import { baseAppApiUrl } from "@/api";

registerEndpoint(`${baseAppApiUrl}products`, () => {
  return {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  };
});

describe("Cart page", () => {
  test("empty cart", async () => {
    const component = await mountSuspended(Cart);
    expect(component.text()).toContain("Cart is empty");
    expect(component.text()).not.toContain("Place order");
  });

  test("with data", async () => {
    const cartStore = useCartStore();
    cartStore.addProduct(1);
    const component = await mountSuspended(Cart);
    expect(component.text()).not.toContain("Cart is empty");
    expect(component.find("table")).toBeTruthy();
    expect(component.text()).toContain("Place order");
  });

  test("delete product", async () => {
    const cartStore = useCartStore();
    cartStore.addProduct(1);
    const component = await mountSuspended(Cart);
    const removeButton = component.find('[data-testid="remove-product"]');
    await (removeButton.element as HTMLElement).click();
    expect(component.text()).toContain("Cart is empty");
  });
});

import { shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";

describe("ShoppingCart.vue", () => {
  it("should render", () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render 2 product items(buttons)", () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.findAll("button").length).toBe(2);
  });
  it("price, tax and total should be '0.00' to begin", () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.vm.price).toBe("0.00");
    expect(wrapper.vm.tax).toBe("0.00");
    expect(wrapper.vm.total).toBe("0.00");
  });
  it("sales tax exist", () => {
    const wrapper = shallowMount(ShoppingCart);
    expect(wrapper.vm.salesTax).toBeDefined();
    expect(wrapper.vm.salesTax).toBe(12.5);
  });
  it("should add 2 Dove products to the cart", () => {
    const wrapper = shallowMount(ShoppingCart);
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.price).toBe("39.99");
    expect(wrapper.vm.addToCart).toBeDefined();
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.price).toBe("79.98");
  });
  it("should remove an item from the cart", () => {
    const wrapper = shallowMount(ShoppingCart);
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.price).toBe("39.99");
    expect(wrapper.vm.removeItem).toBeDefined();
    wrapper.vm.removeItem();
    expect(wrapper.vm.price).toBe("0.00");
  });
  it("should list 5 Dove products, price, tax, total", () => {
    const wrapper = shallowMount(ShoppingCart);
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.cart.length).toEqual(5);
    expect(wrapper.vm.price).toEqual("199.95");
    expect(wrapper.vm.tax).toEqual("24.99");
    expect(wrapper.vm.total).toEqual("224.94");
  });
  it("should list 5 Dove products plus 3 Axe products, price, tax, total", () => {
    const wrapper = shallowMount(ShoppingCart);
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.cart.length).toEqual(5);
    expect(wrapper.vm.price).toBe("199.95");
    expect(wrapper.vm.tax).toEqual("24.99");
    expect(wrapper.vm.total).toEqual("224.94");
    wrapper.find("button.add-axe-deo").trigger("click");
    wrapper.find("button.add-axe-deo").trigger("click");
    wrapper.find("button.add-axe-deo").trigger("click");
    expect(wrapper.vm.cart.length).toEqual(8);
    expect(wrapper.vm.price).toBe("499.92");
    expect(wrapper.vm.tax).toEqual("62.49");
    expect(wrapper.vm.total).toEqual("562.41");
  });
});

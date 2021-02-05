import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("price, tax and total are '0.00' to begin", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.price).toBe("0.00");
    expect(wrapper.vm.tax).toBe("0.00");
    expect(wrapper.vm.total).toBe("0.00");
  });
  it("should render 2 product items", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.findAll("button").length).toBe(2);
  });
  it("sales tax exist", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.salesTax).toBeDefined();
    expect(wrapper.vm.salesTax).toBe(12.5);
  });
  it("add an item to the cart", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.price).toBe("0.00");
    wrapper.vm.addToCart({ name: "Dove Soap", price: "39.99" });
    expect(wrapper.vm.price).toBe("39.99");
  });
  it("should add an item to the cart", () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.price).toBe("39.99");
    wrapper.find("button.add-dove-soap").trigger("click");
    expect(wrapper.vm.price).toBe("79.98");
  });
  it("should list 5 Dove products, price, tax, total", () => {
    const wrapper = shallowMount(HelloWorld);
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
    const wrapper = shallowMount(HelloWorld);
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

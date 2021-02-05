<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <button :class="`add-${item.slug}`" @click="addToCart(item)">
          {{ item.name }} - R{{ item.price }}
        </button>
      </li>
    </ul>
    <ul>
      <template v-if="cart.length > 0">
        <li
          v-for="(item, index) in cart"
          :key="`${item.slug}-${index}`"
          :class="`item-${item.slug}-${index}`"
        >
          {{ item.name }} - R{{ item.price }}
        </li>
      </template>
      <template v-else>
        <li>This cart is empty, why not spoil yourself?</li>
      </template>
    </ul>
    <h2>price: R{{ price }}</h2>
    <h2>tax: R{{ tax }}</h2>
    <h1>total: R{{ total }}</h1>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    msg: String
  },
  data() {
    return {
      cart: [],
      products: [
        { name: "Dove Soap", slug: "dove-soap", price: "39.99" },
        { name: "Axe", slug: "axe-deo", price: "99.99" }
      ],
      salesTax: 12.5,
      totalTaxAmount: 0.0
    };
  },
  methods: {
    addToCart(item) {
      return this.cart.push(item);
    }
  },
  computed: {
    price() {
      let total = 0;
      this.cart.forEach(product => {
        total += Number(product.price);
      });
      return total.toFixed(2);
    },
    tax() {
      let total = 0;
      total = Number((this.price / 100) * this.salesTax);
      return total.toFixed(2);
    },
    total() {
      return (Number(this.price) + Number(this.tax)).toFixed(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

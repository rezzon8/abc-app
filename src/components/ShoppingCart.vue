<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <button
          :class="`add-${item.slug}`"
          class="btn waves-effect waves-light input-btn btn-large"
          @keyDown="addToCart(item)"
          @click="addToCart(item)"
        >
          {{ item.name }} - R{{ item.price }}
        </button>
      </li>
    </ul>
    <ul class="cart">
      <template v-if="cart.length > 0">
        <li
          v-for="(item, index) in cart"
          :key="`${item.slug}-${index}`"
          :class="`item-${item.slug}-${index}`"
        >
          {{ item.name }} - R{{ item.price }}
          <button
            :class="`remove-${item.slug}`"
            class="btn waves-effect waves-light delete-btn btn-small"
            @keyDown="removeItem(item)"
            @click="removeItem(item)"
          >
            <i class="material-icons">remove</i>
          </button>
        </li>
      </template>
      <template v-else>
        <li>This cart is empty, why not spoil yourself?</li>
      </template>
    </ul>
    <div class="totals-output">
      <h2>items: {{ cart.length }}</h2>
      <h2>price: R{{ price }}</h2>
      <h2>tax: R{{ tax }}</h2>
      <h1>total: R{{ total }}</h1>
    </div>
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
    },
    removeItem(item) {
      return this.cart.pop(item);
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
.cart {
  margin-top: 3rem;
}
.cart li {
  font-size: 2rem !important;
}
.btn.input-btn {
  color: #fff;
  background-color: #095e88;
  font-weight: bold;
}
.btn.delete-btn {
  color: #095e88;
  background-color: #fed800;
  font-weight: bold;
}
.totals-output {
  padding-top: 2.3rem;
}
.totals-output h1 {
  line-height: 1.3rem;
}
.totals-output h2 {
  line-height: 1.3rem;
}
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

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ShoppingCart msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "Home",
  components: {
    ShoppingCart
  }
};
</script>

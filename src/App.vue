<template>
  <div id="app">
    <div>
      <img
        alt="Equal Experts Logo"
        src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
        class="animate__animated animate__tada animate__delay-1s"
      />
    </div>
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  components: {
    ShoppingCart
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

img {
  width: 13rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div id="app">
    <div>
      <img
        alt="Equal Experts Logo"
        src="./assets/logo.svg"
        class="animate__animated animate__tada animate__delay-1s"
      />
    </div>
    <p class="title">The Simple Shopping Cart</p>
    <ShoppingCart />
  </div>
</template>

<script>
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "animate.css/animate.css";
import "material-icons/iconfont/material-icons.css";

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
  padding: 2rem;
  color: #fff;
}
img {
  width: 23.5rem;
}
h1,
.title {
  color: #fed800;
}
.title {
  font-size: 2rem;
  font-weight: bold;
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

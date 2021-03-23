<template>
  <div class="Home">
    <Nav />
    <img alt="Vue logo" src="../assets/images/differenz.png" />
    <Differenz msg="Welcome to Differenz Vue Demo App." />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Differenz from "@/components/Differenz.vue";
export default {
  name: "Home",
  components: {
    Nav,
    Differenz,
  },
};
</script>
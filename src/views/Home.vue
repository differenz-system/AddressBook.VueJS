<template>
  <div class="home">
    <Nav :navArray="['', 'login', 'about', 'register']"/>
    <img 
      alt="Vue logo" 
      src="../assets/images/differenz.png">
    <Differenz msg="Welcome to Differenz Vue Demo App."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Differenz from '@/components/Differenz.vue'

export default {
  name: "Home",
  components: {
    Differenz,
    Nav
  }
};
</script>

<template>
  <div id="nav">
    <div 
      v-for="val in navArray" 
      :key="val">
      <router-link :to="'/'+val">{{ val == '' ? 'Home' : val.charAt(0).toUpperCase() + val.slice(1) }} </router-link> 
    </div>
  </div>    
</template>

<script>
export default {
  name: "Nav",
  props: {
    navArray: {
      type: Array,
      default: new Array()
    }
  }
};
</script>

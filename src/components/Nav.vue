<template>
  <div id="nav">
    <div v-for="(value, key) in navArray" :key="key">
      <router-link :to="key"> {{ value }} </router-link>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Nav",
  props:{
    navArray:{
      type:Object,
      default(){
        return {
        '/': "Home",
        login: "Login",
        about: "About",
        register: "Register",
      }
      }
    }
  },
 
 
};
</script>

<style scoped>
#nav{
  display: flex;
  justify-content: center;
  background-color:#21528B;  
  font-weight: bolder;
  font-size:22px;
  
}  

a{
  margin:5px;
  color:white !important;
}

a.router-link-exact-active{
  color:#42b983 !important;
}
</style>
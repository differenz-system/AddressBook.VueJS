<template>
  <div class="register">
    <Nav :navArray="['', 'login', 'about', 'register']"/>
    <div>
      <h2>Register yoself hommie</h2>
      <input 
        id="mailId" 
        v-model="$store.state.registerPage.email" 
        type="email" 
        placeholder="emailID"
        name="mailId"><br>
      <input 
        id="password" 
        v-model="$store.state.registerPage.password" 
        type="password" 
        placeholder="password" 
        name="password"><br>
      <button @click="submitClicked($store.state.registerPage.email, $store.state.registerPage.password)">Register</button>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Snackbar from '@/components/Snackbar.vue'
export default {
  name: "Register",
  components: {
    Nav
  },
  methods: {
    submitClicked(id, password) {
      if(id=='' || password == '') //if id or password is empty
        Snackbar.methods.openSnackbar('please enter all details.')
      else
        this.$store.dispatch('register').then(() => {
          this.$router.push("/addresslist")
        }).catch(err => {
          console.log(err)
          if(err && err.msg)
            Snackbar.methods.openSnackbar(err.msg)
          else
            Snackbar.methods.openSnackbar('something went wrong.')
        })
    }
  }
};
</script>

<style lang="stylus" scoped>
input
  margin 5px
  text-align center
  font-size 30px
  border-radius 10px
  border-color rgba(0,0,0,0.7)
  border-style solid
button
  font-size 25px
  border none
</style>

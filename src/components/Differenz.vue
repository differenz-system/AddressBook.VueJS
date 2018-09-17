<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/login">Log in</router-link>
    <ul>
      <li><a 
        href="mailTo:team@differenzsystem.com" 
        target="_blank" 
        rel="noopener">Contact Us</a></li>
      <li><a 
        href="https://www.differenzsystem.com/" 
        target="_blank" 
        rel="noopener">Visit our website</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Differenz',
  props: {
    msg: {
      type:String,
      default:''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>

<template>
  <div class="about">
    <button @click="logout">Logout</button>
    <Nav :navArray="['addresslist']"/>
    <h2>Please Enter name</h2>
    <div class="flexbox">
      <input 
        v-model="$store.state.addPage.name" 
        required 
        type="text">
    </div>
    <h2>Please Enter email</h2>
    <div class="flexbox">
      <input 
        v-model="$store.state.addPage.email" 
        required 
        type="email">
    </div>
    <h2>Please Enter mobile number</h2>
    <div class="flexbox">
      <input 
        v-model="$store.state.addPage.contact_number" 
        required 
        type="number">
    </div>
    <br>
    <button 
      v-if="$store.state.addPage.isNew" 
      @click="addContact">Add</button>
    <button 
      v-else
      @click="updateContact({address_id: $route.params.address_id})">Update</button>
    <br>
    <router-link 
      class="cancel" 
      to="/addresslist">Cancel</router-link> 
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import { mapActions } from 'vuex'
export default {
  name: "Add",
  components: {
    Nav
  },
  mounted(){
    /* if its edit page then assign values */
    if(this.$route && this.$route.params && this.$route.params.address_id){
      this.$store.dispatch('retriveDataForEditPage', {address_id: this.$route.params.address_id})
    }else{
      /*if not edit page, make sure to reset data*/
      this.$store.dispatch('clearAddPageData')
    }
  },
  methods: {
    /**
     * added all logical part in actions
     */
    logout(){
      localStorage.removeItem('user_id')
      this.$router.replace('/')
    },
    updateContact({address_id}){
      this.$store.dispatch('updateContact',{address_id}).then(() => {
        this.$router.push('/addresslist')
      })
    },
    ...mapActions([
        'addContact',
        // 'updateContact'
    ])
  }
}
</script>


<style lang="stylus" scoped>
input
    flex 0.66
    font-size 30px
    text-align center
    border-radius 10px
    border solid
    margin 10px
button, a
    font-size 25px
    border none
    color white
    background-color #008800
    flex 0.66
    border-radius 10px
    margin 5px
.flexbox
    display flex
    align-items center
    justify-content center
    
.cancel
    background none
    color black
</style>

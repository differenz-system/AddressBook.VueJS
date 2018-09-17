<template>
  <div class="addresslist">
    <button 
      class="logout" 
      @click="logout">Logout</button>
    <Nav :navArray="['add']"/>
    <div>
      <h1>Address List</h1>
      <br>
      <div class="flexRow">
        <div 
          v-if="$store.state.addressBook && Array.isArray($store.state.addressBook) && $store.state.addressBook.length>0" 
          id="list" 
          class="flexColumn">
          <div 
            v-for="(val,index) in $store.state.addressBook" 
            id="listItem" 
            :key="index"
            class="list-block">
            <h2>{{ val.name && val.name }}</h2>
            <h3>{{ val.email && val.email }}</h3>
            <h4>{{ val.contact_number && val.contact_number }}</h4>
            <div class="action-button">
              <router-link :to="'/edit/'+val.address_id">Edit</router-link>
              |
              <button @click="deleteComponent(val)">Delete</button>
            </div>
          </div>
        </div>
        <div 
          v-else 
          id="emptyList">
          <h2>Our World Seems Really Empty.</h2>
          <router-link to="add"> Lets Add someone</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'AddressList',
  components: {
    Nav
  },
  mounted(){
    //retrieving data
    this.$store.dispatch('getAddressList')
    // this.$store.dispatch('retriveFromLocalStorage')
  },
  methods: {
    logout(){
      localStorage.removeItem('user_id')
      this.$router.replace('/')
    },
    deleteComponent(val){
      this.$store.dispatch('deleteContact', {contact: val})
    }
  }
}
</script>

<style lang="stylus" scoped>
  #emptyList
    display flex
    justify-content center
    flex-direction column
  #listItem
    background-color #42b983
    margin 10px
    border-radius 50px
    &:hover
      background-color #42b930
  .flexColumn
    display flex
    flex-direction column
    flex 1
    // flex 0.6
  .flexRow
    display flex
    flex-direction row
    justify-content center
  .list-block
    position relative
  .action-button 
    position absolute
    top 13px
    right 25px
  .action-button button 
    padding 5px
    margin 2px
    background none
    border 0
  .logout
    border 1px solid #2c3e50
    background transparent
    padding 5px
    font-weight bold
    color #2c3e50
    font-size 14px
    position absolute
    right 20px
    top 10px
    border-radius 10px
    &:hover
      background-color #2c3e50
      color white
</style>

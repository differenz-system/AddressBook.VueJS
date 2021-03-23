<template>
  <div class="addresslist">
    <button class="logout" @click="logout">Logout</button>
   <Nav :navArray="{'add':'Add'}"/>
    <div class="container">
      <h1>Address List</h1>
      <br />
      <div class="flexRow">
        <div v-if="getAddressList.length" id="list" class="flexColumn">
          <div
            v-for="(val, index) in getAddressList"
            id="listItem"
            :key="index"
            class="list-block"
          >
            <h2>{{ val.name && val.name }}</h2> 
            <h3>{{ val.email && val.email }}</h3>
            <h4>{{ val.contact_number && val.contact_number }}</h4>
            <div class="action-button">
               <router-link :to="'/edit/'+val.address_id">Edit</router-link>
              |
               <button @click="deleteContact(val)">Delete</button>
            </div>
          </div>
        </div>
        <div id="emptyList" v-else  >
          <h2>Our World Seems Really Empty.</h2>
          <router-link to="add"> Lets Add someone</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Snackbar from '@/components/Snackbar.vue';
export default {
  components: {
    Nav,
  },
  data() {
    return {
      addressBook: [],
    };
  },
  computed:{
     getAddressList(){
     return this.$store.state.addressBook;
     }
  },
  mounted(){
    this.getData();
    //this.$store.dispatch('retriveFromLocalStorage')
  },
  methods: {
    getData(){
       this.$store.dispatch('getAddressList',{user_id:this.$store.state.user_id});
    },
    logout() {
      localStorage.removeItem("user_id");
      this.$router.replace("/");
      this.$store.dispatch('clearLoginDetails');
    },

     deleteContact(val){

       this.$store.dispatch('deleteContact', {user_id:this.$store.state.user_id,address_id:val.address_id}).then(()=>{
          Snackbar.methods.openSnackbar('Deleted Successfully')
        }).catch(err=>{
          console.log(err);
          if(err && err.msg){
            Snackbar.methods.openSnackbar(err.msg)
          }
            
          else
            Snackbar.methods.openSnackbar('something went wrong.')
        })
         this.getData();
     
    }
    
  },
};
</script>

<style scoped>

  #emptyList{
    display:flex;
    justify-content :center;
   
    flex-direction :column;

  }
  .container{
    justify-content: center;
  }
    
   
  #listItem{
    border:2px solid grey;
    margin :10px;
    border-radius :30px;
    width:30%;
    padding: 15px;
  }
    
   #listItem :hover{
     background-color :#18406E; 
   }



    
  .flexRow{
    padding-left:40%;
    justify-content :center;
  } 
    
  .list-block{
  position :relative;
  }
  
  .action-button {
    position :absolute;
    top :13px;
    right : 25px;
  }
   
  .action-button button {
    padding :5px;
    margin :2px;
    background: none;
    border: 0;
  }
    
  .logout{
    
   border:none;
    background: none;
    padding :5px;
    font-weight: bold;
    color: white;
    font-size :14px;
    position :absolute;
    right :20px;
    top :5%;
    
    border-bottom: solid 1px white;
  }
    
     .logout:hover{
 background-color: #2c3e50;
      color :white;
     }
     
</style>



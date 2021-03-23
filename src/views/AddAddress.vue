<template>
  <div class="AddAddress">
    <div id="header">
    <button @click="logout">Logout</button>

    <router-link class="addressList" to="/addresslist">AddressList</router-link>
    </div>
    <div class="addBox">
      
       <h1  v-if="$store.state.addPage.isNew">Add Addressbook Data </h1>
      <h1 v-else >Edit Addressbook Data </h1>
    <div class="addItems">
      <input
        required placeholder="Enter name"
        type="text"
        v-model="$store.state.addPage.name"
        name="name"
      /><br/>
   
  
      <input
        required
        placeholder="Enter Email ID"
        type="email"
        v-model="$store.state.addPage.email"
        name="email"
      /><br/>
 
    
   
      <input
        required
        placeholder="Enter Contact No"
        type="number"
        name="contact_number"
        v-model="$store.state.addPage.contact_number"
      />
    <br />
    <button @click="addContact()" v-if="$store.state.addPage.isNew">Add</button>
    <button @click="updateContact()" v-else>Update</button>
    <br />
    <router-link class="cancel" to="/addresslist">Cancel</router-link>
  </div>
    </div>
  </div>
</template>

<script>
import Snackbar from '@/components/Snackbar.vue'
export default {
  name: "AddAddress",
  components: {
  },
  mounted() {
     if(this.$route && this.$route.params && this.$route.params.address_id){
         let address_id= this.$route.params.address_id;
      this.$store.dispatch('retriveDataForEditPage', address_id)
    }else{
      /*if not edit page, make sure to reset data*/
      this.$store.dispatch('clearAddPageData')
    }
    // /* if its edit page then assign values */
    // if(this.$route && this.$route.params && this.$route.params.address_id){
    //   this.$store.dispatch('retriveDataForEditPage', {address_id: this.$route.params.address_id})
    // }else{
    //   /*if not edit page, make sure to reset data*/
    //   this.$store.dispatch('clearAddPageData')
    // }
  },
  methods: {
    updateContact(){ 
      if (this.$store.state.addPage.email == '' || this.$store.state.addPage.contact_number == '' || this.$store.state.addPage.name == '') {
         Snackbar.methods.openSnackbar('Enter all details')
      } else {
        let payload = {
          email: this.$store.state.addPage.email,
          contact_number: this.$store.state.addPage.contact_number,
          name:this.$store.state.addPage.name,
          is_active:true,
         
        };
         this.$store.dispatch('updateContact',{ address_id:this.$route.params.address_id,user_id:this.$store.state.user_id,payload}).then(() => {
        Snackbar.methods.openSnackbar('Updated Successfully')
         this.$router.push('/addresslist')
       })
      }
    },
    addContact(){
          
       if (this.$store.state.addPage.email == '' || this.$store.state.addPage.contact_number == '' || this.$store.state.addPage.name == '') {

      Snackbar.methods.openSnackbar('Enter all details')
    } else {
        let payload = {
          email: this.$store.state.addPage.email,
          contact_number: this.$store.state.addPage.contact_number,
          name:this.$store.state.addPage.name,
          user_id:this.$store.state.user_id,
          is_active:true,
        };
      this.$store.dispatch('addContact',{payload}).then(()=>{
          Snackbar.methods.openSnackbar('User added successfully')
        }).catch(err=>{
          console.log(err);
          if(err && err.msg)
            Snackbar.methods.openSnackbar(err.msg)
          else
            Snackbar.methods.openSnackbar('something went wrong.')
        })
      }
    },
    /**
     * added all logical part in actions
     */
    
    logout() {
      localStorage.removeItem("user_id");
      this.$router.replace("/");
      this.$store.dispatch('CLEAR_LOGIN_DETAILS');
    },
    
    // ...mapActions([
    //     'addContact',
    //     // 'updateContact'
    // ])
  },
};
</script>


<style scoped>

.addBox{
  border:solid 0.3px grey;
  justify-content: center;
  width: 40%;
  height: 40%;
  margin-top:5%;
  margin-left:25%;
  padding:2%;
}

.AddAddress{
  justify-content: center;
   
}
.addItems{
  padding:5%;
  
}

input{
  margin:7px;
  
  font-size:20px;
  border:none;
  border-bottom: solid 1px grey;
}

.addItems button{
  font-size:20px;
  border:none;
  background-color: #21528B;
  padding:2%;
  width:max-content;
  color:white;
  margin:2px;
}

.addItems a{
  color:#21528B !important;
  font-weight: bold;
}


.cancel {
  background: none;
  color: black;
}

#header{
  display: flex;
  justify-content: center;
  background-color:#21528B;  
  font-weight: bolder;
  font-size:22px;
  
}  

#header a{
  color:white !important;
}

#header button{
  background: none;
  color:white;
  border:none;
  font-weight: bolder;
  font-size:22px;
}
</style>

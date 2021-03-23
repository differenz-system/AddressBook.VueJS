<template>
  <div class="login">
    <Nav />
     <div class="loginBox" >
    <h1>Login</h1>
    <div class="loginItems">
      <input type="text" name="email" v-model="email" placeholder="Enter email" /><br/>
      <input type="password" name="password" v-model="password" placeholder="Enter Password" /><br/>
      <button id="btnlogin" name="btnlogin" @click="LoginClicked()">Login</button>
    </div>
     </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Snackbar from "@/components/Snackbar.vue"
export default {
  name: "Login",
  components: {
    Nav,
  },
  data(){
    return{
      email:"",
      password:"",
    }
  },
  methods:{
    LoginClicked(){
      if(this.email==""||this.password==""){
        Snackbar.methods.openSnackbar("Please Enter all details")
      }
      else{
        let payload={
          email:this.email,
          password:this.password
        }
        this.$store.dispatch('login',{payload}).then(()=>{
          this.$router.push('/addresslist')
        }).catch(err=>{
          console.log(err);
          if(err && err.msg)
            Snackbar.methods.openSnackbar(err.msg)
          else
            Snackbar.methods.openSnackbar('something went wrong.')
        })
      }
    }
  }
};
</script>
<style scoped>
.loginBox{
  border:solid 0.3px grey;
  justify-content: center;
  width: 40%;
  height: 40%;
  margin-top:5%;
  margin-left:25%;
  padding:2%;
}

.login{
  justify-content: center;
   
}

input{
  margin:7px;
  
  font-size:20px;
  border:none;
  border-bottom: solid 1px grey;
}

button{
  font-size:20px;
  border:none;
  background-color: #21528B;
  padding:2%;
  width:max-content;
  color:white;
}

.loginItems{
  padding:5%;
  
}
</style>

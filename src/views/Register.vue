<template>
  <div class="register">
    <Nav />
    <div class="registerBox">
    <h1>Registration</h1>
       <div class="registerItems">
      <input
        type="text"
        name="email"
        v-model="email"
        placeholder="Enter Your email"
      /><br/>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Enter Your Password"
      /><br/>
      <button id="btnlogin" @click="submitClicked()">Register</button>
    </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Snackbar from "@/components/Snackbar.vue";
export default {
  name: "Register",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitClicked() {
      if (this.email == "" || this.password == "")
        Snackbar.methods.openSnackbar("please enter all details.");
      else {
        let payload = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("register", { payload })
          .then(() => {
            this.$router.push("/addresslist");
          })
          .catch((err) => {
           
          if(err && err.msg){
             console.log(err);
            Snackbar.methods.openSnackbar(err.msg)
          }
          else
            Snackbar.methods.openSnackbar('something went wrong.')
          });
      }
    },
  },
};
</script>
<style scoped>

.registerBox{
  border:solid 0.3px grey;
  justify-content: center;
  width: 40%;
  height: 40%;
  margin-top:5%;
  margin-left:25%;
  padding:2%;
}

.register{
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

.registerItems{
  padding:5%;
  
}


.register{
  justify-content: center;
   
}
</style>

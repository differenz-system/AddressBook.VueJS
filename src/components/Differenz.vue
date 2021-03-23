<template>
  <div class="Differenz">
    <h1>{{ msg }}</h1>
      <div class="footer">
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
  </div>
</template>

<script>

export default {
    name:"Differenz",
    props:{
        msg:{
            type:String,
            default:"",
                
        }
    }
    
}
</script>


<style scoped>
li {
    display: inline-block;
    padding: 0px 10px;
}
.router-link-exact-active{
      color: #42b983 !important;
}

a{
  color:#42b983;
}

.footer{
 
  bottom: 0px;
  display: flex;
  justify-content: center;
  font-weight: bolder;
  font-size:20px;
  
  width:100%;
}  
</style>

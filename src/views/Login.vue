<template>
  <div class="row mt-4">
    <div class="col-md-5 offset-md-3">
      <div class="card">
        <h3 class="card-header">Login</h3>
        <div class="card-body">
          <div class="form-group">
            <input  v-model="email"
                    type="text"  
                    placeholder="Enetr Email" 
                    class="form-control">
          </div>
          <div class="form-group">
            <input v-model="password"
                   type="password" 
                   placeholder="Enetr Password" 
                   class="form-control">
          </div>
          <div class="form-group text-center">
            <button 
                    v-on:click="loginUser()"
                    class="form-control btn btn-success">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  //Component Life Cycle
  //====================
  beforeRouteEnter(to, from ,next){
    const user = localStorage.getItem('currentUser');
    return user ? next({path:"/"}) : next()
    
  },
  //Component Data
  //==============
  data(){
    return {email:'',password:''}
  },
  
  //Methods
  //===============
  methods:{
    loginUser(){
        //window.console.log(this.email + " " + this.password);
        Axios.post('https://react-blog-api.bahdcasts.com/api/auth/login',{
          email: this.email,
          password:this.password
        })
             .then(promise => {
               const data = promise.data.data;
               localStorage.setItem('currentUser',JSON.stringify(data));
               this.$root.currentUser = data;
               this.$router.push('/');
             })
             .catch(error => {
                window.console.log(error.response.data);
                alert('Error: You Are Not Registerd');
             })
    }
  }
}
</script>
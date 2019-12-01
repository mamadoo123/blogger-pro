<template>
  <div class="row mt-4">
    <div class="col-md-5 offset-md-3">
      <div class="card">
        <h3 class="card-header">Registr Now</h3>
        <div class="card-body">
          <div class="form-group">
            <input v-model="name" type="text" placeholder="Please Enetr Your Name" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="Enetr Email" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="Enetr Password" class="form-control">
          </div>
          <div class="form-group text-center">
            <button @click="registerUser" class="form-control btn btn-success">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return{name:'', email:'', password:''}
  },
  methods:{
    registerUser(){
      Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register',{
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(promise => {
          const data = promise.data.data;
          localStorage.setItem('currentUser',JSON.stringify(data));
          this.$root.currentUser = data;
          this.$router.push('home');
          })
        .catch( error => {
          window.console.log(error.response.data);
          alert('Error:Fill All Required Field');
          })
    }
  }
}
</script>
<template>
  <div class="container">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="40px" height="40px">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li v-if="!$root._data.currentUser" class="nav-link">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!$root._data.currentUser" class="nav-link">
            <router-link to="/signup">Signup</router-link>
          </li>
          <li v-if="$root._data.currentUser" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {{$root._data.currentUser.user.name}}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Logout</a>
              </nav>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  mounted(){
    window.console.log(this.$root._data.currentUser)
  }
}
</script>

<style>
  .mydiv{
    background-color: cadetblue;
  }
</style>
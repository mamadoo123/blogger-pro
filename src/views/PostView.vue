<template>
  <h1 class="text-cenetr">{{$route.params.id}}</h1>
</template>

<script>
import Axios from 'axios';

export default {
  mounted(){
    this.getPost()
  },

  methods:{
    getPost(){
      Axios.get(`https://react-blog-api.bahdcasts.com/api/article/${this.$route.params.id}`)
            .then(response =>{
              window.console.log(response)
            })
    }
  }
}
</script>
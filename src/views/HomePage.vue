<template>
    <h2 class="text-center my-5">Welcome To my Home Page</h2>
</template>

<script>
import Axios from 'axios';

export default {
  data(){
    return {
      posts:{}
    }
  },
  mounted(){
    getPost();
  },
  methods:{
    getArticles(){
      Axios.get('https://react-blog-api.bahdcasts.com/api/articles')
              .then(response => {
                this.posts = response.data.data;
              })
    }
  }
}
</script>
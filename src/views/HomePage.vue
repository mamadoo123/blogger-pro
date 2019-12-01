<template>
<div class="container">
  <div  v-if="posts.data" class="row">
    <div 
        v-for="post in posts.data" 
        :key="post.id" 
        class="col-md-8 offset-md-2">

        <Post :post="post"/>

    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios';
import Post from '../components/Post.vue';

export default {
  data(){
    return {
      posts:{}
    }
  },
  components:{
      Post
  },
  methods:{
    getPosts(){
      Axios.get('https://react-blog-api.bahdcasts.com/api/articles')
              .then(response => {
                this.posts = response.data.data;
              })
    }
  },
  mounted(){
    this.getPosts();
  }
}
</script>
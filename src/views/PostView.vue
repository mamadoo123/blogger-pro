<template>
<div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card" style="width: 38rem;">
        <img :src="post.imgUrl" alt="" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title text-center">{{post.title}}</h3>
          <p class="card-text">Some quick example text to build on post title and make up the bulk of the post's content</p>
          <!-- <p style="text-decoration:underline">created by: {{post.user.name}}</p> -->
          <div class="comments my-4">
            <vue-disqus shortname="blogger-pro" 
                        :identifier="post.slug" 
                        :url="url" >
            </vue-disqus>
          </div>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
    return{
      post:{},
      url: window.location.href
    }
  },

  mounted(){
    this.getPost()
  },

  methods:{
    getPost(){
      Axios.get(`https://react-blog-api.bahdcasts.com/api/article/${this.$route.params.id}`)
            .then(response =>{
              window.console.log(response);
              this.post = response.data.data;
              this.post.imgUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            })
    }
  }
}
</script>
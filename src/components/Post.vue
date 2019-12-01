<template>
    <div class="card my-2">
      <div class="card-header font-weight-bold">{{post.title}}</div>
      <div class="crad-body">
        <div class="my-3" v-html="post.content"></div>
        
        <router-link 
                  :to="`/post/${post.slug}`" 
                  class="btn btn-primary">
          read more
        </router-link>
      </div>
    </div>
</template>

<script>
export default{
  props:['post']
}
</script>


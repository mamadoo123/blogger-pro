<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card my-5">
          <div class="card-body">
            <picture-input  
                  accept="image/jpeg,image/png" 
                  size="10" 
                  button-class="btn btn-danger"
                  @change="onChange">
            </picture-input>
            <input  type="text" 
                    class="form-control mb-3 border" 
                    placeholder="title">
            <!-- <wysiwyg v-model="content" /> -->
            <editor
                    autofocus
                    holder-id="codex-editor"
                    save-button-id="save-button"
                    :init-data="content"
          />
          <button @click="createPost" class="btn-success mt-3">Post Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input';
import Axios from 'axios';

export default {
  beforeRouteEnter(to, from ,next){
    const user = localStorage.getItem('currentUser');
    return !user ? next({path:"/login"}) : next()
    
  },
  components:{
    PictureInput
  },
  data(){
    return{
      content:'', image:null, title:''
    }
  },
  methods:{
    onChange(image){
      this.image = image
    },
    createPost(){
      const form = new FormData();
      form.append('file', this.image);
      form.append('upload_preset', 'bdjmwq7g');
      form.append('api_key', '129984365219345');

      Axios.post('https://api.cloudinary.com/v1_1/dctrqkkul/image/upload', form)
            .then(response => {
              this.$router.push('/');
              alert('Success Uploaded To Cloudly!')
              window.console.log(response);
              Axios.post('https://react-blog-api.bahdcasts.com/api/articles',
              {
                title:this.title,
                content: this.content,
                imageUrl: response.data.secure_url,
              },
              {
                  headers:{
                    Authorization: `Bearer ${this.$root.currentUser.token}`
                  }
              }

              ).then(()=> {
                  alert('Post Added Successfully');
                  this.$router.push('/');
              })
                .catch(err => {
                  window.console.log(err);
                  alert('Sorry, something goes wrong');
              })
            })
            .catch(err => {
                  window.console.log(err);
                  alert('Sorry, something goes wrong');
              })
    }
  }
}
</script>


import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

const getCurrentUser = localStorage.getItem('currentUser');

new Vue({
  router,
  data:{
    currentUser: getCurrentUser ? JSON.parse(getCurrentUser):{}
  },
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router';

import VueDisqus from 'vue-disqus';

Vue.use(VueDisqus)

Vue.config.productionTip = false
//fetching the user from the local storage
const getCurrentUser = localStorage.getItem('currentUser');

new Vue({
  router,
  data:{
//  checking if there is a current user in local storage
//  and pair it to current user
//  And if not the currentUser will be an empty object
    currentUser: getCurrentUser ? JSON.parse(getCurrentUser):{}
  },
  render: h => h(App),
}).$mount('#app')

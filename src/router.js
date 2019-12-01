import Vue from 'vue';
import Router from 'vue-router';
//importing the components for routes
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';

//Register the Router functionality to Our Vue project

Vue.use(Router);

//Creating the project router and adding its routes

const router = new Router({
  routes:[
    {path:'/login', component: Login},
    {path:'/signup', component: Signup}
  ]
});

export default router;
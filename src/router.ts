import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateTables from './views/CreateTables.vue';
import Top from './views/Top.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Config from './config/Config';
import { Mutation } from "vuex-class";

const config = new Config();

Vue.use(Router);
Vue.use(ElementUI);

const beforeEditTeams = (to: any, from: any, next: any) => {

  if (!to.params.hash) {
    next({name:'top'})
    return
  }

  (async () => {
    const response = await axios.get(`${config.API_URL_BASE}/projects/edit/${to.params.hash}`);
    if (response.data === null) {
      next({name:'top'});
    } else {
      next();
    }
  })();
}

const beforeRefTeams = (to: any, from: any, next: any) => {

  if (!to.params.hash) {
    next({name:'top'})
    return
  }

  (async () => {
    const response = await axios.get(`${config.API_URL_BASE}/projects/ref/${to.params.hash}`);
    if (response.data === null) {
      console.log("loglog")
      next({name:'top'});
    } else {
      console.log("logloglog")
      next();
    }
  })();
}

const beforeNotFound = (to: any, from: any, next: any) => {
  next({name:'top'})
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: '/edit/:hash',
      name: 'editTeams',
      component: CreateTables,
      beforeEnter: beforeEditTeams
    },
    {
      path: '/ref/:hash',
      name: 'refTeams',
      component: CreateTables,
      beforeEnter: beforeRefTeams
    },
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    { 
      path: "*", 
      component: Top,
      beforeEnter: beforeNotFound
    }
  ],
});



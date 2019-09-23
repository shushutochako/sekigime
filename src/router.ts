import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateTables from './views/CreateTables.vue';
import Top from './views/Top.vue';
import axios from 'axios';
import Config from './config/Config';
import { Mutation } from "vuex-class";

// Buefy
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);

const config = new Config();

Vue.use(Router);

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
      next({name:'top'});
    } else {
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



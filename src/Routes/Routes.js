// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Layout from '../Layout/Layout.vue'
import Home from '../components/Home.vue';
import CreateEvent from '../components/CreateEvent.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,

  },
  {
    path: '/Home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/CreateEvent',
        component: CreateEvent
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;

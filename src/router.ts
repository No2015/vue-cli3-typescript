import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('./views/Goods.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue'),
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('./views/Center.vue'),
    },
  ],
});

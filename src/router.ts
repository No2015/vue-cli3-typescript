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
      meta: {
        keepAlive: true,
        scrollTop: 0,
      },
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
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
    {
      path: '/cate',
      name: 'cate',
      component: () => import('./views/Cate.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue'),
    },
  ],
});

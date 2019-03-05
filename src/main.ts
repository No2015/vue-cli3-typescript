import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Component } from 'vue-property-decorator';
import './assets/styles.less';
import storage from './global/storage';

Vue.prototype.$storage = storage;
Vue.config.productionTip = false;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

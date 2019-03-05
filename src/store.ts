import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from 'qs';

axios.defaults.headers.post.Accept = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.post['X-Requested-With'] = 'xmlhttprequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data, {arrayFormat: 'brackets'});
  return config;
});

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const userInfo = {
  name: '',
  id: 0,
  avatar: '',
  integral: 0,
  level: 0,
};

export default new Vuex.Store({
  state: {
    homeList: [],
    homeBanner: [],
    homeCate: [],
    pageLoad: !0,
    goodsdetail: {},
    cartList: [],
    userInfo,
  },
  mutations: {
    setPageLoad(state, load) {
      setTimeout(() => {
        state.pageLoad = load;
      }, 1e3);
    },
    getHomeList(state, list) {
      state.homeList = list;
    },
    getHomeBanner(state, list) {
      state.homeBanner = list;
    },
    getCartList(state, list) {
      state.cartList = list;
    },
    getHomeCate(state, list) {
      state.homeCate = list;
    },
    getUser(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    initHomePage(context) {
      context.dispatch('initUserInfo');
      axios.get('/api/goodslist.json', {}).then((response: any) => {
        context.commit('getHomeList', response.data);
      });
      axios.get('/api/cate.json', {}).then((response: any) => {
        context.commit('getHomeCate', response.data);
      });
      axios.get('/api/banner.json', {}).then((response: any) => {
        context.commit('getHomeBanner', response.data);
      });
      context.commit('setPageLoad', !1);
    },
    initCartPage(context) {
      context.dispatch('initUserInfo');
      axios.get('/api/cart.json', {}).then((response: any) => {
        context.commit('getCartList', response.data);
      });
      context.commit('setPageLoad', !1);
    },
    initUserInfo(context) {
      if (context.state.userInfo.id !== 0) {
        return !1;
      }
      axios.get('/api/user.json', {}).then((response: any) => {
        context.commit('getUser', response.data);
      });
    },
  },
});

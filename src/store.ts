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
    searchList: [],
    searchKeywords: '',
    cateList: [],
    cateTitle: '',
    pageLoad: !0,
    goodsdetail: {},
    cartList: [],
    userInfo,
  },
  mutations: {
    setSearchKeywords(state, keywords) {
      state.searchKeywords = keywords;
    },
    setCateTitle(state, title) {
      state.cateTitle = title;
    },
    setPageLoad(state, load) {
      setTimeout(() => {
        state.pageLoad = load;
      }, 1e3);
    },
    setHomeList(state, list) {
      state.homeList = list;
    },
    setHomeBanner(state, list) {
      state.homeBanner = list;
    },
    setCartList(state, list) {
      state.cartList = list;
    },
    setHomeCate(state, list) {
      state.homeCate = list;
    },
    setSearchList(state, list) {
      state.searchList = list;
    },
    setCateList(state, list) {
      state.cateList = list;
    },
    setUser(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    initHomePage(context) {
      context.dispatch('initUserInfo');
      if (context.state.homeList.length == 0) {
        axios.get('/api/goodslist.json', {}).then((response: any) => {
          context.commit('setHomeList', response.data);
        });
      }
      if (context.state.homeCate.length == 0) {
        axios.get('/api/cate.json', {}).then((response: any) => {
          context.commit('setHomeCate', response.data);
        });
      }
      if (context.state.homeBanner.length == 0) {
        axios.get('/api/banner.json', {}).then((response: any) => {
          context.commit('setHomeBanner', response.data);
        });
      }
      context.commit('setPageLoad', !1);
    },
    initCartPage(context) {
      context.dispatch('initUserInfo');
      axios.get('/api/cart.json', {}).then((response: any) => {
        context.commit('setCartList', response.data);
      });
      context.commit('setPageLoad', !1);
    },
    initSearchPage(context, keywords) {
      context.dispatch('initUserInfo');
      if (keywords !== context.state.searchKeywords){
        axios.get('/api/search.json', { params: {"keywords": keywords} }).then((response: any) => {
          context.commit('setSearchList', response.data);
        });
        context.commit('setSearchKeywords', keywords);
      }
      context.commit('setPageLoad', !1);
    },
    initCatePage(context, cid) {
      context.dispatch('initUserInfo');
      axios.get('/api/catePage.json', { params: {"cid": cid} }).then((response: any) => {
        context.commit('setCateList', response.data.data);
        context.commit('setCateTitle', response.data.title);
      });
      context.commit('setPageLoad', !1);
    },
    initUserInfo(context) {
      if (context.state.userInfo.id !== 0) {
        return !1;
      }
      axios.get('/api/user.json', {}).then((response: any) => {
        context.commit('setUser', response.data);
      });
    },
  },
});

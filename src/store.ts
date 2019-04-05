import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/global/axios';
import { userInfo, goodsDetail, cart, center } from '@/store/model';

Vue.use(Vuex);
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
    goodsDetail,
    userInfo,
    cart,
    center,
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
      state.cart.list = list;
    },
    setCartAmount(state, amount) {
      state.cart.amount = amount;
    },
    setCartManageState(state, manageState) {
      state.cart.manageState = manageState;
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
    setGoodsDetail(state, detail) {
      state.goodsDetail = detail;
    },
    setCenterOrder(state, order) {
      state.center.order = order;
    },
    setUser(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    initHomePage(context) {
      if (context.state.homeList.length === 0) {
        axios.get('/api/goodslist.json', {}).then((response: any) => {
          context.commit('setHomeList', response.data);
        });
      }
      if (context.state.homeCate.length === 0) {
        axios.get('/api/cate.json', {}).then((response: any) => {
          context.commit('setHomeCate', response.data);
        });
      }
      if (context.state.homeBanner.length === 0) {
        axios.get('/api/banner.json', {}).then((response: any) => {
          context.commit('setHomeBanner', response.data);
        });
      }
      context.commit('setPageLoad', !1);
    },
    initCartPage(context, reset) {
      if (context.state.cart.list.length === 0 || reset) {
        axios.get('/api/cart.json', {}).then((response: any) => {
          const data = response.data;
          for (const item of data) {
            item.add = !1;
          }
          context.commit('setCartList', data);
        });
      }
      context.commit('setPageLoad', !1);
    },
    updateCartPage(context, updata) {
      const update = updata.update;
      const list = updata.list;
      axios.post('/api/updateCart.json', { update }).then((response: any) => {
        const data = response.data;
        if (data.status && list) {
          context.commit('setCartList', list);
        } else if (!data.status) {
          context.dispatch('initCartPage', true);
        }
      });
    },
    initSearchPage(context, keywords) {
      if (keywords !== context.state.searchKeywords) {
        axios.get('/api/search.json', { params: { keywords } }).then((response: any) => {
          context.commit('setSearchList', response.data);
        });
        context.commit('setSearchKeywords', keywords);
      }
      context.commit('setPageLoad', !1);
    },
    initCatePage(context, cid) {
      axios.get('/api/catePage.json', { params: { cid } }).then((response: any) => {
        context.commit('setCateList', response.data.data);
        context.commit('setCateTitle', response.data.title);
      });
      context.commit('setPageLoad', !1);
    },
    initGoodsDetail(context, gid) {
      axios.get('/api/goodsdetail.json', { params: { gid } }).then((response: any) => {
        context.commit('setGoodsDetail', response.data);
      });
      context.commit('setPageLoad', !1);
    },
    initCenterPage(context) {
      axios.get('/api/centerOrder.json', {}).then((response: any) => {
        context.commit('setCenterOrder', response.data);
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

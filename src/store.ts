import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    open: !0,
  },
  mutations: {
    toggleOpen(state, open) {
      state.open = !open;
    },
  },
  actions: {
    todoOpen(context, open) {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', {}).then((response: any) => {
        console.log(response.data);
      });
      // setTimeout(() => {
      //   context.commit('toggleOpen', open);
      // }, 1e3);
    },
  },
});

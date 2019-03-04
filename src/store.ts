import Vue from 'vue';
import Vuex from 'vuex';

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
      setTimeout(() => {
        context.commit('toggleOpen', open);
      }, 1e3);
    },
  },
});

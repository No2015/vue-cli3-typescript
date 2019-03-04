import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    open: !0,
  },
  mutations: {
    toggleOpen(state, open) {
      setTimeout(() => {
        state.open = !open;
      }, 1e3);
    },
  },
  actions: {
    todoOpen(context, open) {
      context.commit('toggleOpen', open);
    },
  },
});

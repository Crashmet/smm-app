import { createStore } from 'vuex';
import headerProfileStore from './modules/headerProfileStore';
import registerStore from './modules/registerStore';
import authStore from './modules/authStore';
import searchStore from './modules/searchStore';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    headerProfileStore,
    registerStore,
    authStore,
    searchStore,
  },
});

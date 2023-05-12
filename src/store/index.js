import { createStore } from 'vuex';
import headerProfileStore from './modules/headerProfileStore';
import registerStore from './modules/registerStore';
import loginStore from './modules/loginStore';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    headerProfileStore,
    registerStore,
    loginStore,
  },
});

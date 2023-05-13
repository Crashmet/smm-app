import { AuthAPI } from '@/api/AuthAPI';

const authStore = {
  namespaced: true,

  state: {
    loginData: {
      username: '',
      password: '',
    },

    validatorResponse: {},

    entryStatus: localStorage.getItem('entry-status') || null,
  },

  getters: {
    validatorResponse: ({ validatorResponse }) => validatorResponse,

    entryStatus: ({ entryStatus }) => entryStatus,
  },

  mutations: {
    SET_STATUS(state, status) {
      state.entryStatus = status;

      localStorage.setItem('entry-status', JSON.stringify(status));
    },

    DELETE_STATUS(state) {
      state.entryStatus = null;

      localStorage.removeItem('entry-status');
    },

    SET_VALIDATOR_DATA(state, validatorResponse) {
      state.validatorResponse = validatorResponse;
    },
  },

  actions: {
    onLogin({ commit }, loginData) {
      const dataJson = JSON.stringify(loginData);

      AuthAPI.login(dataJson)
        .then(function (response) {
          commit('SET_STATUS', response.status);

          commit('SET_VALIDATOR_DATA', {});
        })
        .catch(function (error) {
          commit('DELETE_STATUS');

          commit('SET_VALIDATOR_DATA', error.response.data);
        });
    },

    onLogout({ commit }) {
      commit('DELETE_STATUS');

      AuthAPI.logout();

      location.reload();
    },
  },
};

export default authStore;

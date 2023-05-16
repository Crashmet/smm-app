import { AuthAPI } from '@/api/AuthAPI';

const authStore = {
  namespaced: true,

  state: {
    loginData: {
      username: '',
      password: '',
    },

    validatorResponse: {},

    access_token: localStorage.getItem('access_token') || null,

    refresh_token: localStorage.getItem('refresh_token') || null,
  },

  getters: {
    validatorResponse: ({ validatorResponse }) => validatorResponse,

    access_token: ({ access_token }) => access_token,
  },

  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      console.log(state.access_token);

      state.access_token = token;

      localStorage.setItem('access_token', token);
    },

    SET_REFRESH_TOKEN(state, token) {
      state.refresh_token = token;

      localStorage.setItem('refresh_token', token);
    },

    DELETE_STATUS() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
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
          commit('SET_ACCESS_TOKEN', response.data.access);
          commit('SET_REFRESH_TOKEN', response.data.refresh);

          commit('SET_VALIDATOR_DATA', {});

          location.reload();
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

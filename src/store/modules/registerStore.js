import { RegisterAPI } from '@/api/RegisterAPI';

const registerStore = {
  namespaced: true,

  state: {
    registerData: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password2: '',
      username: '',
    },

    validatorResponse: {},

    entryStatus: null,
  },

  getters: {
    validatorResponse: ({ validatorResponse }) => validatorResponse,

    entryStatus: ({ entryStatus }) => entryStatus,
  },

  mutations: {
    SET_VALIDATOR_DATA(state, validatorResponse) {
      state.validatorResponse = validatorResponse;
    },

    SET_STATUS(state, status) {
      state.entryStatus = status;

      localStorage.setItem('entry-status', JSON.stringify(status));
    },
  },

  actions: {
    onRegistration({ commit }, registerData) {
      const dataJson = JSON.stringify(registerData);

      RegisterAPI.register(dataJson)
        .then(function (response) {
          const status = String(response.status);

          commit('SET_STATUS', status);

          commit('SET_VALIDATOR_DATA', {});
        })
        .catch(function (error) {
          commit('SET_VALIDATOR_DATA', error.response.data);
        });
    },
  },
};

export default registerStore;

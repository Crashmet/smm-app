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
  },

  getters: {
    validatorResponse: ({ validatorResponse }) => validatorResponse,
  },

  mutations: {
    SET_VALIDATOR_DATA(state, validatorResponse) {
      state.validatorResponse = validatorResponse;
    },
  },

  actions: {
    onRegistration({ commit }, registerData) {
      const dataJson = JSON.stringify(registerData);

      RegisterAPI.register(dataJson)
        .then(function (response) {
          commit('SET_VALIDATOR_DATA', {});
        })
        .catch(function (error) {
          commit('SET_VALIDATOR_DATA', error.response.data);
        });
    },
  },
};

export default registerStore;

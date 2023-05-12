import axios from '@/plugins/axios/index';

const loginStore = {
  namespaced: true,

  state: {
    loginData: {
      username: '',
      password: '',
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
    async login({ commit }, loginData) {
      const dataJson = JSON.stringify(loginData);

      console.log(dataJson);

      await axios
        .post(`login/`, dataJson, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then(function (response) {
          console.log(response);
          commit('SET_VALIDATOR_DATA', {});
        })
        .catch(function (error) {
          commit('SET_VALIDATOR_DATA', error.response.data);
        });
    },
  },
};

export default loginStore;

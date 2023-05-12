import axios from '@/plugins/axios/index';

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
    // setRegisterData(context, registerData) {
    //   commit('SET_REGISER_DATA', registerData);
    // },

    async registration({ commit }, registerData) {
      const dataJson = JSON.stringify(registerData);
      console.log(dataJson);

      await axios
        .post(`register/`, dataJson, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
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

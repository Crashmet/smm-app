import axios from '@/api/index';

const loginStore = {
  namespaced: true,

  state: {
    loginData: {
      username: '',
      password: '',
    },

    validatorResponse: {},

    entryStatus: 400,
  },

  getters: {
    validatorResponse: ({ validatorResponse }) => validatorResponse,

    entryStatus: ({ entryStatus }) => entryStatus,
  },

  mutations: {
    SET_STATUS(state, status) {
      state.entryStatus = status;
    },

    SET_VALIDATOR_DATA(state, validatorResponse) {
      state.validatorResponse = validatorResponse;
    },
  },

  actions: {
    async login({ commit }, loginData) {
      const dataJson = JSON.stringify(loginData);

      console.log(dataJson);

      await axios
        .post(`login/`, dataJson)
        .then(function (response) {
          commit('SET_STATUS', response.status);

          commit('SET_VALIDATOR_DATA', {});
        })
        .catch(function (error) {
          commit('SET_VALIDATOR_DATA', error.response.data);
        });
    },
  },
};

export default loginStore;

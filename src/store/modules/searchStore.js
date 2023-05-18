const searchStore = {
  namespaced: true,

  state: {
    searchResult: '',
  },

  getters: {
    searchResult: ({ searchResult }) => searchResult,
  },

  mutations: {
    SET_SEARCH_RESULT(state, searchInput) {
      state.searchResult = searchInput;
    },
  },

  actions: {
    setSearchResult({ commit }, searchInput) {
      commit('SET_SEARCH_RESULT', searchInput);
    },
  },
};

export default searchStore;

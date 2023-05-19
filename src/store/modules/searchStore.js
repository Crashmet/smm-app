import { BloggerAPI } from '@/api/BloggerAPI';

const searchStore = {
  namespaced: true,

  state: {
    searchRequest: '',

    count: 1954,
    next: 'http://62.109.29.175:8000/api/bloggers/?page=5',
    previous: 'http://62.109.29.175:8000/api/bloggers/?page=3',
    searchResult: [],
  },

  getters: {
    searchRequest: ({ searchRequest }) => searchRequest,

    count: ({ count }) => count,
    next: ({ next }) => next,
    previous: ({ previous }) => previous,
    searchResult: ({ searchResult }) => searchResult,
  },

  mutations: {
    SET_SEARCH_REQUEST(state, searchInput) {
      state.searchRequest = searchInput;
    },

    ADD_SEARCH_RESULT(state, results) {
      state.searchResult = results;
    },
  },

  actions: {
    setSearchRequest({ commit }, searchInput) {
      commit('SET_SEARCH_REQUEST', searchInput);
    },

    addSearchResult({ commit }, { pageSize, searchInput }) {
      BloggerAPI.getSearchResult(pageSize, searchInput)
        .then(function (response) {
          console.log(response.data);

          commit('ADD_SEARCH_RESULT', response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default searchStore;

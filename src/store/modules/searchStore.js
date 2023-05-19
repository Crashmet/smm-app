import { BloggerAPI } from '@/api/BloggerAPI';

const searchStore = {
  namespaced: true,

  state: {
    searchRequest: '',

    count: null,
    searchResult: [],
  },

  getters: {
    searchRequest: ({ searchRequest }) => searchRequest,

    count: ({ count }) => count,
    searchResult: ({ searchResult }) => searchResult,
  },

  mutations: {
    SET_SEARCH_REQUEST(state, searchInput) {
      state.searchRequest = searchInput;
    },

    SET_COUNT_CARDS(state, count) {
      state.count = count;
    },

    ADD_SEARCH_RESULT(state, results) {
      const resultsData = results.map((el) => {
        const dateUpd = new Date(Date.parse(el.updated));

        let date = null;

        if (dateUpd.getMonth() + 1 < 10) {
          date = `${dateUpd.getDate()}.0${
            dateUpd.getMonth() + 1
          }.${dateUpd.getFullYear()}`;
        } else {
          date = `${dateUpd.getDate()}.${
            dateUpd.getMonth() + 1
          }.${dateUpd.getFullYear()}`;
        }

        el.updated = date;

        return el;
      });

      state.searchResult = resultsData;
    },
  },

  actions: {
    setSearchRequest({ commit }, searchInput) {
      commit('SET_SEARCH_REQUEST', searchInput);
    },

    addSearchResult({ commit }, { activePage, pageSize, searchInput }) {
      BloggerAPI.getSearchResult(activePage, pageSize, searchInput)
        .then(function (response) {
          console.log(response.data);

          commit('SET_COUNT_CARDS', response.data.count);
          commit('ADD_SEARCH_RESULT', response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default searchStore;

import axios from '@/api/index';

export const SearchResultAPI = {
  getSearchResult(activePage, pageSize, searchInput) {
    const url = `bloggers/?page=${activePage}&page_size=${pageSize}&search=${searchInput}`;

    return axios.get(url);
  },

  getSearchResultOrFiltered(ordering, activePage, pageSize, searchInput) {
    const url = `bloggers/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`;

    return axios.get(url);
  },
};

import axios from '@/api/index';

export const BloggerAPI = {
  getSearchResult(activePage, pageSize, searchInput) {
    const url = `bloggers/?page=${activePage}&page_size=${pageSize}&search=${searchInput}`;

    return axios.get(url);
  },
};

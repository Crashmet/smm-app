import axios from '@/api/index';

export const BloggerAPI = {
  getSearchResult(pageSize, searchInput) {
    const url = `bloggers/?page=${1}&page_size=${pageSize}&search=${searchInput}`;

    return axios.get(url);
  },
};

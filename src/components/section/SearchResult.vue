<template>
  <section class="search-result">
    <div class="search-result__container container">
      <ul class="search-result__list-cards">
        <li
          class="search-result__item-card item-card"
          v-for="item in searchResult"
          :key="item.id"
        >
          <div class="item-card__img"></div>

          <ul class="item-card__list-description">
            <li class="item-card__item-description item-description">
              {{ item.social }}: {{ item.nickname }}
            </li>
            <li class="item-card__item-description item-description">
              Кол-во подписчиков: {{ item.subscribers }}
            </li>
            <!-- <li class="item-card__item-description item-description">
              Кол-во лайков: 
            </li>
            <li class="item-card__item-description item-description">
              Кол-во постов:
            </li> -->
            <li
              class="item-card__item-description item-description"
              v-if="item.price_for_post"
            >
              Цена за пост: {{ item.price_for_post }}
            </li>
            <li
              class="item-card__item-description item-description"
              v-if="item.price_for_stories"
            >
              Цена за сторис: {{ item.price_for_stories }}
            </li>
            <li
              class="item-card__item-description item-description"
              v-if="item.price_for_reels"
            >
              Цена за рилс: {{ item.price_for_reels }}
            </li>
            <li class="item-card__item-description item-description">
              Дата создания: {{ item.updated }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="countPages > 1" class="search-pagination">
      <button
        v-if="activePage > 1"
        @click="handlerClickPrevPage()"
        class="search-pagination__btn left-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon left-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div class="search-page-numbers page-numbers">
        <button
          v-if="activePage > 3"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          1
        </button>

        <span v-if="activePage > 3 && countPages > 5" class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="activePage > 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage - 1 }}
        </button>

        <button
          @click="handlerClickActivePage"
          class="page-numbers__btn page-numbers__btn_selected"
        >
          {{ activePage }}
        </button>

        <button
          v-if="countPages > activePage + 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 1 }}
        </button>

        <button
          v-if="countPages > activePage + 2"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 2 }}
        </button>

        <span
          v-if="countPages > activePage + 3 && countPages > 3"
          class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="countPages !== activePage"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ countPages }}
        </button>
      </div>

      <button
        v-if="countPages !== activePage"
        @click="handlerClickNextPage()"
        class="search-pagination__btn right-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon right-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchResult',

  data() {
    return {
      pageSize: null,
    };
  },

  created() {
    const maxWidth = window.screen.width;

    if (maxWidth === 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }

    const searchData = JSON.parse(localStorage.getItem('search-list'));

    if (searchData) {
      this.setActivePage(searchData.activePage);
      this.setSearchRequest(searchData.searchRequest);
    }

    this.addSearchResult({
      activePage: this.activePage,
      pageSize: this.pageSize,
      searchInput: this.searchRequest,
    });

    this.historyPushState();
  },

  unmounted() {
    this.setSearchRequest('');
  },

  computed: {
    ...mapGetters('searchStore', [
      'searchRequest',
      'count',
      'searchResult',
      'activePage',
    ]),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions('searchStore', [
      'setSearchRequest',
      'addSearchResult',
      'setActivePage',
      'saveSearchRequestLocalStorage',
    ]),

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `${window.location.pathname}#/search-result?page=${this.activePage}&page_size=${this.pageSize}&search=${this.searchRequest}`
      );
    },

    handlerClickNextPage() {
      this.setActivePage(this.activePage + 1);
    },

    handlerClickPrevPage() {
      this.setActivePage(this.activePage - 1);
    },

    handlerClickActivePage(e) {
      this.setActivePage(+e.target.textContent);
    },
  },

  watch: {
    searchRequest() {
      this.saveSearchRequestLocalStorage({
        activePage: this.activePage,
        searchRequest: this.searchRequest,
      });

      this.historyPushState();
    },

    activePage() {
      this.saveSearchRequestLocalStorage({
        activePage: this.activePage,
        searchRequest: this.searchRequest,
      });

      this.addSearchResult({
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });

      this.historyPushState();
    },
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.search-result {
  margin-top: 3.8889rem;
  margin-bottom: 5.6111rem;
}

.search-result__container {
  padding: 0 4.4444rem;
}

.search-result__list-cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.search-result__item-card {
  max-width: 11.1111rem;
  margin-bottom: 3.1667rem;
}

.search-result__item-card:not(:nth-child(4n)) {
  margin-right: 4.4444rem;
}

.item-card__img {
  margin-bottom: 0.9444rem;
  width: 11.1111rem;
  height: 11.1111rem;
  background: #d9d9d9;
}

.item-card__item-description:not(:last-child) {
  margin-bottom: 0.2222rem;
}

/* pagination  */

.search-pagination,
.page-numbers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 0.8889rem;
}

.search-pagination__btn {
  padding: 0.4444rem;
  width: 2.3333rem;
  height: 2.3333rem;
  color: rgba(255, 54, 0, 0.8);
  background-color: #fff;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 54, 0, 0.8);
  cursor: pointer;
}

.search-pagination__btn:hover,
.page-numbers__btn:hover {
  background-color: rgba(255, 54, 0, 0.8);
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.page-numbers__btn {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.page-numbers__btn_selected {
  background-color: rgba(255, 54, 0, 0.8);
  color: #fff;
}

@media (max-width: 1199px) {
  .search-result__item-card:nth-child(4n) {
    margin-right: 0;
  }

  .search-result__item-card:nth-child(even) {
    margin-right: 40px;
    margin-bottom: 32px;
  }

  .search-result__item-card:nth-child(odd) {
    margin-right: 40px;
    margin-bottom: 32px;
  }
}

@media (max-width: 960px) {
  .item-card__img {
    width: 140px;
    height: 140px;
    background: #d9d9d9;
  }
}

@media (max-width: 480px) {
  .search-result {
    margin-top: 36px;
  }

  .search-result__container {
    padding: 0 40px;
  }

  .search-result__item-card:nth-child(even) {
    margin-right: 0;
    margin-bottom: 0;
  }

  .item-card__item-description:not(:last-child) {
    margin-bottom: 2px;
  }

  .search-pagination__btn {
    width: 30.9994px;
    height: 30.9994px;
  }
}

@media (max-width: 390px) {
  .search-result__container {
    padding: 0 20px;
  }
}

@media (max-width: 350px) {
  .search-result__container {
    padding: 0 10px;
  }
}

@media (max-width: 330px) {
  .search-result__container {
    padding: 0;
  }
}

@media (max-width: 307px) {
  .search-result__container {
    padding: 0 40px;
  }
}
</style>

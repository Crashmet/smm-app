<template>
  <section class="search">
    <div class="search__container container">
      <div class="search__bar">
        <div class="search-bar__line">
          <input
            class="search-line__input"
            type="text"
            v-model.trim="searchInput"
          />
          <button class="search-line__btn" @click.prevent="handlerClickSearch">
            <span class="search-line-btn__text">поиск</span>
          </button>
        </div>
        <template v-if="searchRequest.length > 0">
          <p class="search-bar__desc">Выдача по слову «{{ searchRequest }}»</p>
        </template>
      </div>

      <nav class="search__nav">
        <ul class="search-nav__list">
          <li
            :class="isCategoryActive ? 'search-nav__item_active' : ''"
            @click="isCategoryActive = !isCategoryActive"
            class="search-nav__item search-nav__item_1"
          >
            <span class="search-nav__text">Категории</span>
          </li>
          <li
            :class="isBrandActive ? 'search-nav__item_active' : ''"
            @click="isBrandActive = !isBrandActive"
            class="search-nav__item search-nav__item_2"
          >
            <span class="search-nav__text">Бренды</span>
          </li>

          <li
            :class="isAgeActive ? 'search-nav__item_active' : ''"
            @click="isAgeActive = !isAgeActive"
            class="search-nav__item search-nav__item_3"
          >
            <span class="search-nav__text">Возраст</span>
          </li>
          <li
            :class="isGenderActive ? 'search-nav__item_active' : ''"
            @click="isGenderActive = !isGenderActive"
            class="search-nav__item search-nav__item_4"
          >
            <span class="search-nav__text">Пол</span>
          </li>
          <li
            :class="isRegionActive ? 'search-nav__item_active' : ''"
            @click="isRegionActive = !isRegionActive"
            class="search-nav__item search-nav__item_5"
          >
            <span class="search-nav__text">Регион</span>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  // добавь сброс шевронов !!!!!*************

  name: 'Search',

  data() {
    return {
      searchInput: '',

      pageSize: '',

      isCategoryActive: false,
      isBrandActive: false,
      isAgeActive: false,
      isGenderActive: false,
      isRegionActive: false,
    };
  },

  created() {
    const maxWidth = window.screen.width;

    if (maxWidth === 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }
  },

  computed: {
    ...mapGetters('searchStore', ['searchRequest', 'activePage']),
  },

  methods: {
    ...mapActions('searchStore', [
      'setSearchRequest',
      'addSearchResult',
      'setActivePage',
    ]),

    handlerClickSearch() {
      this.$router.push({ name: 'search-result' });

      this.setActivePage(1);

      this.addSearchResult({
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchInput,
      });

      this.setSearchRequest(this.searchInput);
    },
  },

  watch: {
    searchRequest() {},
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

.search {
  margin-top: 3.2222rem;
}

.search__container {
  padding: 0 4.4444rem;
}

.search__bar {
  margin-bottom: 3.6667rem;
}

.search-bar__line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  border-radius: 20px;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.search-bar__desc {
  margin-top: 1.1111rem;
  margin-left: 1.4444rem;
  color: rgba(13, 13, 13, 0.61);
}

.search-line__input {
  padding-left: 19.9998px;
  width: 100%;
  height: 2.5556rem;
  border: none;
  border-radius: 20px;
  background: #ffffff;
  font-size: 1rem;
  line-height: 1.1667rem;
}

.search-line__btn {
  right: 0;
  bottom: 0;
  padding: 0.5556rem 4.3333rem 0.5556rem;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 20px;
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.search-line__btn:hover,
.search-line__btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.search-line-btn__text {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  text-align: center;
  color: #ffffff;
}

.search-nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.search-nav__item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-bottom: 24px;
  height: 2.2222rem;
  background: #fefefe;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
}

.search-nav__item:not(:last-child) {
  margin-right: 10px;
}

.search-nav__item::after {
  content: '';
  position: absolute;
  top: 0.6111rem;
  right: 0.6111rem;
  width: 1.0556rem;
  height: 1.0556rem;
  background-image: url('../../assets/image/arrow.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.search-nav__item_active::after {
  top: 0.5556rem;
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -webkit-transition: -webkit-transform 0.3s easy;
  transition: -webkit-transform 0.3s easy;
  -o-transition: transform 0.3s easy;
  transition: transform 0.3s easy;
  transition: transform 0.3s easy, -webkit-transform 0.3s easy;
}

.search-nav__item_1 {
  max-width: 176px;
  min-width: 135px;
}

.search-nav__item_2 {
  max-width: 289px;
  min-width: 135px;
}
.search-nav__item_3 {
  max-width: 138px;
  min-width: 99px;
}
.search-nav__item_4 {
  max-width: 211px;
  min-width: 65px;
}
.search-nav__item_5 {
  max-width: 186px;
  min-width: 99px;
}

.search-nav__text {
  padding: 0.5556rem 2.2222rem 0.5556rem 1.6111rem;
}

@media (max-width: 480px) {
  .search {
    margin-top: 23px;
  }

  .search__container {
    padding: 0 20px;
  }

  .search__bar {
    margin-bottom: 16px;
  }

  .search-bar__desc {
    margin-top: 5px;
    margin-left: 20px;
  }

  .search-nav__item {
    margin-bottom: 16px;
  }

  .search-nav__text {
    padding-left: 14px;
  }

  .search-line__input {
    height: 28px;
  }

  .search-line__btn {
    padding: 6.5px 18px 5.5px;
  }

  .search-line-btn__text {
    font-size: 14px;
    line-height: 16px;
  }

  .search-nav__list {
    margin-left: 10px;
  }

  .search-nav__item {
    margin-right: 15px;
  }
}

@media (max-width: 320px) {
  .search__container {
    padding: 0;
  }
}
</style>

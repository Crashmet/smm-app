<template>
  <section class="search">
    <div class="search__container container">
      <div class="search__line">
        <input class="search-line__input" type="text" />
        <button class="search-line__btn">
          <span class="search-line-btn__text">поиск</span>
        </button>
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
export default {
  name: 'Search',
  data() {
    return {
      isCategoryActive: false,
      isBrandActive: false,
      isAgeActive: false,
      isGenderActive: false,
      isRegionActive: false,
    };
  },
};
</script>

<style scoped>
.search {
  margin-top: 3.1111rem;
}

.search__container {
  padding: 0 4.4444rem;
}

.search__line {
  display: flex;
  align-items: center;
  margin-bottom: 3.6667rem;
  border-radius: 20px;
  background: #ffffff;
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.search-line__input {
  padding-left: 20px;
  width: 100%;
  height: 2.7778rem;
  border: none;
  border-radius: 20px;
  background: #ffffff;
}

.search-line__btn {
  right: 0;
  bottom: 0;
  padding: 0.6111rem 3rem 0.6667rem;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.search-nav__item {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  margin-bottom: 24px;
  margin-right: 10px;
  height: 2.2222rem;
  background: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
}

.search-nav__item::after {
  content: '';
  position: absolute;
  top: 0.6111rem;
  right: 0.6111rem;
  width: 1.0556rem;
  height: 1.0556rem;
  background: url('@/assets/image/arrow.svg') 0 0 / contain no-repeat;
}

.search-nav__item_active::after {
  top: 0.5556rem;
  transform: rotate(-180deg);
  transition: transform 0.3s easy;
}

.search-nav__item_1 {
  max-width: 176px;
  min-width: 140px;
}

.search-nav__item_2 {
  max-width: 289px;
  min-width: 140px;
}
.search-nav__item_3 {
  max-width: 138px;
  min-width: 102px;
}
.search-nav__item_4 {
  max-width: 211px;
  min-width: 70px;
}
.search-nav__item_5 {
  max-width: 186px;
  min-width: 102px;
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
}

@media (max-width: 320px) {
  .search__container {
    padding: 0;
  }

  .search-nav__list {
    margin-left: 10px;
  }

  .search-line__input {
    height: 30px;
  }

  .search-line__btn {
    padding: 7px 18px;
  }

  .search-line-btn__text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>

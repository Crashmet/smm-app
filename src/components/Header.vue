<template>
  <header>
    <div class="container header__container">
      <div class="header__row">
        <div class="header__row_left">
          <router-link class="header-left__logo" to="/">
            <h2 class="header-left-logo__title_left">SMM</h2>
            <h2 class="header-left-logo__title_right">Planeta</h2></router-link
          >
          <p class="header-left__desc">более 50000 блогеров</p>
        </div>

        <div v-if="entryStatus !== 200">
          <div class="header__row_right">
            <ul class="header-right__list_left">
              <li class="header-right__item">
                <router-link class="header-right__link" to="/"
                  >Контакты</router-link
                >
              </li>

              <li class="header-right__item">
                <router-link class="header-right__link" to="/register"
                  >Зарегистрироваться</router-link
                >
              </li>
            </ul>

            <router-link to="/login" class="header-right__button_left">
              <span class="header-right-button__text">Войти</span>
            </router-link>
          </div>
        </div>

        <div v-else>
          <div class="header__row_right">
            <ul class="header-right__list_left">
              <li class="header-right__item">
                <router-link class="header-right__link" to="/"
                  >Контакты</router-link
                >
              </li>

              <li class="header-right__item">
                <router-link
                  @click="handlerLogout"
                  class="header-right__link"
                  to="/"
                  >Выйти из аккаунта</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',

  computed: {
    ...mapGetters('headerProfileStore', ['users']),
    ...mapGetters('authStore', ['entryStatus']),

    handlerLogout() {
      this.onLogout();
    },

    lastPageAccount() {
      const pageActive = this.users.find((el) => el.isActive === true);

      return pageActive.routerName;
    },
  },

  methods: {
    ...mapActions('authStore', ['onLogout']),
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

.header__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 60px;
}

.header__row_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-left__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 1rem;
}

.header-left-logo__title_left {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.header-left-logo__title_right {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
  -webkit-transition: text-shadow 0.3s ease-in;
  -o-transition: text-shadow 0.3s ease-in;
  transition: text-shadow 0.3s ease-in;
}

.header-left__logo:hover > .header-left-logo__title_right,
.header-left__logo:active > .header-left-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.header-left__desc {
  padding-top: 0.1111rem;
  font-weight: 500;
  font-size: 1rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__row_right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-right__list_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-right__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 1.5556rem;
}

.header-right__link {
  font-size: 1rem;
  color: #0d0d0d;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-right__link:hover,
.header-right__link:active {
  color: #ff3600;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-right__button_left {
  padding: 0.5rem 1.8889rem 0.5556rem;
  text-align: center;
  border-radius: 20px;
  background: rgba(255, 54, 0, 0.8);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.header-right__button_left:hover,
.header-right__button_left:active {
  background: rgba(255, 54, 0, 0.91);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.header-right-button__text {
  font-weight: 700;
  font-size: 1rem;
  /* line-height: 1rem; */
  color: #ffffff;
}

@media (max-width: 960px) {
  .header__row_left {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }

  .header-left__desc {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .header-right__list_left {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-right__button_left {
    padding: 3px 17px 3.5px;
  }

  .header-right-button__text {
    font-size: 14px;
  }
}

@media (max-width: 320px) {
  .header-left__logo {
    margin-right: 0;
  }
}
</style>

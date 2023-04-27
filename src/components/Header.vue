<template>
  <header>
    <div class="container header__container">
      <div class="header__row">
        <div class="header__row_left">
          <router-link class="header-left___logo" to="/">
            <span class="header-left___logo_left">SMM</span>
            <span class="header-left___logo_right">Planeta</span></router-link
          >
          <p class="header-left__desc">более 50000 блогеров</p>
        </div>
        <div class="header__row_right">
          <ul class="header-right__list_left">
            <li class="header-right__item">
              <router-link class="header-right__link" to="/"
                >Контакты</router-link
              >
            </li>
            <li class="header-right__item">
              <router-link class="header-right__link" to="/about"
                >Зарегистрироваться</router-link
              >
            </li>
          </ul>
          <button class="header-right__button_left">
            <span class="header-right-button__text">Войти</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
}

.header__row_left {
  display: flex;
  align-items: center;
}

.header-left___logo {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.header-left___logo_left {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.header-left___logo_right {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
}

.header-left___logo:hover > .header-left___logo_right,
.header-left___logo:active > .header-left___logo_right {
  text-shadow: 4px 1px 6px #d3792b;
  transition: text-shadow 0.2s ease-in;
}

.header-left__desc {
  padding-top: 0.2778rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__row_right {
  display: flex;
  align-items: center;
}

.header-right__list_left {
  display: flex;
  align-items: center;
}

.header-right__item {
  display: flex;
  align-items: center;
  margin-right: 1.5556rem;
}

.header-right__link {
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #0d0d0d;
}

.header-right__button_left {
  padding: 0.5556rem 1.8889rem;
  text-align: center;
  border-radius: 20px;
  background: rgba(255, 54, 0, 0.8);
  transition: background 0.2s ease-in;
}

.header-right__button_left:hover,
.header-right__button_left:active {
  background: rgba(255, 54, 0, 0.91);
}

.header-right-button__text {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #ffffff;
}

@media (max-width: 960px) {
  .header__row_left {
    flex-direction: column;
    align-items: start;
  }
}

@media (max-width: 768px) {
  .header-right__list_left {
    display: none;
  }
}

@media (max-width: 320px) {
  .header-left___logo {
    margin-right: 0;
  }

  .header-right__button_left {
    padding: 6px 17px;
  }

  .header-right-button__text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>

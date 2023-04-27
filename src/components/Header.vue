<template>
  <header>
    <div class="container header__container">
      <div class="header__row">
        <div class="header__row_left">
          <div class="header-left___logo">
            <a href="#" class="header-left___logo_left">SMM</a>
            <a href="#" class="header-left___logo_right">Planeta</a>
          </div>
          <p class="header-left__desc">более 50000 блогеров</p>
        </div>
        <div class="header__row_right">
          <ul class="header-right__list_left">
            <li class="header-right__item">
              <a href="#" class="header-right__link">Контакты</a>
            </li>
            <li class="header-right__item">
              <a href="#" class="header-right__link">Зарегистрироваться</a>
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
.header__container {
  max-width: 1180px;
  padding: 0 20px;
}

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
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
}

.header-left___logo_right {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
}

.header-left___logo_left:hover,
.header-left___logo_left:active,
.header-left___logo_right:hover,
.header-left___logo_right:active {
  text-shadow: 4px 1px 6px #d3792b;
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

@media (max-width: 440px) {
  .header__container {
    padding: 0;
  }

  .header-left___logo {
    margin-right: 0;
  }

  .header-right__button_left {
    padding: 5px 16px;
  }

  .header-right-button__text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>

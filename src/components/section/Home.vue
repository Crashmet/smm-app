<template>
  <section class="home">
    <div class="home__container container">
      <div class="home__logo">
        <div class="home-logo__title">
          <h1 class="home-logo__title_left">SMM</h1>
          <h1 class="home-logo__title_right">Planeta</h1>
        </div>
        <h3 class="home-logo__desc">решения и возможности</h3>
      </div>

      <ul class="home-check__list">
        <li class="home-check__item">Поиск автора</li>
        <li class="home-check__item">Открытие сообщества</li>
        <li class="home-check__item">Захват контента</li>
        <li class="home-check__item">Адаптация и подбор персонала</li>
        <li class="home-check__item">Управляй этим</li>
      </ul>

      <ul class="home-statistics__list">
        <li class="home-statistics__item">
          <p class="statistics-item__top">Охват</p>
          <p class="statistics-item__bottom">81 358 879</p>
        </li>
        <li class="home-statistics__item">
          <p class="statistics-item__top">Блогеров</p>
          <p class="statistics-item__bottom">542</p>
        </li>
        <li class="home-statistics__item">
          <p class="statistics-item__top">Постов</p>
          <p class="statistics-item__bottom">7 236</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  margin-top: 8.3333rem;
}

.home__container {
  position: relative;
  padding: 0 4.2778rem;
}

.home__container::before {
  content: '';
  position: absolute;
  z-index: -10;
  width: 43.5556rem;
  height: 42.5rem;
  right: -10.8333rem;
  bottom: -90px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 118, 0, 0.83) 5.73%,
    rgba(255, 54, 0, 0.53) 69.27%
  );
  filter: blur(50px);
}

.home__container::after {
  content: '';
  position: absolute;
  z-index: -9;
  width: 28.6111rem;
  height: 32.5rem;
  right: 1.2778rem;
  bottom: 0;
  background: url('@/assets/image/hand-mobile.png') 0 0 / contain no-repeat;
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
}

.home__logo {
  margin-bottom: 4rem;
  cursor: default;
}

.home-logo__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.home-logo__title_left {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.home-logo__title_right {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
}

.home-logo__title:hover > .home-logo__title_right,
.home-logo__title:active > .home-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.home-logo__desc {
  font-weight: 400;
  font-size: 1.3333rem;
  line-height: 1.5556rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.home-check__list {
  margin-bottom: 4.7778rem;
}

.home-check__item {
  position: relative;
  padding-left: 58px;
  height: 1.6667rem;
  font-size: 1rem;
  line-height: 1.6667rem;
  color: #0d0d0d;
}

.home-check__item:not(:last-child) {
  margin-bottom: 1.1111rem;
}

.home-check__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 1.6667rem;
  height: 1.6667rem;
  background: url('@/assets/image/checkmark.svg') 0 0 / contain no-repeat;
}

.home-statistics__list {
  display: flex;
  align-items: center;
}

.home-statistics__item {
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #0d0d0d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.home-statistics__item:not(:last-child) {
  margin-right: 3.8889rem;
}

.statistics-item__top {
  margin-bottom: 0.5rem;
}
</style>

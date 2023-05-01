<template>
  <div class="bloger-profile">
    <p class="bloger-profile__link">Изменить профиль</p>

    <div class="bloger-profile__body body">
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">E-mail</span>
        </li>

        <li class="body__cell">
          <input type="email" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Имя</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Фамилия</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Instagram</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <input type="text" class="body__input" placeholder="nickname" />
            </li>

            <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="body__input_price"
              />
            </li>

            <li class="body__cell-item">
              <button class="body__btn">
                Разрешить доступ к статистике аккаунта
              </button>
            </li>

            <li class="body__cell-item">
              <a href="#" class="body__link"> Описать порядок работы api </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Tiktok</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <input type="text" class="body__input" placeholder="nickname" />
            </li>

            <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="body__input_price"
              />
            </li>

            <li class="body__cell-item">
              <button class="body__btn">
                Разрешить доступ к статистике аккаунта
              </button>
            </li>

            <li class="body__cell-item">
              <a href="#" class="body__link"> Описать порядок работы api </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Сменить пароль</span>
        </li>

        <li class="body__cell">
          <input type="password" class="body__input" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogerProfile',
};
</script>

<style scoped>
.bloger-profile__link {
  margin-bottom: 2rem;
  text-decoration-line: underline;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.body__row {
  display: flex;
  margin-bottom: 0.9444rem;
}

.body__cell {
  height: 1.6667rem;
}

.body__cell-label {
  width: 16%;
}

.body__cell-list {
  display: flex;
  flex-wrap: wrap;
}

.body__cell-item {
}

.body__label {
}

.body__cell-input_price {
  width: 13.2%;
}

.body__cell-btn {
  width: 30%;
}

.body__cell-link {
  width: 21%;
}

.body__input {
  padding-left: 11px;
  width: 93%;
  height: 100%;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.61);
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
}

.body__input_price {
  width: 90%;
  height: 100%;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.61);
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
}

.body__btn {
  width: 95%;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
}

.body__link {
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-decoration-line: underline;
}
</style>

<template>
  <section class="register">
    <div class="register__container container">
      <div class="register__body">
        <h2 class="register__title">Регистрация</h2>

        <form class="register__form">
          <div>
            <input
              type="email"
              class="register__input register__input_email"
              aria-describedby="emailHelp"
              placeholder="E-mail"
              data-required="email"
              data-invalid-message="Please provide valid email example@example.com"
            />

            <input
              type="password"
              class="register__input register__input_pass-1"
              placeholder="Пароль 1"
              data-required="password"
            />

            <input
              type="password"
              class="register__input register__input_pass-2"
              placeholder="Пароль 2"
              data-required="password"
            />
          </div>

          <button type="submit" class="register__submit-btn">
            <span class="submit-btn__text">Зарегистрироваться </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.register {
  margin-top: 4.2222rem;
  margin-bottom: 5.3333rem;
}

.register__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.register__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 20rem;
  width: 100%;
}

.register__title {
  margin-bottom: 2.4445rem;
  font-weight: 700;
  font-size: 1.7778rem;
  line-height: 2.1111rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.register__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  width: 100%;
}

.register__input {
  margin-bottom: 1.1111rem;
  padding: 6px 30px;
  width: 100%;
  height: 33px;
  background: #ffffff;
  border: 1px solid rgba(255, 54, 0, 0.7);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.register__input:last-child {
  margin-bottom: 1.6667rem;
}

.register__submit-btn {
  padding: 7px 34px;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 20px;
}

.register__submit-btn:hover,
.register__submit-btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.submit-btn__text {
  font-weight: 700;
  text-align: center;
  color: #ffffff;
}

.register__aside {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.register__restore-pass {
  text-decoration: underline;
  -webkit-text-decoration-color: #0d0d0d;
  text-decoration-color: #0d0d0d;
}

@media (max-width: 440px) {
  .register {
    margin-top: 55px;
    margin-bottom: 50px;
  }

  .register__body {
    max-width: 221px;
  }

  .register__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 23 px;
  }

  .register__input {
    margin-bottom: 8px;
    padding: 4px 30px 7px;
    height: 30px;
  }

  .register__input:last-child {
    margin-bottom: 16px;
  }

  .register__submit-btn {
    padding: 9px 15px;
  }

  .submit-btn__text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>

<template>
  <section class="register">
    <div class="register__container container">
      <div class="register__body">
        <h2 class="register__title">Регистрация</h2>

        <form class="register__form">
          <div class="register-form__list">
            <div class="register-form__item">
              <input
                v-model="username"
                type="text"
                class="register__input"
                placeholder="Username"
              />

              <template v-if="validatorUsername.length">
                <p class="register__validation">{{ validatorUsername }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="first_name"
                type="text"
                class="register__input"
                placeholder="Имя"
              />
            </div>

            <div class="register-form__item">
              <input
                v-model="last_name"
                type="text"
                class="register__input"
                placeholder="Фамилия"
              />
            </div>

            <div class="register-form__item">
              <input
                v-model="email"
                type="email"
                class="register__input register__input_email"
                placeholder="E-mail"
              />

              <template v-if="validatorEmail.length">
                <p class="register__validation">{{ validatorEmail }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="password"
                type="password"
                class="register__input register__input_pass-1"
                placeholder="Пароль 1"
              />

              <template v-if="validatorPassword.length">
                <p class="register__validation">{{ validatorPassword }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="password2"
                type="password"
                class="register__input register__input_pass-2"
                placeholder="Пароль 2"
              />

              <template
                v-if="validatorPassword2.length || nonFieldErrors.length"
              >
                <p class="register__validation">
                  {{ validatorPassword2 }} {{ nonFieldErrors }}
                </p>
              </template>
            </div>
          </div>

          <button
            @click.prevent="handlerSubmit"
            type="submit"
            class="register__submit-btn"
          >
            <span class="submit-btn__text">Зарегистрироваться </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Register',

  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: '',

      validatorUsername: '',
      validatorPassword: '',
      validatorPassword2: '',
      validatorEmail: '',
      nonFieldErrors: '',
    };
  },

  computed: {
    ...mapGetters('registerStore', ['validatorResponse', 'entryStatus']),
  },

  methods: {
    ...mapActions('registerStore', ['onRegistration']),

    handlerSubmit() {
      const registerData = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        password2: this.password2,
        username: this.username,
      };

      this.onRegistration(registerData);

      this.resetFormPassword();
    },

    resetFormPassword() {
      this.password = '';
      this.password2 = '';
    },

    resetValidatorMassages() {
      this.validatorUsername = '';
      this.validatorPassword = '';
      this.validatorPassword2 = '';
      this.validatorEmail = '';
      this.nonFieldErrors = '';
    },

    addValidatorMassages() {
      for (let el of Object.entries(this.validatorResponse)) {
        const massage = el[1].reduce((acc, el) => acc + ' ' + el);

        if (el[0] === 'email') {
          this.validatorEmail = massage;
        } else if (el[0] === 'password') {
          this.validatorPassword = massage;
        } else if (el[0] === 'password2') {
          this.validatorPassword2 = massage;
        } else if (el[0] === 'username') {
          this.validatorUsername = massage;
        } else if (el[0] === 'non_field_errors') {
          this.nonFieldErrors = massage;
        }
      }
    },
  },

  watch: {
    validatorResponse() {
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },

    entryStatus() {
      if (this.entryStatus === '201') {
        this.$router.push({ path: '/' });
      }
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

.register-form__list {
  width: 100%;
}

.register-form__item {
  margin-bottom: 1.1111rem;
  width: 100%;
}

.register-form__item:last-child {
  margin-bottom: 1.6667rem;
}

.register__input {
  padding: 6px 30px;
  width: 100%;
  height: 33px;
  background: #ffffff;
  border: 1px solid rgba(255, 54, 0, 0.7);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.register__validation {
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: rgba(255, 54, 0, 1);
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

  .register-form__item {
    margin-bottom: 8px;
  }

  .register-form__item:last-child {
    margin-bottom: 16px;
  }

  .register__input {
    height: 30px;
    padding: 4px 30px 7px;
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

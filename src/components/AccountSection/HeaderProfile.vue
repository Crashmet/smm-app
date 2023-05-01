<template>
  <table class="header-profile">
    <thead class="header-profile__head">
      <tr class="header-profile__title-row">
        <th
          class="header-profile__title-cell"
          v-for="user in users"
          :key="user"
          @click="handlerClickUser(user.name, user.routerName)"
        >
          <span
            class="header-profile__title-text"
            :class="user.isActive ? 'header-profile__title-text_active' : ''"
            >{{ user.name }}</span
          >
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="header-profile__body-row" v-if="users[0].isActive">
        <td
          class="header-profile__body-cell"
          v-for="setting in blogerMenu"
          :key="setting"
          @click="handlerClickBlogerMenu(setting.name, setting.routerName)"
        >
          <span
            class="header-profile__body-text"
            :class="setting.isActive ? 'header-profile__body-text_active' : ''"
            >{{ setting.name }}</span
          >
        </td>
      </tr>

      <tr v-else>
        <td
          class="header-profile__body-cell"
          v-for="setting in advertiserMenu"
          :key="setting"
          @click="handlerClickAdvertiserMenu(setting.name, setting.routerName)"
        >
          <span
            class="header-profile__body-text"
            :class="setting.isActive ? 'header-profile__body-text_active' : ''"
            >{{ setting.name }}</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HeaderProfile',

  data() {
    return {};
  },

  computed: {
    ...mapGetters('headerProfileStore', [
      'users',
      'blogerMenu',
      'advertiserMenu',
    ]),
  },

  methods: {
    ...mapActions('headerProfileStore', [
      'setUserStatus',
      'setBlogerMenuStatus',
      'setBlogerMenuRouter',
      'setAdvertiserMenuStatus',
      'setAdvertiserMenuRouter',
    ]),

    handlerClickUser(name, routerName) {
      this.setUserStatus(name);
      this.$router.push(routerName);
    },

    handlerClickBlogerMenu(name, routerName) {
      this.setBlogerMenuStatus(name);
      this.setBlogerMenuRouter(routerName);
      this.$router.push(routerName);
    },

    handlerClickAdvertiserMenu(name, routerName) {
      this.setAdvertiserMenuStatus(name);
      this.setAdvertiserMenuRouter(routerName);
      this.$router.push(routerName);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  cursor: pointer;
}

thead {
  width: 100%;
}

th {
  text-align: left;
}

th:first-child {
  width: 16%;
}

th:nth-child(2) {
  width: 19%;
}

thead,
tbody {
  margin-bottom: 0.4444rem;
}

th:hover > .header-profile__title-text,
th:active > .header-profile__title-text,
td:hover > .header-profile__body-text,
td:active > .header-profile__body-text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.header-profile__title-text_active {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header-profile__body-text_active {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
</style>

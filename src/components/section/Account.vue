<template>
  <section class="account">
    <div class="account__container container">
      <div class="account__main">
        <header-profile />
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import HeaderProfile from '../AccountSection/HeaderProfile.vue';

export default {
  name: 'Account',
  components: { HeaderProfile },
};
</script>

<style scoped>
.account {
  margin-top: 4.1111rem;
  margin-bottom: 5.5556rem;
}

.account__container {
  padding: 0 48.9996px;
}

.account__main {
  max-width: 1102px;
  width: 100%;
  padding: 2.2222rem 0 2.2222rem 2.1111rem;
  background: rgba(255, 119, 0, 0.15);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

@media (max-width: 480px) {
  .account {
    margin-bottom: 60px;
  }

  .account__main {
    padding: 27px 0px 15px 10px;
  }

  .account__container {
    padding: 0;
  }
}

@media (max-width: 320px) {
}
</style>

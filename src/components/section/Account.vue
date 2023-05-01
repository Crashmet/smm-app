<template>
  <section class="profile">
    <div class="profile__container container">
      <div class="profile__main">
        <header-profile />
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import HeaderProfile from '../AccountSection/HeaderProfile.vue';

export default {
  name: 'Profile',
  components: { HeaderProfile },
};
</script>

<style scoped>
.profile {
  margin-top: 74px;
  margin-bottom: 100px;
}

.profile__container {
  padding: 0 49px;
}

.profile__main {
  max-width: 1102px;
  width: 100%;
  max-height: 460px;
  /* height: 100%; */
  padding: 40px 38px;
  background: rgba(255, 119, 0, 0.15);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
</style>

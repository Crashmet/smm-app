<template>
  <section class="profile">
    <div class="profile__container container">
      <header-profile />
      <router-view />
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

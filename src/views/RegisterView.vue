<template>
  <div class="register-view">
    <Header />
    <main>
      <Search />
      <Register />
      <Statistics />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '../components/section/Search.vue';
import Register from '../components/section/Register.vue';
import Statistics from '../components/section/Statistics.vue';

export default {
  name: 'RegisterView',
  components: {
    Header,
    Search,
    Register,
    Statistics,
  },
};
</script>

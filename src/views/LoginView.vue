<template>
  <div class="login-view">
    <Header />
    <main>
      <Search />
      <Login />
      <Statistics />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '@/components/section/Search.vue';
import Login from '@/components/section/Login.vue';
import Statistics from '@/components/section/Statistics.vue';

export default {
  name: 'LogintView',
  components: {
    Header,
    Search,
    Login,
    Statistics,
  },
};
</script>

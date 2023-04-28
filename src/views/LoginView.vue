<template>
  <div class="about">
    <Header />
    <Search />
    <Login />
    <Statistics />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '@/components/section/Search.vue';
import Login from '@/components/section/Login.vue';
import Statistics from '@/components/section/Statistics.vue';

export default {
  name: 'AboutView',
  components: {
    Header,
    Search,
    Login,
    Statistics,
  },
};
</script>

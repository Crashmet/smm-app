<template>
  <div class="about">
    <Header />
    <Search />
    <Register />
    <Statistics />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '@/components/section/Search.vue';
import Register from '@/components/section/Register.vue';
import Statistics from '@/components/section/Statistics.vue';

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

<template>
  <div class="home-page">
    <Header />
    <main>
      <Search />
      <Home />
      <Statistics />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '../components/section/Search.vue';
import Home from '../components/section/Home.vue';
import Statistics from '../components/section/Statistics.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Search,
    Home,
    Statistics,
  },
};
</script>

<style scoped>
.home-page {
  overflow: hidden;
}
</style>

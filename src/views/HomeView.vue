<template>
  <div class="home-page">
    <Header />
    <Search />
    <Home />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Search from '@/components/section/Search.vue';
import Home from '@/components/section/Home.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Search,
    Home,
  },
};
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>

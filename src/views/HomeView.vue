<template>
  <div class="home">
    <Header />
    <Search />
    <h1>This is a home page</h1>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '@/components/section/Search.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Search,
  },
};
</script>

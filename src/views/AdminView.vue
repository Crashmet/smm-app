<template>
  <div class="admin-view">
    <Header />
    <main>
      <Search />
      <Admin />
      <Statistics />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '../components/section/Search.vue';
import Admin from '../components/section/Admin.vue';
import Statistics from '../components/section/Statistics.vue';

export default {
  name: 'AdminView',
  components: {
    Header,
    Search,
    Admin,
    Statistics,
  },
};
</script>

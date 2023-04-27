<template>
  <div class="about">
    <Header />
    <Search />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '@/components/section/Search.vue';

export default {
  name: 'AboutView',
  components: {
    Header,
    Search,
  },
};
</script>

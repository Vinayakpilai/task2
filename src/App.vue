<template>
  <v-app>
    <v-main>
      <Pagination/>
    </v-main>
  </v-app>
</template>

<script>
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',

  components: {
    Pagination,
  },

  data: () => ({
    //
  }),
};
</script>

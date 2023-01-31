<template>
  <div>
    <v-card>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        must-sort
        :headers="headers"
        :loading="loading"
        :items="items"
        :search="search"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  data() {
    return {
      loading: false,
      search: "",
      headers: [
        { text: "Id", value: "id", align: "center" },
        { text: "Title", value: "title", align: "center" },
        { text: "Completed", value: "completed", align: "center" },
      ],
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  created() {
    this.$store.dispatch("getData").then(() => {
      this.loading = false;
    });
  },
  methods: {},
};
</script>
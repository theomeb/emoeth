<template>
  <v-container fluid>
    <snackbar :text="'This page is still under construction 😉'"></snackbar>

    <v-row justify="center">
      <v-col cols="12" class="justify-center d-flex">
        <h1 class="display-2 font-weight-light mb-3">
          Blog page
        </h1>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  import Snackbar from "../components/Snackbar";

  export default {
    name: 'About',
    components: {
      Snackbar,
    },
    data: () => {
      return {}
    },
    methods: {},
  };
</script>


<template>
  <v-slide-x-transition :appear="true">
    <v-snackbar
      v-model="showSnackbar" v-show="showSnackbar" bottom left color="error"
      class="snackbar-transition"
    >
      <v-icon class="mr-3" color="white" small>fas fa-circle-notch fa-spin</v-icon>
      {{ text }}
      <v-btn
        color="error" class="mr-2"
        fab x-small outlined
        @click="showSnackbar = false"
      >
        <v-icon color="white">fas fa-times</v-icon>
      </v-btn>
    </v-snackbar>
  </v-slide-x-transition>
</template>

<script>
  export default {
    name: "Snackbar",
    data() {
      return {
        showSnackbar: true
      }
    },
    props: {
      text: String,
    },
    methods: {}
  }
</script>

<style scoped>

  .snackbar-transition {
    transition-duration: 1s;
    transition-delay: 2s;
  }

</style>

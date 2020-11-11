<template>

  <v-slide-x-transition>
    <v-snackbar
      v-model="showSnackbar" bottom left color="error"
      class="snackbar-transition caption" :key="snackbarKey" :timeout="0"
    >
      <font-awesome-icon :icon="['fas', 'circle-notch']" spin class="fa-spin mr-3" size="lg"/>
      {{ text }}
      <v-btn
        color="error" class="mr-2"
        fab x-small outlined
        @click="closeSnackbar()"
      >
        <font-awesome-icon :icon="['fas', 'times']" size="lg" style="color: white"/>
      </v-btn>
    </v-snackbar>
  </v-slide-x-transition>
</template>

<script>
  export default {
    name: "Snackbar",
    data() {
      return {
        showSnackbar: false,
        snackbarKey: 0, //to re-render component
      }
    },
    props: {
      text: String,
    },
    methods: {
      openSnackbar() {
        this.showSnackbar = true;
      },
      closeSnackbar() {
        this.showSnackbar = false;
        this.snackbarKey = 1;
      },
    },
    mounted() {
      setTimeout(() => {
        this.openSnackbar()
      }, 2000);
      setTimeout(() => {
        this.closeSnackbar()
      }, 7000)
    }
  }
</script>

<style scoped>

  .snackbar-transition {
    transition-duration: 1s;
  }

  .fa-spin {
    transition-duration: 1s;
    color: white;
  }

</style>

<template>
  <div class="header">
    <v-app-bar
      app
      color="blank"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Building bee logo"
          class="shrink mr-2"
          contain
          src="../assets/bee.png"
          transition="scale-transition"
          width="40"
        />

        <h1
          class="shrink mt-1 hidden-sm-and-down"
          min-width="100"
          width="100"
        >Emoeth</h1>
      </div>

      <v-spacer></v-spacer>

      <vs-button to="/">Home</vs-button>
      <vs-button warn to="/about">About me</vs-button>
      <vs-button warn>Blog</vs-button>

      <vs-button icon color="facebook">
        <i class='fab fa-facebook'></i>
      </vs-button>
      <vs-button icon color="linkedin">
        <i class='fab fa-linkedin'></i>
      </vs-button>
      <vs-button icon color="medium">
        <i class='fab fa-medium'></i>
      </vs-button>
      <vs-button icon color="spotify">
        <i class='fab fa-spotify'></i>
      </vs-button>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: "Header",
    components: {},
    data: () => ({
      activeItem: 0
    })
  }
</script>

<style scoped>

</style>

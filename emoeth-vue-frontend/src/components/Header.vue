<template>
  <div class="header">
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Building bee logo"
          class="shrink mr-2"
          style="margin-bottom: 8px"
          contain
          src="../assets/rocket.png"
          transition="scale-transition"
          width="40"
        />

        <h1
          class="shrink mt-1 hidden-sm-and-down font-weight-thin"
          min-width="100"
          width="100"
          transition="scale-transition"
          style="padding-left: 4px"
        >
          Emoeth
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-slide-x-transition
      >
        <div v-show="showButtons" class="buttons">
          <vs-button to="/" color="dark" transparent animation-type="vertical">
            Home
            <template #animate>
              <i class='fas fa-home'></i>
            </template>
          </vs-button>
          <vs-button to="/about" color="dark" transparent animation-type="vertical">
            About
            <template #animate>
              <i class='fas fa-user-circle'></i>
            </template>
          </vs-button>
          <vs-button to="/projects" color="dark" transparent animation-type="vertical" disabled>
            Projects
            <template #animate>
              <i class='fas fa-user-circle'></i>
            </template>
          </vs-button>
          <vs-button to="/blog" color="dark" transparent animation-type="vertical">
            Blog
            <template #animate>
              <i class='fas fa-newspaper'></i>
            </template>
          </vs-button>
          <vs-button
            href="mailto:theomeb@gmail.com" color="danger" transparent
            animation-type="vertical" style="margin-right: 14px"
          >
            Contact
            <template #animate>
              <i class="fas fa-envelope"></i>
            </template>
          </vs-button>

          <vs-button icon color="linkedin" href="https://www.linkedin.com/in/theomeborck/" blank>
            <i class='fab fa-linkedin'></i>
          </vs-button>
          <vs-button icon color="dark" href="https://github.com/theomeb" blank>
            <i class='fab fa-github'></i>
          </vs-button>
          <vs-button icon color="medium" href="https://medium.com/@theomeb" blank>
            <i class='fab fa-medium'></i>
          </vs-button>
          <vs-button icon color="facebook" href="https://www.facebook.com/theomeb" blank>
            <i class='fab fa-facebook'></i>
          </vs-button>
          <vs-button icon color="spotify" disabled>
            <i class='fab fa-spotify'></i>
          </vs-button>
        </div>
      </v-slide-x-transition>

    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data: () => ({
      showButtons: false,
    }),
    mounted() {
      this.showButtons = true;
    }
  }
</script>

<style scoped>

  .buttons {
    transition-duration: 1s;
    display: flex;
  }
</style>

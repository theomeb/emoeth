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
          class="shrink mt-1 hidden-sm-only font-weight-thin"
          min-width="100"
          width="100"
          transition="scale-transition"
          style="padding-left: 4px"
        >
          Emoeth
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition :appear="true">
        <div class="transitions">

          <vs-button class="hidden-sm-and-up mr-0" size="xl" color="dark" transparent @click="mobileDrawer=true">
            <i class="fas fa-bars"></i>
          </vs-button>

          <div id="desktop-menu" class="hidden-xs-only d-sm-flex">
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
                <i class='fas fa-tasks'></i>
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
              animation-type="vertical"
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
        </div>
      </v-slide-x-reverse-transition>

    </v-app-bar>


    <v-navigation-drawer
      id="mobile-menu"
      v-model="mobileDrawer"
      fixed
      temporary
      right
      width="110"
    >
      <v-list-item class="pr-2">

        <v-spacer></v-spacer>


        <v-slide-x-reverse-transition>
          <vs-button v-if="mobileDrawer" class="transitions" size="xl" color="dark" transparent
                     @click="mobileDrawer=false">
            <i class="fas fa-arrow-right"></i>
          </vs-button>
        </v-slide-x-reverse-transition>

      </v-list-item>

      <v-divider></v-divider>

      <v-slide-x-reverse-transition>

      <v-container v-if="mobileDrawer" fluid class="transitions pa-0">
        <v-row>
          <v-col cols="12" class="pb-0">
            <vs-button to="/" shadow>
              <i class='fas fa-home pr-2'></i> Home
            </vs-button>
            <vs-button to="/about" shadow>
              <i class='fas fa-user-circle pr-2'></i> About
            </vs-button>
            <vs-button to="/projects" shadow disabled>
              <i class='fas fa-tasks pr-2'></i> Projetcs
            </vs-button>
            <vs-button to="/blog" shadow>
              <i class='fas fa-newspaper pr-2'></i> Blog
            </vs-button>
            <vs-button href="mailto:theomeb@gmail.com" color="danger" shadow>
              <i class='fas fa-envelope pr-2'></i> Contact
            </vs-button>
          </v-col>
        </v-row>

        <v-divider class="mx-4 mb-2"></v-divider>

        <v-row justify="center">
          <div cols="12" class="d-flex pb-0">
            <vs-button icon color="linkedin" href="https://www.linkedin.com/in/theomeborck/" blank>
              <i class='fab fa-linkedin'></i>
            </vs-button>
            <vs-button icon color="dark" href="https://github.com/theomeb" blank>
              <i class='fab fa-github'></i>
            </vs-button>
          </div>
          <div cols="12" class="d-flex pt-0">
            <vs-button icon color="medium" href="https://medium.com/@theomeb" blank>
              <i class='fab fa-medium'></i>
            </vs-button>
            <vs-button icon color="facebook" href="https://www.facebook.com/theomeb" blank>
              <i class='fab fa-facebook'></i>
            </vs-button>
          </div>
        </v-row>

      </v-container>
                </v-slide-x-reverse-transition>

    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        mobileDrawer: false,
        items: [
          {title: 'Home', icon: 'dashboard'},
          {title: 'About', icon: 'question_answer'},
        ],
      };
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

  .transitions {
    transition-duration: 0.8s;
  }
</style>

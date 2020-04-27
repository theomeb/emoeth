<template>
  <div class="header">
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      class="px-4 px-lg-12"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Building bee logo"
          class="shrink mr-2 mb-2 ml-lg-12"
          contain
          src="../assets/rocket.png"
          transition="scale-transition"
          width="40"
          title="Icon made by Freepik on Flaticon"
        />

        <h1
          class="shrink mt-1 font-weight-thin pl-1"
          min-width="100"
          width="100"
          transition="scale-transition"
        >
          Emoeth
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition :appear="true">
        <div class="transitions">

          <vs-button class="hidden-md-and-up mr-0" size="xl" color="dark" transparent
                     @click="mobileDrawer=true">
            <i class="fas fa-bars"></i>
          </vs-button>

          <div id="desktop-menu" class="hidden-sm-and-down d-md-flex pr-lg-12">

            <div
              v-for="pageItem in pageItems"
              :key="'desktop-' + pageItem.id" :id="'desktop-' + pageItem.id"
            >
              <vs-button
                v-if="pageItem.external_link" :href="pageItem.link" :disabled="pageItem.disabled"
                color="dark" transparent animation-type="vertical"
              >
                {{pageItem.title}}
                <template #animate>
                  <i :class='pageItem.icon'></i>
                </template>
              </vs-button>
              <vs-button
                v-else :to="pageItem.link" :disabled="pageItem.disabled"
                color="dark" transparent animation-type="vertical"
              >
                {{pageItem.title}}
                <template #animate>
                  <i :class='pageItem.icon'></i>
                </template>
              </vs-button>
            </div>

            <div
              v-for="socialNetworkItem in socialNetworksItems"
              :key="'desktop-social-' + socialNetworkItem.id"
              :id="'desktop-social' + socialNetworkItem.id"
            >
              <vs-button
                icon :color="socialNetworkItem.color" :href="socialNetworkItem.link" blank
                :disabled="socialNetworkItem.disabled"
              >
                <i :class='socialNetworkItem.icon'></i>
              </vs-button>
            </div>

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
      <v-list-item class="pr-2 elevation-3" style="height: 56px;">

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
              <div
                v-for="pageItem in pageItems"
                :id="'mobile-' + pageItem.id" :key="'mobile-' + pageItem.id"
              >
                <vs-button
                  v-if="pageItem.external_link"
                  :href="pageItem.link" shadow :disabled="pageItem.disabled"
                  :active="active === pageItem.id" @click="active=pageItem.id"
                >
                  <i :class="pageItem.icon + ' pr-2'"></i> {{pageItem.title}}
                </vs-button>
                <vs-button
                  v-else
                  :to="pageItem.link" shadow :disabled="pageItem.disabled"
                  :active="active === pageItem.id" @click="active=pageItem.id"
                >
                  <i :class="pageItem.icon + ' pr-2'"></i> {{pageItem.title}}
                </vs-button>
              </div>
            </v-col>
          </v-row>

          <v-divider class="mx-4 mb-2"></v-divider>

          <v-row class="ma-3 pa-0" justify="center">
            <v-col
              cols="6" class="pa-0"
              v-for="socialNetworkItem in socialNetworksItems"
              :id="'mobile-social' + socialNetworkItem.id"
              :key="'mobile-social' + socialNetworkItem.id"
            >
              <vs-button
                v-if="!socialNetworkItem.disabled"
                icon :color="socialNetworkItem.color" :href="socialNetworkItem.link" blank>
                <i :class='socialNetworkItem.icon'></i>
              </vs-button>
            </v-col>

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
        active: undefined,
        pageItems: [
          {
            id: 0,
            title: 'Home',
            icon: 'fas fa-home',
            link: '/home',
            external_link: false,
            disabled: false
          },
          {
            id: 1,
            title: 'About',
            icon: 'fas fa-user-circle',
            link: '/about',
            external_link: false,
            disabled: false
          },
          {
            id: 2,
            title: 'Projects',
            icon: 'fas fa-tasks',
            link: '/projects',
            external_link: false,
            disabled: true
          },
          {
            id: 3,
            title: 'Blog',
            icon: 'fas fa-newspaper',
            link: '/blog',
            external_link: false,
            disabled: false
          },
          {
            id: 4,
            title: 'Contact',
            icon: 'fas fa-envelope',
            link: 'mailto:theomeb@gmail.com',
            external_link: true,
            disabled: false,
          },
        ],
        socialNetworksItems: [
          {
            id: 0,
            name: 'LinkedIn',
            color: 'linkedin',
            link: 'https://www.linkedin.com/in/theomeborck/',
            icon: 'fab fa-linkedin',
            disabled: false,
          },
          {
            id: 1,
            name: 'Github',
            color: 'dark',
            link: 'https://github.com/theomeb',
            icon: 'fab fa-github',
            disabled: false,

          },
          {
            id: 2,
            name: 'Medium',
            color: 'medium',
            link: 'https://medium.com/@theomeb',
            icon: 'fab fa-medium',
            disabled: false,

          },
          {
            id: 3,
            name: 'Facebook',
            color: 'facebook',
            link: 'https://www.facebook.com/theomeb',
            icon: 'fab fa-facebook',
            disabled: false,

          },
        ]
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

  /*for mobile buttons*/
  .vs-button--active {
    transform: translateX(8px);
    -webkit-transform: translateX(8px);
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, var(--vs-shadow-opacity));
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, var(--vs-shadow-opacity));
  }

  .vs-button--shadow:active, .vs-button--shadow:hover {
    transform: translateX(5px);
    -webkit-transform: translateX(5px);
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, var(--vs-shadow-opacity));
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, var(--vs-shadow-opacity));
  }

</style>

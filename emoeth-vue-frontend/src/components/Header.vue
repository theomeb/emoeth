<template>
  <div class="header">
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      class="px-0 px-lg-8"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Code logo"
          class="shrink mr-2 ml-lg-12"
          contain
          src="../assets/code_black.png"
          transition="scale-transition"
          width="40"
          title="Made by Icongeek26 - Flaticon"
        />

        <v-fade-transition :appear="true">
          <h2
            v-if="displayTitle"
            class="shrink mt-1 font-weight-light pl-2"
            min-width="100"
            width="100"
            transition="scale-transition"
          >
            {{displayedTitle}}
          </h2>
        </v-fade-transition>

      </div>

      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition :appear="true">
        <div class="transitions">

          <vs-button class="hidden-md-and-up mr-0" size="xl" color="dark" transparent
                     @click="mobileDrawer=true">
            <font-awesome-icon :icon="['fas', 'bars']"/>
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
                  <font-awesome-icon :icon="pageItem.icon" size="lg"/>
                </template>
              </vs-button>
              <vs-button
                v-else :to="pageItem.link" :disabled="pageItem.disabled"
                color="dark" transparent animation-type="vertical"
              >
                {{pageItem.title}}
                <template #animate>
                  <font-awesome-icon :icon="pageItem.icon" size="lg"/>
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
                <font-awesome-icon :icon="socialNetworkItem.icon" size="lg"/>
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
            <font-awesome-icon :icon="['fas', 'arrow-right']"/>
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
                  <font-awesome-icon :icon="pageItem.icon" pull="left" class="pr-1"/>
                  {{pageItem.title}}
                </vs-button>
                <vs-button
                  v-else
                  :to="pageItem.link" shadow :disabled="pageItem.disabled"
                  :active="active === pageItem.id" @click="active=pageItem.id"
                >
                  <font-awesome-icon :icon="pageItem.icon" pull="left" class="pr-1"/>
                  {{pageItem.title}}
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
                <font-awesome-icon :icon="socialNetworkItem.icon" size="lg"/>
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
            icon: ['fas', 'home'],
            link: '/home',
            external_link: false,
            disabled: false
          },
          {
            id: 1,
            title: 'About',
            icon: ['fas', 'user-circle'],
            link: '/about',
            external_link: false,
            disabled: false
          },
          {
            id: 2,
            title: 'Projects',
            icon: ['fas', 'tasks'],
            link: '/projects',
            external_link: false,
            disabled: true
          },
          {
            id: 3,
            title: 'Blog',
            icon: ['fas', 'newspaper'],
            link: '/blog',
            external_link: false,
            disabled: false
          },
          {
            id: 4,
            title: 'Contact',
            icon: ['fas', 'envelope'],
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
            icon: ['fab', 'linkedin'],
            disabled: false,
          },
          {
            id: 1,
            name: 'Github',
            color: 'dark',
            link: 'https://github.com/theomeb',
            icon: ['fab', 'github'],
            disabled: false,

          },
          {
            id: 2,
            name: 'Medium',
            color: 'medium',
            link: 'https://medium.com/@theomeb',
            icon: ['fab', 'medium'],
            disabled: false,

          },
          {
            id: 3,
            name: 'Facebook',
            color: 'facebook',
            link: 'https://www.facebook.com/theomeb',
            icon: ['fab', 'facebook-square'],
            disabled: false,

          },
        ],
        titles: {
          landing: 'Théomé B.',
          home: 'Théomé B.',
          about: 'About me',
          blog: 'Blog'
        },
        displayTitle: true
      };
    },
    computed: {
      displayedTitle() {
        return this.titles[this.$route.name];
      }
    },
    watch: {
      displayedTitle: function () {
        this.displayTitle = false;
        setTimeout(() => {
          this.displayTitle = true;
        }, 500);
      }
    }
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

<template>
  <v-container fluid>

    <v-slide-x-transition :appear="true">
      <v-snackbar
        v-model="temporarySnackbar" v-if="temporarySnackbar" bottom left color="error"
        class="custom-transition"
      >
        <v-icon class="mr-3" color="white" small>fas fa-circle-notch fa-spin</v-icon>
        This page is still under construction 😉
        <v-btn
          color="error" class="mr-2"
          fab x-small outlined
          @click="temporarySnackbar = false"
        >
          <v-icon color="white">fas fa-times</v-icon>
        </v-btn>
      </v-snackbar>
    </v-slide-x-transition>


    <v-row
      justify="center" no-gutters v-for="experience in experiences"
      :key="'experience-' + experience.id" :id="'experience-' + experience.id"
      class="px-12 py-6"
    >

      <v-col cols="5">
        <v-slide-x-transition>
          <v-card
            class="custom-transition no-border-right"
            v-if="showIllustration"
          >
            <v-img
              height="280" class=""
              :src="experience.illustration"
            ></v-img>

          </v-card>
        </v-slide-x-transition>
      </v-col>

      <v-col cols="7" class="justify-center d-flex">
        <div class="experience-content">
          <v-slide-x-reverse-transition>
            <div
              v-if="showIllustration" :key="'floating-' + experience.id"
              class="elevation-2 pa-2 white floater custom-transition"
            >
              <v-img
                :src="experience.logo"
                :alt="experience.alt"
                width="140px"
              ></v-img>
            </div>
          </v-slide-x-reverse-transition>

          <v-fade-transition>
            <v-card
              v-if="showIllustration"
              transition="fade"
              class="no-border-left custom-transition"
              height="280px"
            >
              <v-card-title>{{experience.dates}}</v-card-title>
              <v-card-text>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>{{experience.title}}</v-list-item-title>
                    <v-list-item-subtitle v-for="mission in experience.missions"
                                          :key="'mission-' + mission.id">
                      {{mission.action}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-fade-transition>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'About',
    components: {},
    data: () => {
      return {
        showIllustration: false,
        temporarySnackbar: true,
        experiences: [
          {
            id: 0,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          },
          {
            id: 1,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          },
          {
            id: 2,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          }
        ]
      }
    },
    methods: {},
    mounted() {
      this.showIllustration = true;
    }
  };
</script>

<style scoped>
  .custom-transition {
    transition-duration: 1s;
    transition-delay: 0.2s;
  }


  .no-border-right {
    border-top-right-radius: unset !important;
    border-bottom-right-radius: unset !important;
    margin-right: 0;
  }

  .no-border-left {
    border-top-left-radius: unset !important;
    border-bottom-left-radius: unset !important;
    margin-left: 0;
  }


  .experience-content {
    position: relative;
  }

  .floater {
    position: absolute;
    z-index: 2;
    right: 30px;
    top: 30px;
    border-radius: 4px !important;
    transition-duration: 2s;
  }


  /*For transitions*/
  .slide-x-transition-enter, .slide-x-transition-leave-to {
    opacity: 0;
    transform: translateX(-80px);
  }

  .slide-x-reverse-transition-enter, .slide-x-reverse-transition-leave-to {
    opacity: 0;
    transform: translateX(80px);
  }
</style>

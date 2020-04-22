<template>
  <v-row
    justify="center" no-gutters class="px-12 mx-12 py-6"
    style="min-height: 340px; position:relative;"
  >

    <v-scale-transition :appear="true">
      <vs-button
        v-if="!displayExperience"
        class="scroll-btn" size="small" upload flat icon color="dark"
      >
        <i class="fas fa-arrow-down"></i>
      </vs-button>
    </v-scale-transition>

    <v-col cols="5">
      <v-slide-x-transition :appear="true">
        <v-card
          v-if="displayExperience"
          class="custom-transition no-border-right"
        >
          <v-img
            height="280" :lazy-src="experience.illustration" :src="experience.illustration"
            :alt="experience.alt"
          ></v-img>

        </v-card>
      </v-slide-x-transition>
    </v-col>

    <v-col cols="7" class="justify-center d-flex">
      <div class="experience-content">
        <v-slide-x-reverse-transition :appear="true">
          <div
            v-if="displayExperience"
            :key="'floating-' + experience.id"
            class="elevation-2 pa-2 white floater"
          >
            <v-img
              :src="experience.logo"
              :alt="experience.logo_alt"
              contain
              :width="experience.logo_width"
              style="max-height: 50px;"
            ></v-img>
          </div>
        </v-slide-x-reverse-transition>


        <!--        <v-scale-transition :appear="true" class="custom-transition">-->
        <!--          <v-img-->
        <!--            v-if="displayExperience" class="experience-icon" contain-->
        <!--            :src="require('../assets/mortarboard.svg')"-->
        <!--          ></v-img>-->
        <!--        </v-scale-transition>-->

        <v-fade-transition :appear="true">
          <v-card
            v-if="displayExperience"
            class="no-border-left custom-transition"
            height="280px"
          >
            <v-card-title class="font-weight-medium">{{experience.title}}</v-card-title>
            <v-card-subtitle>{{experience.dates}}</v-card-subtitle>
            <v-card-text>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-regular text-uppercase subtitle-1"
                    style="white-space: normal; line-height: 1"
                  >
                    {{experience.subtitle}}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-for="mission in experience.missions"
                    :key="'mission-' + mission.id" v-html="mission.action"
                    class="font-weight-light"
                  >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-fade-transition>
      </div>
    </v-col>

  </v-row>
</template>

<script>
  export default {
    name: "Experience",
    props: {
      experience: Object,
      displayExperience: Boolean,
    },
    methods: {}
  }
</script>

<style scoped>

  .scroll-btn {
    transition-duration: 0.8s;
    position: absolute;
    top: -20px;
  }

  .custom-transition {
    transition-duration: 1s;
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
    right: -10px;
    top: -15px;
    border-radius: 4px !important;
    transition-duration: 1.2s;
  }

  .experience-icon {
    position: absolute;
    z-index: 2;
    right: 10px;
    bottom: 20px;
    height: 40px;
    width: 40px;
    transition-duration: 1.2s;
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

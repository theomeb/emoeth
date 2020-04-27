<template>
  <v-row
    justify="center" no-gutters class="px-4 px-lg-12 mx-lg-12 py-6"
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

    <v-col cols="5" lg="6" v-if="!imageRightAligned">
      <v-slide-x-transition :appear="true">
        <v-card
          v-if="displayExperience"
          class="custom-transition no-border-right"
        >
          <v-img
            height="320px" :lazy-src="experience.lazy_illustration" :src="experience.illustration"
            :alt="experience.alt"
          ></v-img>

        </v-card>
      </v-slide-x-transition>
    </v-col>

    <v-col cols="7" lg="6" class="justify-center d-flex">
      <div class="experience-content">

        <v-slide-x-transition :appear="true" v-if="imageRightAligned">
          <v-img
            v-if="displayExperience"
            :key="'floating-' + experience.id"
            :src="experience.logo"
            :alt="experience.logo_alt"
            contain
            :width="experience.logo_width"
            class="pa-1 floater floater_left"
          ></v-img>
        </v-slide-x-transition>

        <v-slide-x-reverse-transition :appear="true" v-else>
          <v-img
            v-if="displayExperience"
            :key="'floating-' + experience.id"
            :src="experience.logo"
            :alt="experience.logo_alt"
            contain
            :width="experience.logo_width"
            class="pa-1 floater floater_right"
          ></v-img>
        </v-slide-x-reverse-transition>

        <v-fade-transition :appear="true">
          <v-card
            v-if="displayExperience"
            v-bind:class="[imageRightAligned ? 'no-border-right' : 'no-border-left' , 'custom-transition']"
            height="320px"
          >
            <div :align="imageRightAligned ? 'right' : ''">
              <v-card-title class="font-weight-medium" style="display: block">
                {{experience.title}}
              </v-card-title>
              <v-card-subtitle class="pb-0">{{experience.dates}}</v-card-subtitle>
            </div>

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

    <v-col cols="5" lg="6" v-if="imageRightAligned">
      <v-slide-x-reverse-transition :appear="true">
        <v-card
          v-if="displayExperience"
          class="custom-transition no-border-left"
        >
          <v-img
            height="320px" :lazy-src="experience.lazy_illustration" :src="experience.illustration"
            :alt="experience.alt"
          ></v-img>

        </v-card>
      </v-slide-x-reverse-transition>
    </v-col>

  </v-row>
</template>

<script>
  export default {
    name: "Experience",
    props: {
      experience: Object,
      displayExperience: Boolean,
      imageRightAligned: Boolean,
    }
  }
</script>

<style scoped>

  .scroll-btn {
    transition-duration: 0.8s;
    position: absolute;
    top: -5px;
    width: 80px;
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
    border-radius: 4px !important;
    transition-duration: 1.2s;
    z-index: 2;
    top: 10px;
    filter: drop-shadow(2px 2px 2px darkgrey);
  }

  .floater_left {
    left: 15px;
  }

  .floater_right {
    right: 15px;
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

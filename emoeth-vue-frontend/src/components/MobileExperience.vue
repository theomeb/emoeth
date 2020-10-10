<template>
  <v-row
    justify="center" no-gutters
  >
    <v-col cols="12">
      <v-parallax
        :src="experience.illustration" :v-src="experience.lazy_illustration"
        eager
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">

            <div class="experience-content">

              <v-slide-x-transition :appear="true">
                <v-img
                  :key="'floating-' + index"
                  :src="experience.logo"
                  :alt="experience.logo_alt"
                  contain
                  :width="experience.mobile_logo_with"
                  class="pa-1 floater floater_left"
                ></v-img>
              </v-slide-x-transition>

              <v-fade-transition :appear="true">
                <v-card
                  height="100%"
                >
                  <div align="right">
                    <v-card-title class="font-weight-medium body-2" style="display: block">
                      {{experience.title.substring(0, experience.title.search('@'))}}
                    </v-card-title>
                    <v-card-subtitle class="font-weight-medium body-2 py-0">
                      {{experience.title.substring(experience.title.search('@'),
                      experience.title.length)}}
                    </v-card-subtitle>
                    <v-card-subtitle class="py-0">{{experience.dates}}</v-card-subtitle>
                  </div>

                  <v-card-text align="left" class="px-2">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-regular text-uppercase subtitle-1"
                          style="white-space: normal; line-height: 1"
                        >
                          {{experience.subtitle}}
                        </v-list-item-title>
                        <v-list-item-subtitle
                          v-for="(detail, index) in experience.details"
                          :key="'mission-' + index" v-html="detail"
                          v-bind:class="[$vuetify.breakpoint.xsOnly ? 'mission' : '', 'font-weight-light']"
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
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "MobileExperience",
    props: {
      experience: Object,
      index: Number
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

  .mission {
    -webkit-line-clamp: 5 !important;
    font-size: 12px;
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

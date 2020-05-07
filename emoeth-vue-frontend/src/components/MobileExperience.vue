<template>
  <v-row
    justify="center" no-gutters
  >
    <v-col cols="12">
      <v-parallax
        :src="experience.illustration"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin">Vuetify.js</h1>
            <h4 class="subheading">Build your application today!</h4>
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

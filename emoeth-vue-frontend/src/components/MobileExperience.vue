<template>
  <v-row
    justify="center" no-gutters class="px-4 px-lg-12 mx-lg-12 py-6"
    style="min-height: 340px; position:relative;"
  >
    Test

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

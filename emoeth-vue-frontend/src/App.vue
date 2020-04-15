<template>
  <v-app :dark="false">
    <emoeth-header></emoeth-header>
    <v-content>
      <v-scroll-y-transition mode="out-in">
        <router-view :key="$route.fullPath" class="router-transition"></router-view>
      </v-scroll-y-transition>
    </v-content>
    <emoeth-footer></emoeth-footer>
  </v-app>
</template>

<script>
  import EmoethHeader from './components/Header';
  import EmoethFooter from './components/Footer'

  export default {
    name: 'App',

    components: {
      EmoethHeader,
      EmoethFooter,
    },

    data: () => ({
      //
    }),
  };
</script>

<style scoped>

  .router-transition {
    transition-duration: 0.4s;
  }
</style>

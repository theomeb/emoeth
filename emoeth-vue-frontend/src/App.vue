<template>
  <v-app :dark="false">
    <emoeth-header></emoeth-header>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
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

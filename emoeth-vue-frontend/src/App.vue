<template>
  <v-app :dark="false">
    <emoeth-header></emoeth-header>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import EmoethHeader from './components/Header';

  export default {
    name: 'App',

    components: {
      EmoethHeader,
    },

    data: () => ({
      //
    }),
  };
</script>

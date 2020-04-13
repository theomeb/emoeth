<template>
  <div class="home">
    <snackbar :text="'This page is still under construction 😉'"></snackbar>

    <HelloWorld/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import Snackbar from "../components/Snackbar";

  export default {
    name: 'home',
    components: {
      HelloWorld,
      Snackbar
    },
  };
</script>

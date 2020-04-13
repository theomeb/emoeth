<template>
  <v-footer padless>
    <v-card
      flat
      tile
      width="100%"
      class="secondary text-center"
    >
      <v-container class="pa-1">
        <v-row justify="center" class="white--text" align-it="center">
          <v-img
            src="https://cdn.countryflags.com/thumbs/france/flag-round-250.png"
            contain class="mt-1 french-flag"
          ></v-img>
          <div class="ml-3 font-weight-light caption">
            {{ new Date().getFullYear() }} — <strong> Emoeth Dev.</strong>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

  .french-flag {
    height: 12px;
    max-width: 14px;
    opacity: 0.9;
  }

</style>

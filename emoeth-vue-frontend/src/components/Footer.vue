<template>
  <v-footer padless>
    <v-card
      flat
      tile
      width="100%"
      class="secondary text-center"
    >
      <v-container class="pa-2">
        <v-row justify="center" class="white--text" align-it="center">
          <v-img src="https://cdn.countryflags.com/thumbs/france/flag-round-250.png"
                 height="16px" max-width="16px" contain style="margin-top: 2px; opacity: 0.9"
          ></v-img>
          <div class="ml-3 font-weight-light">
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

</style>

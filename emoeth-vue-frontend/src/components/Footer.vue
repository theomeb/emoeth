<template>
  <v-footer padless>
    <v-card
      flat
      tile
      width="100%"
      class="secondary text-center"
    >
      <v-card-text class="white--text py-2">
        {{ new Date().getFullYear() }} — <strong>Emoeth Dev.</strong>
      </v-card-text>
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

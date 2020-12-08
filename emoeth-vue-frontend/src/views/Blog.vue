<template>
  <v-container fluid>
    <v-row justify="center" class="mx-12 px-4 hidden-sm-and-down">
      <v-col cols="12" class="">
        <h1 class="display-2 headline font-weight-light mx-3">
          Tech tips
        </h1>
        <v-divider class="my-2"></v-divider>


      </v-col>
      <v-col cols="5">
        <v-card elevation="2" tile>
          <v-img
            height="140"
            src="https://miro.medium.com/max/1000/0*2Om2AWTE8eOfGE0B"
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="7">
        <v-card
          elevation="0"
        >
          <v-card-title href="google.com" class="pt-2">Working smoothly with Google Colab
          </v-card-title>
          <v-card-subtitle href="google.com">
            A 7-tips cheatsheet to efficiently get started with Colab
          </v-card-subtitle>
          <v-card-actions class="mx-2">
            <v-btn
              outlined tile class="caption"
              href="https://medium.com/@theomeb/working-smoothly-with-google-colab-393b7cb6d867"
              blank
            >
              <font-awesome-icon :icon="['fab', 'medium']" pull="left" size="lg" class=""/>
              Check it on Medium
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>

    </v-row>


    <v-row justify="center" class="px-2 hidden-md-and-up">
      <v-col cols="12" class="">
        <h1 class="display-2 headline font-weight-light mx-3">
          Tech tips
        </h1>
        <v-divider class="my-2"></v-divider>


      </v-col>

      <v-col cols="12">
        <v-card elevation="2" tile>
          <v-img
            height="200"
            src="https://miro.medium.com/max/1000/0*2Om2AWTE8eOfGE0B"
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card elevation="0">
          <v-card-title href="google.com" class="pt-0 px-0 overline">Working smoothly with Google
            Colab
          </v-card-title>
          <v-card-subtitle href="google.com" class="caption py-0 px-0">
            A 7-tips cheatsheet to efficiently get started with Colab
          </v-card-subtitle>
          <v-card-actions class="px-0">
            <v-btn
              outlined tile class="caption"
              href="https://medium.com/@theomeb/working-smoothly-with-google-colab-393b7cb6d867"
              blank
            >
              <font-awesome-icon :icon="['fab', 'medium']" pull="left" size="lg" class=""/>
              Check it on Medium
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


  export default {
    name: 'About',
    components: {},
    data: () => {
      return {}
    },
    methods: {},
  };
</script>


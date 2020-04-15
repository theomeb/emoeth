<template>
  <v-container fluid>
    <snackbar :text="'This page is still under construction 😉'"></snackbar>

    <experience
      v-for="experience in experiences" :experience="experience"
      v-if="showIllustration"
      :key="'experience-' + experience.id" :id="'experience-' + experience.id"
    ></experience>

  </v-container>
</template>

<script>
  import Experience from "../components/Experience";
  import Snackbar from "../components/Snackbar";

  export default {
    name: 'About',
    components: {
      Experience,
      Snackbar,
    },
    data: () => {
      return {
        showIllustration: false,
        experiences: [
          {
            id: 0,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/sydney.jpg'),
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          },
          {
            id: 1,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/paris.jpg'),
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          },
          {
            id: 2,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/munich.jpg'),
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'HelloFresh Logo',
            missions: [
              {
                id: 0,
                action: '• Implemented web tools to streamline and speed up Logistics and Procurement teams’ processes'
              },
              {
                id: 1,
                action: ' • Gathered customer data to support Customer Care and Finance teams with a dedicated interface'
              },
              {
                id: 2,
                action: '• Created a central interface to manage future recipes and prices, HelloFresh being a food-delivery  company'
              },
              {
                id: 3,
                action: '• Mined historical data to improve user experience and support Quality team'
              }
            ]
          }
        ]
      }
    },
    methods: {},
    mounted() {
      this.showIllustration = true;
    }
  };
</script>

<style scoped>

</style>

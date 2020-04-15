<template>
  <v-container fluid min-width="1000px">
    <snackbar :text="'This page is still under construction 😉'"></snackbar>

    <v-responsive>
      <experience
        v-for="experience in experiences" :experience="experience"
        :display-experience="experience.id < nbExperiencesDisplayed"
        v-intersect="{handler: onIntersect,options: {threshold: [intersectionThreshold]}}"
        :key="'experience-' + experience.id" :id="experience.id"
      ></experience>
    </v-responsive>

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
            display: false,
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
            display: true,
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
            display: true,
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
        ],
        nbExperiencesDisplayed: 1,
        intersectionThreshold: 0.4,
      }
    },
    methods: {
      onIntersect(entries, observer) {
        let intersection = entries[0].intersectionRatio;
        let id = parseInt(entries[0].target.id);

        if ((id + 1) > this.nbExperiencesDisplayed && intersection >= this.intersectionThreshold) {
          if (intersection >= this.intersectionThreshold) {
            this.nbExperiencesDisplayed += 1;
          }
        } else if ((id + 1) === this.nbExperiencesDisplayed && intersection < this.intersectionThreshold) {
          if (intersection < this.intersectionThreshold) {
            this.nbExperiencesDisplayed -= 1;
          }
        }
      }
    },
    mounted() {
      this.showIllustration = true;
    }
  };
</script>

<style scoped>

</style>

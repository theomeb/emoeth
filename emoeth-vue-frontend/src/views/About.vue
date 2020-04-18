<template>
  <v-container fluid min-width="1000px">
    <snackbar :text="'This page is still under construction! 😉'"></snackbar>

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
        experiences: [
          {
            id: 0,
            display: false,
            slug: 'tum_academic',
            title: 'Technische Universität München – Faculty of Mathematics',
            dates: 'September 2019 - now',
            illustration: require('../assets/illustrations/munich.jpg'),
            alt: 'Munich picture',
            left_position: true,
            logo: require('../assets/logos/tum.png'),
            logo_alt: 'TUM Logo',
            logo_width: "60px",
            missions: [
              {
                id: 0,
                action: 'Master of Science – Mathematics in Data Science'
              },
              {
                id: 1,
                action: '<i>Lectures</i>: Machine Learning, Deep Learning, Data Engineering, Applied Regression, Data Mining'
              }
            ]
          },
          {
            id: 1,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/sydney.jpg'),
            alt: 'Sydney picture',
            left_position: true,
            logo: require('../assets/logos/hellofresh.svg'),
            logo_alt: 'HelloFresh Logo',
            logo_width: "140px",
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
            slug: 'theodo_internship',
            title: 'CentraleSupélec – former École Centrale Paris',
            dates: 'September 2016 - now',
            illustration: require('../assets/illustrations/centralesupelec.jpg'),
            alt: 'CentraleSupélec picture',
            left_position: true,
            logo: require('../assets/logos/centralesupelec.png'),
            logo_alt: 'CentraleSupélec Logo',
            logo_width: "80px",
            missions: [
              {
                id: 0,
                action: '<b>One of France’s top-3 engineering schools</b>'
              },
              {
                id: 1,
                action: '<i>Lectures:</i> Analysis, Probability, Statistics, Machine Learning, Software Development, Economy,\n' +
                  'Corporate Finance, Entrepreneurship, Physics, Physical statistics applied to economy, Life Science, Heat\n' +
                  'Transfer, Thermodynamics, Mechanics'
              }
            ]
          },
          {
            id: 3,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/munich.jpg'),
            alt: 'Sydney picture',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_alt: 'HelloFresh Logo',
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
            id: 4,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/munich.jpg'),
            alt: 'Sydney picture',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_alt: 'HelloFresh Logo',
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
            id: 5,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/munich.jpg'),
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            alt: 'Sydney picture',
            logo_alt: 'HelloFresh Logo',
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
            id: 6,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/munich.jpg'),
            alt: 'Sydney picture',
            left_position: true,
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_logo_alt: 'HelloFresh Logo',
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
    }
  };
</script>

<style scoped>

</style>

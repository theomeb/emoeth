<template>
  <v-container fluid min-width="1000px">
    <snackbar :text="'This page is still under construction! 😉'"></snackbar>

    <v-responsive>
      <experience
        v-for="experience in experiences" :experience="experience"
        :display-experience="experience.id < nbExperiencesDisplayed"
        v-intersect="{handler: onIntersect,options: {threshold: [intersectionThreshold]}}"
        :key="'experience-' + experience.id" :id="experience.id"
        :image-right-aligned="experience.id % 2 === 1"
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
            title: 'MSc Mathematics in Data Science @ TUM',
            subtitle: 'One of the best European Data Science program',
            dates: 'September 2019 - now',
            illustration: require('../assets/illustrations/munich.jpg'),
            alt: 'Munich picture',
            logo: require('../assets/logos/tum.png'),
            logo_alt: 'TUM Logo',
            logo_width: "80px",
            missions: [
              {
                id: 0,
                action: '<b>Data Engineering</b>: Foundations in Data Engineering, Databases and CPU architectures',
              },
              {
                id: 1,
                action: '<b>Data analysis</b>: Foundations in Data Analysis, Applied Regression '
              },
              {
                id: 2,
                action: '<b>Data analytics</b>: Machine Learning, ML for Graphs and Sequential Data, Deep Learning, Computer Vision (Detection, Segmentation and Tracking)'
              },
              {
                id: 3,
                action: '<b>TUM Data Innovation Lab</b>: Deep Learning for Genetic Risk Prediction'
              }
            ]
          },
          {
            id: 1,
            display: true,
            slug: 'hellofresh_internship',
            title: 'OpsTech Developer @ HelloFresh',
            subtitle: 'Part of a small tech team helping a food-delivery company',
            dates: 'January - July 2019',
            illustration: require('../assets/illustrations/sydney.jpg'),
            alt: 'Sydney picture',
            logo: require('../assets/logos/hellofresh.svg'),
            logo_alt: 'HelloFresh Logo',
            logo_width: "150px",
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
            slug: 'cs_academic',
            title: 'Master of Engineering @ École Centrale Paris',
            subtitle: 'One of France’s top-3 engineering schools',
            dates: 'September 2016 - now',
            illustration: require('../assets/illustrations/centralesupelec.jpg'),
            alt: 'CentraleSupélec picture',
            logo: require('../assets/logos/centralesupelec.png'),
            logo_alt: 'CentraleSupélec Logo',
            logo_width: "100px",
            missions: [
              {
                id: 0,
                action: '<b>Maths</b>: Analysis, Probability, Statistics, Partial Differential Equations',
              },
              {
                id: 1,
                action: '<b>Computer Science</b>: Machine Learning, Software Development, Algorithms and Programming'
              },
              {
                id: 2,
                action: '<b>Business</b>: Economy, Advanced, Corporate Finance, Entrepreneurship, Applications of statistical physics to socio-economical complex\n' +
                  'systems'
              },
              {
                id: 3,
                action: '<b>Physics</b>: Heat Transfer, Thermodynamics, Quantum and Statistical Physics, Life Science'
              },
              {
                id: 4,
                action: '<b>Engineering</b>: Embedded Control Systems, Sustainable Development, Design of Mechanical Structures Laboratory, Civil Engineering'
              },
              {
                id: 5,
                action: '<b>Innovation project</b>: Mobile application implementation for campus community'
              },
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
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_alt: 'HelloFresh Logo',
            logo_width: "160px",
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
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_alt: 'HelloFresh Logo',
            logo_width: "160px",
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
            logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
            logo_logo_alt: 'HelloFresh Logo',
            logo_width: "160px",
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
        intersectionThreshold: 0.3,
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

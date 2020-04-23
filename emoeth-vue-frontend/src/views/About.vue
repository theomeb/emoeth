<template>
  <v-container fluid min-width="1000px">

    <v-responsive>
      <experience
        v-for="experience in experiences" :experience="experience"
        :display-experience="experience.id < nbExperiencesDisplayed"
        v-intersect="{
          handler: onIntersect,
          options: {threshold: [intersectionThreshold-0.1, intersectionThreshold+0.1]
          }}"
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
            subtitle: 'One of the best European Data Science programs',
            dates: 'September 2019 - now',
            illustration: require('../assets/illustrations/munich.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/munich.jpg'),
            alt: 'Munich picture',
            logo: require('../assets/logos/tum.png'),
            logo_alt: 'TUM Logo',
            logo_width: "70px",
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
            lazy_illustration: require('../assets/illustrations/low_quality/sydney.jpg'),
            alt: 'Sydney picture',
            logo: require('../assets/logos/hellofresh.svg'),
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
            id: 2,
            display: true,
            slug: 'cs_academic',
            title: 'Master of Engineering @ École Centrale Paris',
            subtitle: 'One of France’s top-3 engineering schools',
            dates: 'September 2016 - now',
            illustration: require('../assets/illustrations/centralesupelec.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/centralesupelec.jpg'),
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
            slug: 'theodo_internship',
            title: 'Full-stack Web Developer @ Theodo',
            subtitle: 'Part of a web-development consulting company',
            dates: 'July 2018 - January 2019',
            illustration: require('../assets/illustrations/paris.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/paris.jpg'),
            alt: 'Paris picture',
            logo: require('../assets/logos/theodo.png'),
            logo_alt: 'Theodo Logo',
            logo_width: "80px",
            missions: [
              {
                id: 0,
                action: '• Counseled numerous clients to help them build software solving their business problems'
              },
              {
                id: 1,
                action: ' • Improved in a scrum-organized environment the website of <b>Tarkett</b>, a top multinational specialized in flooring (€2,836 billion revenue)'
              },
              {
                id: 2,
                action: '• Applied Agile & Lean methods to make continuous improvement'
              },
            ]
          },
          {
            id: 4,
            display: true,
            slug: 'lumex_tv_internship',
            title: 'Operator Intern @ Lumex TV',
            subtitle: 'Lighting and power equipment rental company (TV, Cinema, Advertisement)',
            dates: 'July 2017',
            illustration: require('../assets/illustrations/lumex.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/lumex.jpg'),
            alt: 'Blue collar picture',
            logo: require('../assets/logos/lumex.png'),
            logo_alt: 'Lumex Logo',
            logo_width: "140px",
            missions: [
              {
                id: 0,
                action: '• Worked 4 weeks as a blue-collar worker in a team of 10 operators'
              },
              {
                id: 1,
                action: ' • Carried out repairs on mechanical and electric material, picking/packing orders'
              },
            ]
          },
          {
            id: 5,
            display: true,
            slug: 'prepa_academic',
            title: 'MPSI/MP* @ Lycée Corneille, Normandie',
            subtitle: '2 years of preparation',
            dates: 'September 2014 - July 2016',
            illustration: require('../assets/illustrations/prepa.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/prepa.jpg'),
            alt: 'Prepa picture',
            logo: require('../assets/logos/pierre_corneille.png'),
            logo_alt: 'Lycee Pierre Corneille Logo',
            logo_width: "50px",
            missions: [
              {
                id: 0,
                action: '<b>for the highly competitive entrance exams to the French Grandes Écoles</b>'
              },
              {
                id: 1,
                action: '• Mathematics'
              },
              {
                id: 2,
                action: '• Physics'
              },
              {
                id: 3,
                action: '• Computer Science'
              },
              {
                id: 4,
                action: '• Philosophy and General Culture'
              }
            ]
          },
          {
            id: 6,
            display: true,
            slug: 'baccalaureate_academic',
            title: 'Scientific High School Diploma',
            subtitle: 'French Baccalaureate',
            dates: 'July 2014',
            illustration: require('../assets/illustrations/normandie.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/normandie.jpg'),
            alt: 'Normandie picture',
            logo: require('../assets/logos/education_nationale.png'),
            logo_alt: 'Education Nationale Logo',
            logo_width: "70px",
            missions: [
              {
                id: 0,
                action: '• <b>European section</b>'
              },
              {
                id: 1,
                action: ' • Graduated with highest honors – <b>19,47/20</b>'
              },
            ]
          }
        ],
        nbExperiencesDisplayed: 1,
        intersectionThreshold: 0.8,
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

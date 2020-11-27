<template>
  <v-container fluid class="pa-0">

    <v-row justify="center" no-gutters class="px-4 px-lg-12 mx-lg-12 mt-4">
      <v-col cols="12" md="5" align="left" align-self="center" class="d-flex">
        <v-avatar size="80" class="hidden-sm-and-down">
          <v-img :src="avatarLink"></v-img>
        </v-avatar>
        <div class="align-self-center">
          <div class="display-1 font-weight-light pl-xs-0 pl-md-4">
            <p class="font-weight-light mb-0">Théomé Borck</p>
            <v-btn
              loading
              elevation="2"
              outlined
              small
              tile
              :loading="CVLoading"
              href="theome_borck_cv.pdf"
              download
              target="blank"
              @click="triggerCVLoading"
            >
              <font-awesome-icon pull="left" size="lg" :icon="['fas', 'file-pdf']"/>
              Over here to get my CV!
              <template v-slot:loader>
                <span class="cv-download-loader">
                  <font-awesome-icon size="lg" :icon="['fas', 'sync-alt']" spin class="fa-spin"/>
                </span>
              </template>
            </v-btn>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-avatar size="60" class="hidden-md-and-up">
          <v-img :src="avatarLink"></v-img>
        </v-avatar>

      </v-col>
      <v-col cols="12" md="7" class="text-md-right ma-4 ma-md-0">
        <div class="title font-weight-medium">
          Dual degree student
        </div>
        <div class="body-1 text-md font-weight-light hidden-xs-only">
          Master of Engineering @ École Centrale Paris
        </div>
        <div class="body-1 font-weight-light hidden-xs-only">
          Master of Science - Mathematics in Data Science @ TUM
        </div>
        <div class="body-2 font-weight-light hidden-sm-and-up">
          Master of Engineering @ École Centrale Paris
        </div>
        <div class="body-2 font-weight-light hidden-sm-and-up">
          MSc - Mathematics in Data Science @ TUM
        </div>
      </v-col>

    </v-row>


    <v-row class="px-4 px-lg-12 mx-lg-12 hidden-sm-and-down">
      <v-col cols="12" align="center">
        <v-scale-transition :appear="true">
          <v-divider
            v-if="showExperiences" class="mt-4"
          ></v-divider>
        </v-scale-transition>
      </v-col>
    </v-row>


    <v-responsive v-if="showExperiences" class="hidden-sm-and-down">
      <experience
        v-for="(experience, index) in experiences" :experience="experience"
        :display-experience="index < nbExperiencesDisplayed"
        v-intersect="{
          handler: onIntersect,
          options: {threshold: [closeIntersectionThreshold,  intersectionThreshold]
          }}"
        :key="'experience-' + index" :id="index"
        :image-right-aligned="index % 2 === 1"
        :index="index"
      ></experience>
    </v-responsive>


    <v-responsive class="hidden-md-and-up">
      <mobile-experience
        v-for="(experience, index) in experiences" :experience="experience"
        :key="'mobile-experience-' + index" :id="index" :index="index"
      ></mobile-experience>
    </v-responsive>

  </v-container>
</template>

<script>
  import Experience from "../components/Experience";
  import MobileExperience from "../components/MobileExperience";
  import Snackbar from "../components/Snackbar";


  export default {
    name: 'About',
    components: {
      Experience,
      MobileExperience,
      Snackbar,
    },
    data: () => {
      return {
        experiences: [
          {
            slug: 'parkdepot_workingstudent',
            title: 'ParkDepot',
            subtitle: 'ML Engineer - Working Student',
            dates: 'Munich | June 2020 - now',
            illustration: require('../assets/illustrations/parking.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/parking.jpg'),
            alt: 'Parking picture',
            logo: require('../assets/logos/parkdepot_logo.png'),
            logo_alt: 'ParkDepot Logo',
            logo_width: "140px",
            mobile_logo_with: "100px",
            details: [
              '• Building a real-time automatic license plate recognition pipeline, to monitor traffic in parking lots.',
              '• Working on different deep learning problems, from vehicle detection to optical character recognition.',
            ]
          },
          {
            slug: 'tum_academic',
            title: 'Technische Universität München',
            subtitle: 'MSc Mathematics in Data Science',
            dates: 'Munich | Sept. 2019 - now',
            illustration: require('../assets/illustrations/munich.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/munich.jpg'),
            alt: 'Munich picture',
            logo: require('../assets/logos/tum.png'),
            logo_alt: 'TUM Logo',
            logo_width: "70px",
            mobile_logo_with: "60px",
            details: [
              '<b>Applied mathematics</b>',
              'Foundations in data analysis, Applied regression, Probabilistic techniques and algorithms in data analysis',
              '<b>Data Engineering & Analytics</b>',
              'Foundations in data engineering, Data mining and knowledge discovery, Machine learning, Machine learning for graphs and sequential data, Business Analytics',
              '<b>Computer vision & Natural Language Processing</b>',
              'Deep learning, Computer vision (detection, segmentation and tracking), NLP',
              '<b>TUM Data Innovation Lab</b>: Deep learning for genetic risk prediction'
            ]
          },
          {
            slug: 'hellofresh_internship',
            title: 'HelloFresh AU',
            subtitle: 'OpsTech Developer',
            dates: 'Sydney | Jan. - July 2019',
            illustration: require('../assets/illustrations/sydney.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/sydney.jpg'),
            alt: 'Sydney picture',
            logo: require('../assets/logos/hellofresh.svg'),
            logo_alt: 'HelloFresh Logo',
            logo_width: "160px",
            mobile_logo_with: "120px",
            details: [
              '<b>part of a small tech team helping a food-delivery company</b>',
              '• Implemented and maintained web tools to streamline and speed up processes in teams such as Logistics, Customer Care, Quality or Finance.',
              '• Created, within a 4-people team, a central interface to manage future recipes, from price definition and recipe creation to ingredients’ ordering and packing.'
            ]
          },
          {
            slug: 'theodo_internship',
            title: 'Theodo',
            subtitle: 'Full-stack Web Developer',
            dates: 'Paris | July 2018 - Jan. 2019 ',
            illustration: require('../assets/illustrations/paris.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/paris.jpg'),
            alt: 'Paris picture',
            logo: require('../assets/logos/theodo.png'),
            logo_alt: 'Theodo Logo',
            logo_width: "80px",
            mobile_logo_with: "70px",
            details: [
              '<b>part of a web-development consulting company</b>',
              '• Supported clients to help them build software solving their business problems in a scrum-organized team of 6 people.',
              '• Applied Agile & Lean methods to make continuous improvement'
            ]
          },
          {
            slug: 'cs_academic',
            title: 'École Centrale Paris',
            subtitle: 'Master of Engineering - Grande École',
            dates: 'Paris area | Sept. 2016 - now',
            illustration: require('../assets/illustrations/centralesupelec.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/centralesupelec.jpg'),
            alt: 'CentraleSupélec picture',
            logo: require('../assets/logos/centralesupelec.png'),
            logo_alt: 'CentraleSupélec Logo',
            logo_width: "100px",
            mobile_logo_with: "100px",
            details: [
              '<b>Maths</b>: Analysis, Probability, Statistics, Partial Differential Equations', ,
              '<b>Computer Science</b>: Machine Learning, Software Development, Algorithms and Programming',
              '<b>Business</b>: Economy, Advanced, Corporate Finance, Entrepreneurship, Applications of statistical physics to socio-economical complex systems',
              '<b>Physics</b>: Heat Transfer, Thermodynamics, Quantum and Statistical Physics, Life Science',
              '<b>Engineering</b>: Embedded Control Systems, Sustainable Development, Design of Mechanical Structures Laboratory, Civil Engineering',
              '<b>Innovation project</b>: Mobile application implementation for the campus community. Get it here <b>resa.centralesupelec.fr/campass.html</b> !'
            ]
          },
          {
            slug: 'lumex_tv_internship',
            title: 'Lumex TV',
            subtitle: 'Operator intern',
            dates: 'Paris area | July 2017',
            illustration: require('../assets/illustrations/lumex.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/lumex.jpg'),
            alt: 'Blue collar picture',
            logo: require('../assets/logos/lumex.png'),
            logo_alt: 'Lumex Logo',
            logo_width: "140px",
            mobile_logo_with: "140px",
            details: [
              '<b>Lighting and power equipment rental company (TV, Cinema, Advertisement)</b>',
              '• Worked 4 weeks as a technician in a team of 10 operators',
              '• Carried out repairs on mechanical and electric material, picking/packing orders',
            ]
          },
          {
            slug: 'prepa_academic',
            title: 'Lycée Pierre Corneille',
            subtitle: 'MPSI/MP* - 2 years of preparatory classes',
            dates: 'Rouen, Normandie | 2014 - 2016',
            illustration: require('../assets/illustrations/prepa.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/prepa.jpg'),
            alt: 'Prepa picture',
            logo: require('../assets/logos/pierre_corneille.png'),
            logo_alt: 'Lycee Pierre Corneille Logo',
            logo_width: "50px",
            mobile_logo_with: "40px",
            details: [
              '<b>for the highly competitive entrance exams to the French Grandes Écoles</b>',
              '• Mathematics',
              '• Physics',
              '• Computer Science',
              '• Philosophy and General Knowledge'
            ]
          },
          {
            slug: 'baccalaureate_academic',
            title: 'Lycée Raymond Queneau',
            subtitle: 'French Baccalaureate',
            dates: 'Yvetot, Normandie | July 2014',
            illustration: require('../assets/illustrations/normandie.jpg'),
            lazy_illustration: require('../assets/illustrations/low_quality/normandie.jpg'),
            alt: 'Normandie picture',
            logo: require('../assets/logos/education_nationale.png'),
            logo_alt: 'Education Nationale Logo',
            logo_width: "60px",
            mobile_logo_with: "45px",
            details: [
              '<b>Scientific High School Diploma</b>',
              '• European section',
              '• Graduated with highest honors – <b>19,47/20</b>'
            ]
          }
        ],
        nbExperiencesDisplayed: 1,
        intersectionThreshold: 0.8,
        closeIntersectionThreshold: 0.3,
        showExperiences: false,
        avatarLink: require('../assets/pp.jpg'),
        CVLoading: false,
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
        } else if ((id + 1) === this.nbExperiencesDisplayed && intersection <= this.closeIntersectionThreshold) {
          this.nbExperiencesDisplayed -= 1;
        }
      },
      triggerCVLoading() {
        this.CVLoading = true;
        setTimeout(() => {
          this.CVLoading = false
        }, 1200)
      }
    },
    mounted() {
      setTimeout(() => {
        this.showExperiences = true;
      }, 500);
    }
  };
</script>

<style scoped>

  .fa-spin {
    animation-duration: 1s;
  }

</style>

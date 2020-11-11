import Vue from 'vue';
import vsButton from 'vuesax';
import 'vuesax/dist/vuesax.css';
import Vuetify from 'vuetify/lib';
import theme from './modules/theme'
import App from './App.vue';
import router from './modules/router';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faBars,
  faEnvelope,
  faFilePdf,
  faHome,
  faNewspaper,
  faProjectDiagram,
  faRssSquare,
  faSyncAlt,
  faTasks,
  faUserCircle,
  faTimes,
  faCircleNotch,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faBars, faFilePdf, faSyncAlt, faHome, faUserCircle, faTasks, faArrowRight,
  faNewspaper, faEnvelope, faLinkedin, faGithub, faMedium, faFacebookSquare, faRssSquare,
  faProjectDiagram, faTimes, faCircleNotch, faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: theme.light
    }
  }
});

Vue.use(vsButton, {
  colors: {
    primary: theme.light.primary,
    success: theme.light.success,
    warning: theme.light.warning,
    danger: theme.light.error,
    dark: theme.light.primary
  }
})
;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

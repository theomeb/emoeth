import Vue from 'vue';
import vsButton from 'vuesax';
import 'vuesax/dist/vuesax.css';
import Vuetify from 'vuetify/lib';
import theme from './modules/theme'
import App from './App.vue';
import router from './modules/router';

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

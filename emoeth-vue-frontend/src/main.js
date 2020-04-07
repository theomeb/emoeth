import Vue from 'vue';
import Vuesax from 'vuesax';
import vuesaxOptions from './plugins/vuesax';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './modules/router';

Vue.config.productionTip = false;

Vue.use(Vuesax, vuesaxOptions);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
